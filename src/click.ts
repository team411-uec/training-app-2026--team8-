// ようこ　100回を管理するところ

//　↓exportいらないかも
export function click(){
    let count = 0; //何回押したか数える変数
    const button = document.getElementById("clickcheck-button"); //☚のボタンを変数buttonに入れてる
    const counted = document.getElementById("counted"); //　回って表示する要素を変数countedに入れてる　（countedとcount分かりづらいかも）
    const drawbutton = document.getElementById("draw-button"); //おみくじを引くボタンを変数drawbuttonに入れてる
    const raredrawbutton = document.getElementById("draw-rarebutton")
    if (button && counted && drawbutton&&raredrawbutton){ //この要素が存在しないとなんかバグるからifで囲ってる
        drawbutton.style.visibility = "hidden"; //おみくじ引くボタンを隠す
        raredrawbutton.style.visibility ="hidden";
        button.addEventListener("click",() => { //☚のボタンを押したら以下のことをする
            count++; //変数countに1プラス
            counted.textContent = `${count}回`; //countの回数を表示
            if (count==10){ //10回クリックに変えた
                drawbutton.style.visibility ="visible"; //おみくじ引くボタンを表示する
            }
            if (count==20){
                raredrawbutton.style.visibility ="visible";
            }
            
        });
        drawbutton.addEventListener("click",() =>{ //おみくじを引いたら、、
            drawbutton.style.visibility = "hidden";
            count -= 10;
            counted.textContent = `${count}回`;
        } )
        raredrawbutton.addEventListener("click",() =>{
            raredrawbutton.style.visibility ="hidden";
            count -= 20;
            if (count<10){
                drawbutton.style.visibility ="hidden";
            }
            counted.textContent =`${count}回`;
        })
    }
}

click();