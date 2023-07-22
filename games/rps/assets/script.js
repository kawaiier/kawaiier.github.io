const finalResultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const aiRockImg = document.getElementById("ai-rock");
const aiPaperImg = document.getElementById("ai-paper");
const aiScissorImg = document.getElementById("ai-scissor");
const images = document.getElementsByTagName('img');
let playerScore = 0;
let aiScore = 0;

function buttonClicked(img, choice) {
    let aiResult = makeAIturn();
    checkResult(choice, aiResult);
    scoreText.innerHTML = `${playerScore}:${aiScore}`;
    img.src = 'assets/img/'+ choice + 'On.svg';
}

function makeAIturn() {
    let option = Math.floor(Math.random() * 3);
    let aiResult = '';
    clearAllImages();
    if (option == 0) {
        aiResult = 'rock';
        aiRockImg.src = 'assets/img/rockOn.svg';
    } else if (option == 1) {
        aiResult = 'paper';
        aiPaperImg.src = 'assets/img/paperOn.svg';
    } else {
        aiResult = 'scissor';
        aiScissorImg.src = 'assets/img/scissorOn.svg';
    } return aiResult;
}


function clearAllImages() {
    Array.from(images).map(i => i.src = 'assets/img/' + i.classList + 'Off.svg' )
}

function checkResult(player, ai){
    finalResultText.innerHTML = ``
    if (player == 'rock' && ai == 'paper') {
        finalResultText.innerHTML += `<strong>AI WINS</strong>`;
        aiScore += 1;
    } else if (player == 'rock' && ai == 'scissor') {
        finalResultText.innerHTML += `<strong>HUMAN WINS</strong>`;
        playerScore += 1;
    } else if (player == 'paper' && ai == 'rock') {
        finalResultText.innerHTML += `<strong>HUMAN WINS</strong>`;
        playerScore += 1;
    } else if (player == 'paper' && ai == 'scissor') {
        finalResultText.innerHTML += `<strong>AI WINS</strong>`;
        aiScore += 1;
    } else if (player == 'scissor' && ai == 'paper') {
        finalResultText.innerHTML += `<strong>HUMAN WINS</strong>`;
        playerScore += 1;
    } else if (player == 'scissor' && ai == 'rock') {
        finalResultText.innerHTML += `<strong>AI WINS</strong>`;
        aiScore += 1;
    } else {
        finalResultText.innerHTML += `<strong>DRAW!</strong>`;
    }
}
