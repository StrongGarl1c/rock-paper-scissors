let cpu = "Вибір машини: ";
let human = "Твій вибір: ";
let Cscore = 0;
let Pscore = 0;
let draw = 0;
let score = document.getElementById("score");
let demo = document.getElementById("demo");
let demo2 = document.getElementById("demo2");
score.innerHTML = "Машина " + Cscore + "<br>" + "Ти " + Pscore + "<br>" + "Нічия " + draw;

// Вибір компа
function computer() {	
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0: return demo.innerHTML = cpu + 'Папір';
            break;
        case 1: return demo.innerHTML = cpu + 'Ножиці';
            break;
        case 2: return demo.innerHTML = cpu + 'Камінь';
            break;
    }
}

// Вибір людини
function playerInput(x) {	
    switch (x) {
        case 0: return demo2.innerHTML = human + 'Папір';
            break;
        case 1: return demo2.innerHTML = human + 'Ножиці';
            break;
        case 2: return demo2.innerHTML = human + 'Камінь';
            break;
    }	
}

// Гра
function game(asd) {
    computer();
    playerInput(asd);
    const c = document.getElementById("demo").innerHTML;
    const p = document.getElementById("demo2").innerHTML;
    let w = document.getElementById("win").innerHTML = "";
    if ( c === cpu + 'Папір' && p === human + 'Камінь') {
        w = document.getElementById("win").innerHTML = "Бездушна машина перемогла!";
        Cscore++;
        score.innerHTML = "Машина " + Cscore + "<br>" + "Ти " + Pscore + "<br>" + "Нічия " + draw;;
    }	
    else if ( c === cpu + 'Ножиці' && p === human + 'Папір' ) {
        w = document.getElementById("win").innerHTML = "Бездушна машина перемогла!";
        Cscore++;
        score.innerHTML = "Машина " + Cscore + "<br>" + "Ти " + Pscore + "<br>" + "Нічия " + draw;;
    }
    else if ( c === cpu + 'Камінь' && p === human + 'Ножиці') {
        w = document.getElementById("win").innerHTML = "Бездушна машина перемогла!";
        Cscore++;
        score.innerHTML = "Машина " + Cscore + "<br>" + "Ти " + Pscore + "<br>" + "Нічия " + draw;;
    }
    else if ( c.slice(14) === p.slice(12) ) {
        w = document.getElementById("win").innerHTML = "Нічия!";
        draw++;
        score.innerHTML = "Машина " + Cscore + "<br>" + "Ти " + Pscore + "<br>" + "Нічия " + draw;
    }
    else {
        w = document.getElementById("win").innerHTML = "Людина перемогла!";
        Pscore++;
        score.innerHTML = "Машина " + Cscore + "<br>" + "Ти " + Pscore + "<br>" + "Нічия " + draw;;
    }
}