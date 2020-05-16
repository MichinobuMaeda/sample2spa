<template>
  <q-page class="row justify-center">
    <div class="col col-md-8 col-xl-6 q-pa-sm">
      <div class="text-h5 q-my-sm">商品一覧</div>
      <div class="q-ma-md">
        <q-btn
          color="primary" label="新規登録"
          :to="{ name: 'item', params: { itemId: 'new' } }"
        />
      </div>
      <div v-if="state.items.length">
        <q-markup-table separator="cell">
          <thead class="bg-secondary text-white">
            <tr>
              <th><span class="text-body1">ID</span></th>
              <th><span class="text-body1">商品名</span></th>
              <th><span class="text-body1">色</span></th>
              <th class="text-right"><span class="text-body1">サイズ(cm)</span></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in state.items" v-bind:key="item.id">
              <td class="text-right">{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td class="text-center">{{ item.color }}</td>
              <td class="text-right">{{ item.length }}</td>
              <td>
                <q-btn
                  class="q-mr-sm" round color="primary" icon="edit"
                  :to="{ name: 'item', params: { itemId: item.id } }"
                />
                <q-btn
                  class="q-ml-sm" round color="negative" icon="delete"
                  @click="confrimDeleteItem(item, () => { $refs.confirmDeleteitem.show() })"
                />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
      <div v-else>
        表示するデータがありません。
      </div>
    </div>
    <q-dialog ref="confirmDeleteitem">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-negative">警告</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          ID: {{ state.itemActive.id }} {{ state.itemActive.name }} を本当に削除しますか？
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="削除" color="negative" @click="deleteItem" v-close-popup />
          <q-btn label="中止" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import store from 'boot/composition-api'

export default {
  name: 'PageIndex',
  setup () {
    // 保持データのストアを使用する。
    const rootStore = store.useStore()
    return rootStore
  }
}
</script>
