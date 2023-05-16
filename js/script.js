//variavel que armazena o modo de jogo
let modo = 0;
//vetor que representa o tabuleiro (é mais simples que usar matriz ☺)
let tabuleiroTemp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let result = false;
let tabuleiro = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let escolhaMaquina = 10;
//todos os inputs possiveis
document.getElementById("0").onclick = function () { jogo(0) };
document.getElementById("1").onclick = function () { jogo(1) };
document.getElementById("2").onclick = function () { jogo(2) };
document.getElementById("3").onclick = function () { jogo(3) };
document.getElementById("4").onclick = function () { jogo(4) };
document.getElementById("5").onclick = function () { jogo(5) };
document.getElementById("6").onclick = function () { jogo(6) };
document.getElementById("7").onclick = function () { jogo(7) };
document.getElementById("8").onclick = function () { jogo(8) };

let vitoria = false;
let contRodada = 0;
//função principal 
function jogo(escolha) {
    switch (modo) {
        case 0:
            multiplayer(escolha);
            break;
        case 1:
            modoEazy(escolha);
            break;
        case 2:
            modoMedio(escolha);
            break;
        case 3:
            modoDificil(escolha);
            break;
    }
}

function modoMedio(escolha) {
    if (document.getElementById(escolha).innerHTML == "") {
        document.getElementById(escolha).innerHTML = "x";
        tabuleiro[escolha] = document.getElementById(escolha).innerHTML;



        if (contRodada % 2 == 0) {
            contRodada++;
            checarVitoria();
        }

        if ((!vitoria) && (contRodada < 9)) {

            if (ganhando()) {
                document.getElementById(escolhaMaquina).innerHTML = "o";
                tabuleiro[escolhaMaquina] = document.getElementById(escolhaMaquina).innerHTML;

                contRodada++;
            } else {
                if (perdendo()) {
                    document.getElementById(escolhaMaquina).innerHTML = "o";
                    tabuleiro[escolhaMaquina] = document.getElementById(escolhaMaquina).innerHTML;

                    contRodada++;
                } else {
                    do {
                        randomChoice = Math.floor(Math.random() * 9);
                        console.log(randomChoice);
                    } while ((tabuleiro[randomChoice] == "o") || (tabuleiro[randomChoice] == "x"));
                    document.getElementById(randomChoice).innerHTML = "o";
                    tabuleiro[randomChoice] = document.getElementById(randomChoice).innerHTML;

                    contRodada++;
                }

            }
            //armazenar as jogadas no vetor

            document.getElementById("rodada").innerHTML = ("Rodada: " + contRodada);
            checarVitoria();
        }
    }
}

function modoDificil(escolha) {
    console.log(tabuleiro);
    if (document.getElementById(escolha).innerHTML == "") {
        document.getElementById(escolha).innerHTML = "x";
        tabuleiro[escolha] = document.getElementById(escolha).innerHTML;
        console.log("a" + contRodada);

        switch (contRodada) {
            case 0:
                switch (escolha) {
                    case 4:
                        escolhaMaquina = 0;
                        break;
                    default:
                        escolhaMaquina = 4;
                        break;
                }
                tabuleiro[escolha] = document.getElementById(escolha).innerHTML;
                console.log(tabuleiro);
                contRodada++;
                document.getElementById(escolhaMaquina).innerHTML = "o";
                tabuleiro[escolhaMaquina] = document.getElementById(escolhaMaquina).innerHTML;
                break;

                tabuleiro[escolha] = document.getElementById(escolha).innerHTML;
                console.log(tabuleiro);
                contRodada++;
                document.getElementById(escolhaMaquina).innerHTML = "o";
                tabuleiro[escolhaMaquina] = document.getElementById(escolhaMaquina).innerHTML;
                break;

            default:
                if (contRodada % 2 == 0) {
                    contRodada++;
                    checarVitoria();
                }

                if ((!vitoria) && (contRodada < 7)) {
                    if (ganhando()) {
                        document.getElementById(escolhaMaquina).innerHTML = "o";
                        tabuleiro[escolhaMaquina] = document.getElementById(escolhaMaquina).innerHTML;

                        contRodada++;
                    } else {
                        if (perdendo()) {
                            document.getElementById(escolhaMaquina).innerHTML = "o";
                            tabuleiro[escolhaMaquina] = document.getElementById(escolhaMaquina).innerHTML;

                            contRodada++;
                        } else {
                            do {
                                randomChoice = Math.floor(Math.random() * 9);
                                console.log(randomChoice);
                            } while ((tabuleiro[randomChoice] == "o") || (tabuleiro[randomChoice] == "x"));
                            document.getElementById(randomChoice).innerHTML = "o";
                            tabuleiro[randomChoice] = document.getElementById(randomChoice).innerHTML;

                            contRodada++;
                        }

                    }

                    document.getElementById("rodada").innerHTML = ("Rodada: " + contRodada);
                    checarVitoria();
                    break;
                }
        }
    }
}

