import axios from 'axios'

// APIのパス
const apiUrl = 'api'

export const getItems = async () => (await axios.get(apiUrl + '/items')).data.data
export const postItem = item => axios.post(apiUrl + '/items', item)
export const putItem = item => axios.put(apiUrl + '/items/' + item.id, item)
export const deleteItem = item => axios.delete(apiUrl + '/items/' + item.id)
