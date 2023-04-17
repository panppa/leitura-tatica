//vetor que representa o tabuleiro (é mais simples que usar matriz ☺)
tabuleiro = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
    if (document.getElementById(escolha).innerHTML == "") {
        if (contRodada % 2 == 0) {
            document.getElementById("textoJogo").innerHTML = "Vez de o";
            document.getElementById(escolha).innerHTML = "x";
        } else {
            document.getElementById("textoJogo").innerHTML = "Vez de x";
            document.getElementById(escolha).innerHTML = "o";
        }
        //armazenar as jogadas no vetor
        tabuleiro[escolha] = document.getElementById(escolha).innerHTML;
        console.log(tabuleiro);
        contRodada++;
        document.getElementById("rodada").innerHTML = ("Rodada: " + contRodada);
        checarVitoria();
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

//limpar tabuleiro
document.getElementById("reiniciar").onclick = function () { limpar() };

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