function modoEazy(escolha) {
    if (document.getElementById(escolha).innerHTML == "") {
        if (contRodada % 2 == 0) {

            document.getElementById(escolha).innerHTML = "x";
            tabuleiro[escolha] = document.getElementById(escolha).innerHTML;

            contRodada++;

            checarVitoria();
        }
        if ((!vitoria) && (contRodada < 9)) {
            do {
                randomChoice = Math.floor(Math.random() * 9);
                console.log(randomChoice);
            } while ((tabuleiro[randomChoice] == "o") || (tabuleiro[randomChoice] == "x"));
            document.getElementById(randomChoice).innerHTML = "o";
            tabuleiro[randomChoice] = document.getElementById(randomChoice).innerHTML;

            contRodada++;
        }

        document.getElementById("rodada").innerHTML = ("Rodada: " + contRodada);
        checarVitoria();
    }
}
function multiplayer(escolha) {
    if (document.getElementById(escolha).innerHTML == "") {
        if (contRodada % 2 == 0) {
            document.getElementById("textoJogo").innerHTML = "Vez de o";
            document.getElementById(escolha).innerHTML = "x";

        } else if (modo == 0) {
            document.getElementById("textoJogo").innerHTML = "Vez de x";
            document.getElementById(escolha).innerHTML = "o";
        }
        tabuleiro[escolha] = document.getElementById(escolha).innerHTML;

        contRodada++;
        document.getElementById("rodada").innerHTML = ("Rodada: " + contRodada);
        checarVitoria();
    }
}


function ganhando() {
    tabuleiroTemp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    result = false;
    for (let cont = 0; cont < 9; cont++) {
        tabuleiroTemp[cont] = tabuleiro[cont];
    }
    for (let cont = 0; cont < 9; cont++) {
        if (!(tabuleiro[cont] == "x" || tabuleiro[cont] == "o")) {
            tabuleiro[cont] = "o";
            if (preverVitoria() && result == false) {
                escolhaMaquina = cont;
                console.log("->" + cont);
                result = true;
            }
            tabuleiro[cont] = cont;
        }
    }
    for (let cont = 0; cont < 9; cont++) {
        tabuleiro[cont] = tabuleiroTemp[cont];
    }
    return result;
}
function perdendo() {
    tabuleiroTemp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    result = false;
    for (let cont = 0; cont < 9; cont++) {
        tabuleiroTemp[cont] = tabuleiro[cont];
    }
    for (let cont = 0; cont < 9; cont++) {
        if (!(tabuleiro[cont] == "x" || tabuleiro[cont] == "o")) {
            tabuleiro[cont] = "x";
            if (preverVitoria() && result == false) {
                escolhaMaquina = cont;
                console.log("->" + cont);
                result = true;
            }
            tabuleiro[cont] = cont;
        }
    }
    for (let cont = 0; cont < 9; cont++) {
        tabuleiro[cont] = tabuleiroTemp[cont];
    }
    return result;
}

