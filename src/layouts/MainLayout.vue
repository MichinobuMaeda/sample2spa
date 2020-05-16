<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Sample 2 SPA
        </q-toolbar-title>

        <div>
          <a class="text-white" href="https://quasar.dev/" target="_blank" rel="noreferrer noopen">
            Quasar v{{ $q.version }}
          </a>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          外部リンク
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Github',
          caption: 'このサンプルのソース',
          icon: 'code',
          link: 'https://github.com/MichinobuMaeda/sample2spa'
        },
        {
          title: 'Sample 1 API',
          caption: 'HTTP API のサンプルのソース',
          icon: 'code',
          link: 'https://github.com/MichinobuMaeda/sample1api'
        },
        {
          title: 'みちのぶのねぐら',
          caption: '作者のホームページ',
          icon: 'home',
          link: 'https://michinobu.jp'
        }
      ]
    }
  }
}
</script>
