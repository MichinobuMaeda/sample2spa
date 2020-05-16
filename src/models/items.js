import * as api from './api'
import * as utils from './utils'

// 商品の保持データ
export const itemsState = {
  // 商品一覧
  items: [],
  // 編集中の商品
  activeItem: {},
  // 商品色の一覧
  colors: ['白', '赤', '緑', '青', '黒']
}

// 商品一覧を取得する。
export const listItems = async (state) => { state.items = [...(await api.getItems())] }

// 編集対象の商品を設定する。
export const setActiveItem = (state, id, next) => {
  state.activeItem = id === 'new' ? { id: 'new' } : utils.getById(state.items, id)
  next && next()
}

// 商品の削除を実行する。
export const deleteItem = async state => utils.waitUpdateForProc(
  state, async () => {
    await api.deleteItem(state.activeItem)
    state.activeItem = {}
    // 商品一覧を取得する。
    await listItems(state)
  })

// 商品の新規登録または更新を実行する。
export const saveItem = (state, form, next) => utils.waitUpdateForProc(
  state, async () => {
    // 入力エラーを確認んする。
    if (!(await form.validate())) {
      return
    }
    // 入力値を新規登録または更新する。
    if (state.activeItem.id === 'new') {
      await api.postItem(state.activeItem)
    } else {
      await api.putItem(state.activeItem)
    }
    next && next()
    // 商品一覧を取得する。
    await listItems(state)
  })
