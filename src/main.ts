// イベント層 (main.ts)
// クリックされた時の処理とボタンを結びつける。
// おみくじ箱を用意し、ボタンのクリックで reset / draw を呼び、結果を描画層に渡す。
// この層は完成済み（ステップ1で render.ts を実装すれば動く）。

import { resetOmikuji, drawOmikuji } from "./omikuji";
import { renderResult } from "./render";
import { click } from "./click";
import { sell } from "./click";
import { save_result } from "./save";

function main(): void {
  // おみくじ箱を用意する（1回呼ぶと、くじが入った状態になる）。
  resetOmikuji();

  const drawButton = document.getElementById("draw-button");
  const resetButton = document.getElementById("reset-button");
  const button = document.getElementById("clickcheck-button"); //☚のボタンを変数buttonに入れてる
  const id_button = ["one4", "two4", "three4", "four4", "five4", "six4", "seven4", "eight4", "nine4"];
  const id2_button: (HTMLElement | null)[] = [null, null, null, null, null, null, null, null, null];

  drawButton?.addEventListener("click", () => {
    const result = drawOmikuji();

    // render.ts の renderResult を実装すると、ここで画面に結果が出る（ステップ1）。
    renderResult(result);
    save_result("display");
    click("draw");
  });

  resetButton?.addEventListener("click", () => {
    resetOmikuji();
    // 表示を初期状態（結果なし）に戻す。
    renderResult(null);
    save_result("reset")
    click("reset");
  });

  button?.addEventListener("click", () => {
    click("addcount")
  })

  for(let i = 0; i < id2_button.length; i++){
    id2_button[i] = document.getElementById(id_button[i])
    
    id2_button[i]?.addEventListener("click", () => {
      sell(`sold${i}`)
    })
  }
}

main();
