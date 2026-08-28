// データ層 (omikuji.ts)
// おみくじの型と、くじの箱（データと操作関数）を定義する層。
// データとロジックだけに専念し、画面表示(DOM操作)はしない。
// CLI 版のコードをほぼそのまま再利用している。この層は完成済み。まずは読んで理解する。

// おみくじの結果を表す型（Union Type）。
// この6つの文字列以外は使えないので、打ち間違い（例: "第吉"）を防げる。
export type OmikujiResult = "スライム" | "エルフ" | "セイレーン" | "オーク" | "スケルトン" | "ケンタウロス" | "トロール" | "ペガサス" | "ドラゴン" ;

// 各結果を何枚ずつ箱に入れるかの比率。数値は自由に変えてよい。
export const omikujiRatios: Record<OmikujiResult, number> = {
  スライム: 25,
  エルフ: 20,
  セイレーン: 14,
  オーク: 14,
  スケルトン: 7,
  ケンタウロス: 7,
  トロール: 7,
  ペガサス: 4,
  ドラゴン: 2,
};

// 箱の中身（引けるくじ）。このファイルの中だけで使う。
// export していないので外部からは直接触れず、下の関数を通して操作する。
let tickets: OmikujiResult[] = [];
let counter = new Array(9).fill(0)
export let cheker = [ "スライム" , "エルフ" , "セイレーン" , "オーク" , "スケルトン" , "ケンタウロス" , "トロール" , "ペガサス" , "ドラゴン"]

//なんのおみくじを何回引いたか保存するための配列
// 箱の中身を omikujiRatios の比率どおりに入れ直す。
export function resetOmikuji(): void {
  tickets = [];

  for (const [result, count] of Object.entries(omikujiRatios)) {
    for (let i = 0; i < count; i++) {
      // Object.entries だとキーが string 扱いになるので as で元の型に戻す。
      tickets.push(result as OmikujiResult);
    }
  }

  console.log(`おみくじ箱をリセットしました。（合計 ${tickets.length} 枚）`);
}

// 箱からランダムに1枚引いて返す。空のときは null を返す。
export function drawOmikuji(): OmikujiResult | null {
  console.log(tickets)
  if (tickets.length === 0) {
    console.log("もうおみくじ箱は空っぽです！リセットしてください。");
    return null;
  }

  const randomIdx = Math.floor(Math.random() * tickets.length);
  // splice は抜き出した要素の配列を返すので、その 0番目を取り出す。
  const drawnTicket = tickets.splice(randomIdx, 1)[0];
  //何回引いたかを記録する処理
  for(let i = 0; i < cheker.length; i++){
    if(drawnTicket == cheker[i]){
      ++counter[i];
    }
  }
  return drawnTicket;
  
}
export {counter}
//counterは引いた数を保存する手目のもの
// 拡張ポイント（ステップ2以降）。必要になったら足す。
//  - 残りくじ枚数を出す: tickets.length を返す関数をこのファイルに足す（tickets は外から読めない）。
// データ層 (omikuji.ts)
// おみくじの型と、くじの箱（データと操作関数）を定義する層。
// データとロジックだけに専念し、画面表示(DOM操作)はしない。
// CLI 版のコードをほぼそのまま再利用している。この層は完成済み。まずは読んで理解する。





//以降レアおみくじの処理


export type RareOmikujiResult = "スライム" | "エルフ" | "セイレーン" | "オーク" | "スケルトン" | "ケンタウロス" | "トロール" | "ペガサス" | "ドラゴン" ;

// 各結果を何枚ずつ箱に入れるかの比率。数値は自由に変えてよい。
export const rareomikujiRatios: Record<RareOmikujiResult, number> = {

  スライム: 18,
  エルフ: 14,
  セイレーン: 12,
  オーク: 12,
  スケルトン: 11,
  ケンタウロス: 10,
  トロール: 10,
  ペガサス: 7,
  ドラゴン: 6,
};

// 箱の中身（引けるくじ）。このファイルの中だけで使う。
// export していないので外部からは直接触れず、下の関数を通して操作する。

let tickets2: RareOmikujiResult[] = [];


// 箱の中身を omikujiRatios の比率どおりに入れ直す。
export function rareresetOmikuji(): void {
  tickets2 = [];

  for (const [result, count] of Object.entries(rareomikujiRatios)) {
    for (let i = 0; i < count; i++) {
      // Object.entries だとキーが string 扱いになるので as で元の型に戻す。

      tickets2.push(result as RareOmikujiResult);

    }
  }

  console.log(`おみくじ箱をリセットしました!（合計 ${tickets2.length} 枚）`);
}

// 箱からランダムに1枚引いて返す。空のときは null を返す。

export function raredrawOmikuji(): RareOmikujiResult | null {
    console.log(tickets2)
    if (tickets2.length === 0) {
        const omikujiresult = document.getElementById("result");
    
        console.log("もうおみくじ箱は空っぽです！リセットしてください。");
        return null;
    }
    
    const randomIdx = Math.floor(Math.random() * tickets2.length);
    // splice は抜き出した要素の配列を返すので、その 0 番目を取り出す。
    const drawnTicket2 = tickets2.splice(randomIdx, 1)[0];
     for(let i = 0; i < cheker.length; i++){
        if(drawnTicket2 == cheker[i]){
          ++counter[i];
        }
      }
    return drawnTicket2;
}

// 拡張ポイント（ステップ2以降）。必要になったら足す。
//  - 残りくじ枚数を出す: tickets2.length を返す関数をこのファイルに足す（tickets2 は外から読めない）。

