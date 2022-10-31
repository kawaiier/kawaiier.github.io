var slider = document.getElementById("myRange");
var team1score = document.getElementById("team1score");
var team2score = document.getElementById("team2score");
var difficultyText = document.getElementById("difficulty");
var teamSelected = document.getElementById("teamSelect");
var team1name = document.getElementById("team1name");
var team2name = document.getElementById("team2name");
var statsText = document.getElementById("stats");
var resultText = document.getElementById("resultText")

const teamCPU = ["Spartak", "CSKA", "Zenith"]; 

var wins = 0
var draws = 0
var losses = 0
var points = 0
var played = 0

var results =""

function setup() {
    difficulty = slider.value
    difficultyText.innerHTML = slider.value
    reset()
}

function play() {   
    played += 1
    getTeamNames()
    getMatchResult()
  }

function setStats() {
    placeholder = `Played games ${played}<br>Wins: ${wins} / Draws: ${draws} / Losses: ${losses}<br>Total points: ${points}`
    statsText.innerHTML = placeholder
}

function getTeamNames(){
    const randomCPU = Math.floor(Math.random() * teamCPU.length);
    var team1 = teamSelected.value
    var team2 = teamCPU[randomCPU]

    return [team1, team2]
}

function getMatchResult() {
    var team1 = 0
    var team2 = 0

    team1 = Math.floor(Math.random() * 6) - difficulty

    if (team1 < 0){
        team1 = 0
    }

    team2 = Math.floor(Math.random() * 6)

    getMatchPoints(team1, team2)
    setMatchScore(team1, team2)
}

function setMatchScore(t1, t2) {
    var [team1, team2] = getTeamNames()
    resultText.innerHTML = `${team1} ${t1}:${t2} ${team2}`
}

function getMatchPoints(t1, t2) {
    if (t1 < t2){
        losses += 1
    } else if (t1 > t2) {
        wins += 1
        points +=3
    } else {
        draws += 1
        points += 1
    }
    setStats()
}

function showSliderText() {
    difficultyText.innerHTML = slider.value
}

function reset() {
    wins = 0
    draws = 0
    losses = 0
    points = 0
    played = 0
    resultText.innerHTML = 'Get ready for the next match!'
    setStats()

}

// setInterval(generateFans, 10);
