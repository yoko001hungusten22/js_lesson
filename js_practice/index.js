// lesson_1
// comment

// 一行コメント
// この部分はコードとして評価されない

/*
   複数行コメント
   囲まれている範囲がコードとして評価されない
 */

//  <!-- この行はコメントと認識される
//  console.log("この行はJavaScriptのコードとして実行される");
//  -->  この行もコメントと認識される

// <script language="javascript">
// <!--
//   document.bgColor = "brown";
// // -->
// </script>

// lesson_2
// variable

// EX: const 変数名 = 初期値;

const bookTitle_const = "JavaScript Primer";

// カンマ区切りで複数定義
const bookTitle_2 = "JavaScript Primer",
  bookCategory = "プログラミング";

// const bookTitle = "JavaScript Primer";
// const bookCategory = "プログラミング";

let bookTitle_let = "JavaScript Primer";

let bookTitle;
// `bookTitle`は自動的に`undefined`という値になる

let bookTitle_assignment;
bookTitle_assignment = "JavaScript Primer";

let count = 0;
count = 1;
count = 2;
count = 3;

// can be overwritten
var bookTitle_var;
bookTitle_var = "JavaScript Primer";
bookTitle_var = "新しいタイトル";

// `const`でオブジェクトを定義している
const object = {
  key: "値",
};
// オブジェクトそのものは変更できてしまう
object.key = "新しい値";
