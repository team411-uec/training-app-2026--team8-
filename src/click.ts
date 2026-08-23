// ようこ　100回を管理するところ

export let count = 0; //何回押したか数える変数
export let addcount2 = 0;
import { counter } from "./omikuji";
import { id_number2 } from "./save";
import { id_number1 } from "./save";

//　↓exportいらないかも
export function click(situation: any){
    const counted = document.getElementById("counted"); //　回って表示する要素を変数countedに入れてる　（countedとcount分かりづらいかも）
    const drawbutton = document.getElementById("draw-button"); //おみくじを引くボタンを変数drawbuttonに入れてる

    if(counted){counted.textContent = `${count}回`}

    if ( counted && drawbutton){ //この要素が存在しないとなんかバグるからifで囲ってる
        if(count < 10){
            drawbutton.style.visibility = "hidden"; //おみくじ引くボタンを隠す
        }
        if(situation == "addcount"){ //☚のボタンを押したら以下のことをする
            count++; //変数countに1プラス
            counted.textContent = `${count}回`; //countの回数を表示
            if (count >= 10){ //10回クリックに変えた
                drawbutton.style.visibility ="visible"; //おみくじ引くボタンを表示する
            };
        }

        if(situation == "draw") //おみくじを引いたら、、
            count -= 10;
            if(count < 10){
            drawbutton.style.visibility = "hidden";
            }
            counted.textContent = `${count}回`;

        if(situation == "reset")
            count = 0
            if(counted){counted.textContent = `${count}回`}
            if(count < 10){
                drawbutton.style.visibility = "hidden";
            };
    }
}

export function sell(situation: any){
    let id2_button: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];
    let id2_number1: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];
    let id2_number2: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];
    const counted = document.getElementById("counted");
    const drawbutton = document.getElementById("draw-button")

    for(let i = 0; i < counter.length; i++){ 
        id2_number1[i] = document.getElementById(id_number1[i])
        id2_number2[i] = document.getElementById(id_number2[i])
        
        if(counter[i] > 0 && counted && situation == `sold${i}`){
            counter[i]--;
            count += 5
            counted.textContent = `${count}回`;
            id2_number2[i]!.textContent = `${counter[i]}`;

            if(counter[i] < 1){
                id2_number1[i]!.style.visibility = "hidden"
            }

            if(count >= 10){
                drawbutton!.style.visibility ="visible"
            }
            
        }
    }
}

click(null);
sell(null)
