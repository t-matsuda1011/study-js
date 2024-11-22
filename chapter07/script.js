'use strict';

const servants = ['犬', '猿', '雉'];

function swapServants(newcomer) {

    servants.push(newcomer);
    const fired = servants.shift();

    console.log('現在の家来は：');
    console.log(servants);
    console.log(`の総勢${servants.length}名です。`);

    return fired;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('servantForm').addEventListener('submit', function(event) {
        event.preventDefault(); // ページリロードを防ぐ

        // 入力された家来の名前を取得
        const newcomer = document.getElementById('newServant').value;

        // swapServants関数を実行して結果を表示
        const retired = swapServants(newcomer);
        document.getElementById('result').innerText = `${retired}さん、これまでありがとう！`;
    });
});
