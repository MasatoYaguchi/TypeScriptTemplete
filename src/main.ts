import {hello} from './sub';

const message: string = 'Webpack serverを導入';

console.log("main.js");
window.onload=()=>{
    console.log("load document!");
    new Main();
}


export class Main{
    constructor(){
        // sub.tsに定義されたJavaScriptを実行する。
        hello(message);
    }
}