function preverVitoria() {
    if ((tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2]) ||
        (tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5]) ||
        (tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8]) ||
        (tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6]) ||
        (tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7]) ||
        (tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8]) ||
        (tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8]) ||
        (tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6])) {
        return true;
    } else {
        return false;
    }
}

function checarVitoria() {
    if (tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2]) {
        document.getElementById("0").style.color = "#CC0F2F";
        document.getElementById("1").style.color = "#CC0F2F";
        document.getElementById("2").style.color = "#CC0F2F";
        vitoria = true;
    }
    if (tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5]) {
        document.getElementById("3").style.color = "#CC0F2F";
        document.getElementById("4").style.color = "#CC0F2F";
        document.getElementById("5").style.color = "#CC0F2F";
        vitoria = true;
    }
    if (tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8]) {
        document.getElementById("6").style.color = "#CC0F2F";
        document.getElementById("7").style.color = "#CC0F2F";
        document.getElementById("8").style.color = "#CC0F2F";
        vitoria = true;
    }

    if (tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6]) {
        document.getElementById("0").style.color = "#CC0F2F";
        document.getElementById("3").style.color = "#CC0F2F";
        document.getElementById("6").style.color = "#CC0F2F";
        vitoria = true;
    }
    if (tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7]) {
        document.getElementById("1").style.color = "#CC0F2F";
        document.getElementById("4").style.color = "#CC0F2F";
        document.getElementById("7").style.color = "#CC0F2F";
        vitoria = true;
    }
    if (tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8]) {
        document.getElementById("2").style.color = "#CC0F2F";
        document.getElementById("5").style.color = "#CC0F2F";
        document.getElementById("8").style.color = "#CC0F2F";
        vitoria = true;
    }

    if (tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8]) {
        document.getElementById("0").style.color = "#CC0F2F";
        document.getElementById("4").style.color = "#CC0F2F";
        document.getElementById("8").style.color = "#CC0F2F";
        vitoria = true;
    }
    if (tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6]) {
        document.getElementById("2").style.color = "#CC0F2F";
        document.getElementById("4").style.color = "#CC0F2F";
        document.getElementById("6").style.color = "#CC0F2F";
        vitoria = true;
    }
    if (vitoria) {
        if (contRodada % 2 == 1) {
            document.getElementById("textoJogo").innerHTML = "x É o ganhador!";
        }
        else {
            document.getElementById("textoJogo").innerHTML = "o É o ganhador!";
        }
        document.getElementById("tabuleiro").style.pointerEvents = "none";
    } else if (contRodada > 8) {
        document.getElementById("textoJogo").innerHTML = "Deu velha!";
        document.getElementById("tabuleiro").style.pointerEvents = "none";
    }

}

document.getElementById("reiniciar").onclick = function () { limpar() };

document.getElementById("modo").onclick = function () { trocarModo() };

function trocarModo() {
    switch (modo) {
        case 0:
            limpar()
            modo = 1;
            document.getElementById("modo").innerHTML = "Modo: fácil";
            break;
        case 1:
            limpar()
            modo = 2;
            document.getElementById("modo").innerHTML = "Modo: médio";
            break;
        case 2:
            limpar()
            modo = 3;
            document.getElementById("modo").innerHTML = "Modo: Difícil";
            break;
        case 3:
            limpar()
            modo = 0;
            document.getElementById("modo").innerHTML = "Modo: multiplayer";
            break;
    }
}

function limpar() {
    vitoria = false;
    document.getElementById("tabuleiro").style.pointerEvents = "all";
    document.getElementById("textoJogo").innerHTML = "Vez de x";
    contRodada = 0;
    document.getElementById("rodada").innerHTML = ("Rodada: " + contRodada);
    for (let cont = 0; cont < 9; cont++) {
        tabuleiro[cont] = cont;
        document.getElementById(cont).style.color = "#000F55";
        document.getElementById(cont).innerHTML = "";
    }
}




