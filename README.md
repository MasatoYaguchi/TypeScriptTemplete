# TypeScriptの設定

参考URL  
https://ics.media/entry/16329/

yarnとnodejs及びVS Codeがインストール済みの想定

## パッケージ追加

VS codeで対象フォルダを開く
ターミナルから対象パッケージを柄v
`yarn add webpack webpack-cli typescript ts-loader`  
  
## package.json

下記のWebPackビルド用の設定追加
```json
  "scripts": {
    "build": "webpack",
    "watch": "webpack -w"
  }
,
```

## tsconfig.jsonの設定

`tsc --init`で雛形作成  
sourceMapをtrueに、moduleをes2015に変更


## webpack.config.jsの作成

`webpack init`はうまく行かなかったのでべた書き
参考URLの例をコピペ  


## 実行テスト

distフォルダを作成し、index.htmlを作成  
空のindex.htmlに`html:5`と入力して変換すればVS CodeのEmmetが動作して
HTML5の雛形が作成される。HEADタグ内で`script:src`と入力すればScriptタグの雛形ができるので  
main.jsを指定

`yarn build`でコンパイルされるか確認。




