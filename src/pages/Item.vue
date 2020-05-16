<template>
  <q-page class="row justify-center">
    <div class="col col-md-8 col-xl-6 q-pa-sm">
      <div class="text-h6 q-my-sm" v-if="!state.itemActive.id">該当する商品がありません。
        <div class="text-right">
          <q-btn class="q-ml-sm" label="戻る" :to="{ name: 'top' }" />
        </div>
      </div>
      <div v-else>
        <div class="text-h5 q-my-sm" v-if="state.itemActive.id === 'new'">商品の新規登録</div>
        <div class="text-h5 q-my-sm" v-else>商品ID: {{ state.itemActive.id }}</div>
        <q-form ref="main">
          <q-input v-model="state.itemActive.name" label="商品名" :rules="[
              v => !!v || '入力必須です。'
            ]"
          />
          <div class="row">
            <div class="col col-6 q-pr-md">
              <q-select v-model="state.itemActive.color" :options="state.colors" label="色" :rules="[
                  v => !!v || '入力必須です。'
                ]"
              />
            </div>
            <div class="col col-6 q-pl-md">
              <q-input v-model="state.itemActive.length" label="サイズ" type="number" :rules="[
                  v => !!v || '入力必須です。',
                  v => v > 0 || '1cm 以上の値を入力してください。',
                  v => v <= 100 || '100cm 以下の値を入力してください。',
                ]"
                suffix="cm"
              />
            </div>
          </div>
          <div class="text-right">
            <q-btn
              class="q-mr-sm" color="primary" label="保存"
              @click="saveItem($refs.main, () => { $router.push({ name: 'top' }) })"
              :disable="state.waitUpdate"
            />
            <q-btn
              class="q-ml-sm" label="取り消し"
              :to="{ name: 'top' }"
              :disable="state.waitUpdate"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import store from 'boot/composition-api'
import { watch } from '@vue/composition-api'

export default {
  name: 'PageItem',
  setup () {
    // 保持データのストアを使用する。
    const rootStore = store.useStore()
    // route 設定時
    watch('$route.params.itemId', itemId => {
      // 編集対象の商品を設定する。
      rootStore.state.itemActive = itemId === 'new'
        ? { id: 'new' }
        : { ...rootStore.item(Number(itemId)) }
      // データ更新待機ステータをクリアする。
      rootStore.state.waitUpdate = false
    })
    return rootStore
  }
}
</script>
