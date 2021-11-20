// wasm
import 'vendors/wasm_exec'
import {memoize} from 'utils/memoize'
import {expose} from 'comlink'
import {clientsListWithStats} from 'lib/reportHelpers'

const getGlobal = () => {
  if (typeof self !== 'undefined') {return self}
  if (typeof window !== 'undefined') {return window}
  if (typeof global !== 'undefined') {return global}
  throw new Error('unable to locate global object')
}

const globals = getGlobal()

if (!globals.WebAssembly.instantiateStreaming) { // wasm instantiateStreaming polyfill
  globals.WebAssembly.instantiateStreaming = async (resp, importObject) => {
    const source = await (await resp).arrayBuffer()
    return await globals.WebAssembly.instantiate(source, importObject)
  }
}

const loadWasmParser = memoize(async () => {
  const go = new globals.Go()
  const fetchPromise = globals.fetch('/parser.wasm')
  const {instance} = await globals.WebAssembly.instantiateStreaming(fetchPromise, go.importObject)
  go.run(instance) // do not wait for this promise, it never return result
  return instance
})

const processHTML = (html) => (
  loadWasmParser().then(() => globals.VMail(html))
)

expose({
  processHTML,
  clientsListWithStats
})
