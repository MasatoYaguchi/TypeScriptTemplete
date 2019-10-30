import {viewMessage, Hello} from './sub';

const message: string = 'Webpack serverを導入しました';

console.log("main.js");
window.onload=()=>{
    console.log("load document!");
    new Main();
}


class Main{
    constructor(){
        // sub.tsに定義されたJavaScriptを実行する。
        viewMessage(message);
        new Hello(message);
    }
}
