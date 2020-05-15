Sample 2 SPA
=====

[Quasar Framework](https://quasar.dev/)
による SPA ( Single Page Application ) のサンプル。

[Sample 1 SPA](https://github.com/MichinobuMaeda/sample1spa)
の
[Vuex](https://vuex.vuejs.org/)
を
[Vue Composition API](https://composition-api.vuejs.org/)
に変更した。
Vuex と Composition API は同居できるが、
依存するパッケージをできるだけ減らすために Composition API だけにした。

1. ``quasar create`` のオプションはすべてデフォルトを選択する。

```shell script
$ node --version
  v14.2.0
$ npm --version
  6.14.4
$ npm i yarn -g
$ yarn --version
  1.22.4
$ yarn global add @quasar/cli
$ quasar --version
 1.8.6
$ quasar create sample2spa
$ cd sample2spa
$ git init

```
