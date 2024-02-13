const words = ["duelist", "jett", "rayna", "phoenix", "yoru", "neon", "sentinels", "sage", "cypher", "killjoy", "kj", "chamber", "deadlock", "initiators", "breach", "sova", "sky", "kayo", "fade", "controllers", "omen", "brimstone", "viper", "astra"];
let score = 0;
let time = 60;
let intervalId;

function pickRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    document.getElementById("word").innerText = currentWord;
}

function startGame() {
    score = 0;
    time = 60;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('timer').innerText = `Time: ${time}s`;
    document.getElementById('input').value = '';
    document.getElementById('word').innerText = getNewWord();
    intervalId = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    document.getElementById('timer').innerText = `Time: ${time}s`;
    if (time === 0) {
        clearInterval(intervalId);
        alert(`Game over! Your score is ${score}`);
    }
}

function getNewWord() {
    return words[Math.floor(Math.random() * words.length)];
}

document.getElementById('start').addEventListener('click', startGame);

document.getElementById('input').addEventListener('input', function(e) {
    if (e.target.value === document.getElementById('word').innerText) {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
        document.getElementById('word').innerText = getNewWord();
        e.target.value = '';
    }
});
