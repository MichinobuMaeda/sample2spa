import Vue from 'vue'
import VueCompositionApi, { reactive, inject, provide } from '@vue/composition-api'
import models from '../models'

// Composit API を使用する。
Vue.use(VueCompositionApi)

const { modelsState, ...modelsFunctions } = models

// 保持データ
const state = reactive(modelsState)
// 保持データのストアの識別
const StoreSymbol = Symbol('rootStore')
// 保持データのストアを供給する。
const provideStore = store => { provide(StoreSymbol, store) }
// 保持データのストアを使用する。
const useStore = () => inject(StoreSymbol)

export default {
  state,
  ...modelsFunctions,
  provideStore,
  useStore
}
