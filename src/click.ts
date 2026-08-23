// ようこ　100回を管理するところ

//　↓exportいらないかも
export function click(){
    let count = 0; //何回押したか数える変数
    const button = document.getElementById("clickcheck-button"); //☚のボタンを変数buttonに入れてる
    const counted = document.getElementById("counted"); //　回って表示する要素を変数countedに入れてる　（countedとcount分かりづらいかも）
    const drawbutton = document.getElementById("draw-button"); //おみくじを引くボタンを変数drawbuttonに入れてる
    const resetButton = document.getElementById("reset-button"); //リセットボタンを入れてる

    if(counted){counted.textContent = `${count}回`}

    if (button && counted && drawbutton){ //この要素が存在しないとなんかバグるからifで囲ってる
        drawbutton.style.visibility = "hidden"; //おみくじ引くボタンを隠す
        button.addEventListener("click",() => { //☚のボタンを押したら以下のことをする
            count++; //変数countに1プラス
            counted.textContent = `${count}回`; //countの回数を表示
            if (count >= 10){ //10回クリックに変えた　//==10から>=10に変更した
                drawbutton.style.visibility ="visible"; //おみくじ引くボタンを表示する
            }
        });   
        drawbutton.addEventListener("click",() =>{ //おみくじを引いたら、、
            count -= 10;
            if(count < 10){ //回数が10より大きかったらボタンを隠さないようにした
                drawbutton.style.visibility = "hidden";
            }
            counted.textContent = `${count}回`;
        } )

        //リセットボタンを押したときの処理
        resetButton?.addEventListener("click", () => {
            count = 0
            if(counted){counted.textContent = `${count}回`}
            if(count < 10){
                drawbutton.style.visibility = "hidden";
            }    

          });
    }
}

click();