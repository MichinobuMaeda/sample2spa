// Utils の保持データ
export const utilsState = {
  // データ更新待機
  waitUpdate: false
}

// 指定されたIDの要素を取得する。
export const getById = (list, id) => list.reduce((ret, cur) => cur.id === id ? { ...cur } : ret, {})

// データ更新待機ステータスを有効にしてデータ処理をする。
export const waitUpdateForProc = async (state, proc) => {
  // データ更新待機開始
  state.waitUpdate = true
  try {
    await proc()
  } finally {
    // データ更新待機終了
    state.waitUpdate = false
  }
}
