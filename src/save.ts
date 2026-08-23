//履歴の保存について

import { counter } from "./omikuji";

//結果と引いた回数のHTMLのidを変数に入れている　
export let id_number1 = ["one1", "two1", "three1", "four1", "five1", "six1", "seven1", "eight1", "nine1"]
export let id_number2 = ["one3", "two3", "three3", "four3", "five3", "six3", "seven3", "eight3", "nine3"]

export function save_result(situation: any){
    const drawButton = document.getElementById("draw-button"); //おみくじを引くボタン
    const resetButton = document.getElementById("reset-button"); //リセットボタン
    let id2_number1: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];
    let id2_number2: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];

    for(let i = 0; i < counter.length; i++){ 
        id2_number1[i] = document.getElementById(id_number1[i]) //先ほどの配列をHTMLElementに移してる
        id2_number2[i] = document.getElementById(id_number2[i])

        if(counter[i] == 0){ //まだひいてない結果を隠す
            id2_number1[i]!.style.visibility = "hidden";
        }

        //ひかれたときに引いた結果と回数を表示させる
        if(counter[i] > 0 && situation == "display"){
            id2_number1[i]!.style.visibility ="visible";
            id2_number2[i]!.textContent = `${counter[i]}`;
        }
        
        if( situation == "reset") {//リセット処理
            counter[i] = 0;
            id2_number1[i]!.style.visibility = "hidden";
        }
    }
}

save_result(null)
