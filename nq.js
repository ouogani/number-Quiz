//랜덤번호 지정
//입력 > go 버튼
//번호 맞추면 정답 틀리면 업&다운

//리셋 버튼
//기회 5번 > 게임오버
//1과 100숫자 범위를 알려주기(기회 안깎음)
//같은 숫자 입력 알려주기(기회 안깎음)

computerNumber = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chance = 5;
let history = [];
let gameOver = false;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value=""});

function randomNum(){
    computerNumber = Math.floor((Math.random()) * 100 ) + 1;
    //console.log("정답: ", computerNumber)
}

function play(){
    let userValue = userInput.value;
    //console.log(computerNumber);

    if(userValue >= 100 || userValue <= 0){
        resultArea.textContent = "1~100사이의 숫자를 입력해주세요.";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자 입니다.";
        return;
    }

    chance--;
    chanceArea.textContent = `기회가 ${chance}번 남았습니다.`;

    if(userValue < computerNumber){
        resultArea.textContent = "Up!!";
    }

    else if(userValue > computerNumber){
        resultArea.textContent = "Down!!";
    }

    else{
        resultArea.textContent = "정답 입니다!";
        chanceArea.textContent = `${chance}번의 기회를 남기고 맞추셨습니다.`;
        playButton.disabled = true;
    }

    history.push(userValue);
    
    if(chance < 0){
        gameOver= true;
        resultArea.textContent = "GameOver";
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    randomNum();
    history=[];
    playButton.disabled = false;
    resultArea.textContent = "RESULT";
    chance = 5;
    chanceArea.textContent = `남은 기회는 ${chance}번 입니다.`;
}

randomNum();

