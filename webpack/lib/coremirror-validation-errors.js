import {RangeSet} from '@codemirror/rangeset'
import {StateField, StateEffect} from '@codemirror/state'
import {GutterMarker} from '@codemirror/gutter'

export const validationErrorsMarker = new class extends GutterMarker {
  toDOM() {
    const marker = document.createElement('div')
    marker.className = 'validation-error-marker'
    return marker
  }
}

export const validationErrorsEffect = StateEffect.define({
  map: (val, mapping) => ({pos: mapping.mapPos(val.pos)})
})

export const validationErrorsState = StateField.define({
  create() { return RangeSet.empty },
  update(set, transaction) {
    set = set.map(transaction.changes)
    for (let e of transaction.effects) {
      if (e.is(validationErrorsEffect)) {
        switch (e.value.type) {
          case 'remove':
            set = set.update({filter: from => from != e.value.pos})
            break
          case 'empty':
            set = RangeSet.empty
            break
          default:
            set = set.update({add: [validationErrorsMarker.range(e.value.pos)]})
        }
      }
    }
    return set
  }
})
