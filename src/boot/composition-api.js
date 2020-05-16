import axios from 'axios'
import Vue from 'vue'
import VueCompositionApi, { reactive, inject, provide } from '@vue/composition-api'

// Composit API を使用する。
Vue.use(VueCompositionApi)

// 保持データ
const state = reactive({
  // 商品一覧
  items: [],
  // 編集中の商品
  itemActive: {},
  // データ更新待機
  waitUpdate: false,
  // 商品色の一覧
  colors: ['白', '赤', '緑', '青', '黒']
})

// IDに対応する商品
const item = id => state.items.reduce((ret, cur) => cur.id === id ? { ...cur } : ret, {})

// 商品一覧を保持する。
const setItems = items => { state.items = [...items] }

// APIのパス
const apiUrl = 'api'

// 商品一覧を取得する。
const listItems = async () => {
  const resp = await axios.get(apiUrl + '/items')
  setItems(resp.data.data)
}

// 商品の削除を確認する。
const confrimDeleteItem = (item, next) => {
  state.itemActive = { ...item }
  next && next()
}

// 商品の削除を実行する。
const deleteItem = async () => {
  try {
    await axios.delete(apiUrl + '/items/' + state.itemActive.id)
  } finally {
    state.itemActive = {}
    // 商品一覧を取得する。
    await listItems()
  }
}

// 商品の新規登録または更新を実行する。
const saveItem = async (form, next) => {
  // データ更新待機開始
  state.waitUpdate = true
  try {
    // 入力エラーが無い場合、
    const valid = await form.validate()
    if (valid) {
      // 入力値を新規登録または更新する。
      if (state.itemActive.id === 'new') {
        console.info(state.itemActive)
        await axios.post(apiUrl + '/items', state.itemActive)
      } else {
        await axios.put(apiUrl + '/items/' + state.itemActive.id, state.itemActive)
      }
      next && next()
    }
  } finally {
    // 商品一覧を取得する。
    await listItems()
    // データ更新待機終了
    state.waitUpdate = false
  }
}

// 保持データのストアの識別
const StoreSymbol = Symbol('rootStore')
// 保持データのストアを供給する。
const provideStore = store => { provide(StoreSymbol, store) }
// 保持データのストアを使用する。
const useStore = () => inject(StoreSymbol)

export default {
  state,
  item,
  setItems,
  listItems,
  saveItem,
  provideStore,
  confrimDeleteItem,
  deleteItem,
  useStore
}
