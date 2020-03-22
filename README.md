# music-list-on-discord-server

[get-music-url-bot](https://github.com/tsuen4/get-music-url-bot) で記録された情報を取得していい感じに表示するやつです。（身内用に作りました。）

Discord 側に表示される埋め込みプレーヤーで遡るのが面倒になってしまったために作ったものです。

sample -> <https://music-list-on-discord-server.herokuapp.com/688237096439119919>

![preview](https://i.imgur.com/eRNCxpS.gif)

## 起動

```bash
npm install
npm run serve
```

## デプロイ

```bash
npm run build # 静的ファイルを生成
npm run express
```
