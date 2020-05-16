import * as items from './items'
import * as utils from './utils'

const { itemsState, ...itemsFunctions } = items
const { utilsState, ...utilsFunctions } = utils

export default {
  modelsState: {
    ...itemsState,
    ...utilsState
  },
  ...itemsFunctions,
  ...utilsFunctions
}
