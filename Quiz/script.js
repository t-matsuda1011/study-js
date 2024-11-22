import { fetchData } from "./fetchData.js";

//jsonからデータを取ってくる
const quizList = await fetchData();

//
const quizCategory = [];

//
let quiz = [];

//クイズの問題数
let quizIndex = 0;

//得点の初期値
let score = 0;



//カテゴリーの選択
const categorySet = () => {
    const selectCategory = document.getElementById('quizSelect').value;
    if(selectCategory === "") {
        alert("カテゴリーを選択してください。")
        return false;
    }
    
    const quizCategory = quizList[parseInt(selectCategory)];
    quiz = quizCategory.questions;

    // クイズの問題をランダムに並べ替える
    quiz.sort(() => Math.random() - 0.5);

    return true;
}


//クイズの問題文・選択肢を表示
const $button = document.getElementsByTagName('button');

const btnLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let btnIndex = 0;
    while (btnIndex < btnLength) {
        $button[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
        btnIndex++;
    }
}


//クイズの継続を判断
const checkQuiz = () => {
    const quizLength = quiz.length;
    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
        init();
    }
}


//クリックに対しての正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct == e.target.textContent) {
        window.alert('正解！');
        score ++;
    } else {
        window.alert('不正解…。');
    }
    quizIndex++;
    time = 11;
    checkQuiz();
}



//各ボタンに対してクリックイベントを設定
const setupClick = () => {
    for (let i = 0; i < btnLength; i++) {
        $button[i].addEventListener('click', clickHandler)
    }
    document.addEventListener('keydown', keyDownHandler);
};

const keyDownHandler = (event) => {
    for (let i = 0; i < btnLength; i++) {
        if (event.code === `Digit${i + 1}`) {
            $button[i].click();
        }
    }
};

//クリックイベントの削除
const removeClick = () => {
    for (let i = 0; i < btnLength; i++) {
        $button[i].removeEventListener('click', clickHandler);
    }
};

//終了後の初期化用
const init = () => {
    quizIndex = 0;
    score = 0;
    clearInterval(timer);
    initTime();
    timeBar.value = 10;
    document.getElementById('js-question').textContent = '問題文が表示されます';
    let btnIndex = 0;
    while (btnIndex < btnLength) {
        $button[btnIndex].textContent = '';
        btnIndex++;
    }
    QuizStart.classList.remove('pointer-events-none');
    QuizStart.textContent = 'クイズスタート';
    removeClick();
    document.removeEventListener('keydown', keyDownHandler);
    document.getElementById('quizSelect').classList.remove('pointer-events-none');
}

//タイマー
let time = 10;
const timeCount = document.getElementById('timeCount');
const timeBar = document.getElementById('timeBar');
const QuizStart = document.getElementById('startBtn');
const initTime = () => {
    timeCount.textContent = time;
    timeBar.value = time;
}
let timer;

const startCountdown = ()=> {
    initTime();

    timer = setInterval(() => {
        time--;
        initTime();
    
        if(time < 0) {
            timeBar.value = time;
            time = 11;
            window.alert('タイムアップ！次の問題に進みます。');
            quizIndex++;
            checkQuiz();
        }
    }, 1000);
}

//クイズ開始ボタン
QuizStart.addEventListener('click', () => {
    init();
    if (categorySet()) {
        clearInterval(timer);
        startCountdown();
        setupClick();
        setupQuiz();
        QuizStart.classList.add('pointer-events-none');
        QuizStart.textContent = 'クイズ進行中．．．';
        document.getElementById('quizSelect').classList.add('pointer-events-none');
    }
});