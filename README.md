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

## 開発環境

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
```

[Sample 1 API](https://github.com/MichinobuMaeda/sample1api)
を起動しておく。

```shell script
$ git clone git@github.com:MichinobuMaeda/sample1api.git
$ cd sample1api
$ php -S 0.0.0.0:8000 -t public
```

Sample 2 SAP を起動する。

```shell script
$ git clone git@github.com:MichinobuMaeda/sample2spa.git
$ cd sample2spa
$ quasar dev
```

## プロジェクトの作成手順

``quasar create`` のオプションはすべてデフォルトを選択する。

```
$ quasar create sample2spa
$ cd sample2spa
$ git init
$ git add .
$ git commit -m "First commit"
$ git remote add origin git@github.com:MichinobuMaeda/sample2spa.git
$ git push -u origin master
$ yarn add @vue/composition-api
$ yarn add axios
```
