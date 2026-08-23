// イベント層 (main.ts)
// クリックされた時の処理とボタンを結びつける。
// おみくじ箱を用意し、ボタンのクリックで reset / draw を呼び、結果を描画層に渡す。
// この層は完成済み（ステップ1で render.ts を実装すれば動く）。

import { resetOmikuji, drawOmikuji } from "./omikuji";
import { renderResult } from "./render";
import { rareresetOmikuji, raredrawOmikuji } from "./rareomikuji";

function main(): void {
  // おみくじ箱を用意する（1回呼ぶと、くじが入った状態になる）。
  resetOmikuji();
  rareresetOmikuji();

  const drawButton = document.getElementById("draw-button");
  const raredrawButton = document.getElementById("raredraw-button");
  const resetButton = document.getElementById("reset-button");

  drawButton?.addEventListener("click", () => {
    const result = drawOmikuji();

    // render.ts の renderResult を実装すると、ここで画面に結果が出る（ステップ1）。
    renderResult(result);
  });
  
  raredrawButton?.addEventListener("click", () => {
    const result = raredrawOmikuji();

    // render.ts の renderResult を実装すると、ここで画面に結果が出る（ステップ1）。
    renderResult(result);
  });
  
  resetButton?.addEventListener("click", () => {
    resetOmikuji();
    rareresetOmikuji();
    // 表示を初期状態（結果なし）に戻す。
    renderResult(null);
  });
}

main();
