Descrição 
O exercício envolve desenvolver um jogo da velha aderindo as regras do TDD. 
Regras do Jogo 
https://pt.wikihow.com/Jogar-Jogo-da-Velha ou https://en.wikipedia.org/wiki/Tic-tac-toe 
Cenários TDD 
1 – Criação do tabuleiro:  
Game Board Creation...  
 | | 
-+-+- 
 | | 
-+-+- 
 | | 
Board Created. 
The game will start with player X 
2 – Player X ganhou na linha vertical 
Player X: 
X| | 
-+-+- 
X|O| 
-+-+- 
X| |O 
PLAYER X WON! 
3 – Player O ganhou na linha horizontal  
Player O: 
X| |X 
-+-+- 
O|O|O 
-+-+- 
X| | 
PLAYER O WON! 
4 – Player X ganhou com uma linha diagonal 
Player X: 
X| | 
-+-+- 
O|X| 
-+-+- 
O| |X 
PLAYER X WON! 
5 – Jogo termina com um empate  
Player X: 
X|O|X 
-+-+- 
O|O|X 
-+-+- 
X|X|O
 GAME ENDS WITH A DRAW! 
 
Objetivo 
O jogo pode rodar em BOT mode para imprimir na tela todos os movimentos dos jogadores (com timeout 
de 2 segundos entre cada rodada) até alguém ganhar ou empatar.

**Label**  
✅ done 🚧 WIP ❌ ERROR

TODO:

# Podmodoro 1 🍅:




# Domain: