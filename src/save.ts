// まだひいてない結果を非表示にして引いた回数の表示

import { click } from "./click";
import { counter } from "./omikuji";

export let id_number1 = ["one1", "two1", "three1", "four1", "five1", "six1", "seven1", "eight1", "nine1"]
export let id_number2 = ["one3", "two3", "three3", "four3", "five3", "six3", "seven3", "eight3", "nine3"]

export function save_result(){
    const drawButton = document.getElementById("draw-button");
     const resetButton = document.getElementById("reset-button");
    let id2_number1: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];
    let id2_number2: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];

    for(let i = 0; i < counter.length; i++){
        id2_number1[i] = document.getElementById(id_number1[i])
        id2_number2[i] = document.getElementById(id_number2[i])

        if(counter[i] == 0){
            id2_number1[i]!.style.visibility = "hidden";
        }

        drawButton?.addEventListener("click", () => {
        if(counter[i] > 0){
            id2_number1[i]!.style.visibility ="visible";
            id2_number2[i]!.textContent = `${counter[i]}`;
        }
        })

        resetButton?.addEventListener("click", () => {
            for(let i = 0; i < counter.length; i++){
                counter[i] = 0;
                id2_number1[i]!.style.visibility = "hidden";

            }
        })
    }
}

save_result();