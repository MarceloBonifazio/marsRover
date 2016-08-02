# MarsRover
Um esquadrão de sondas robóticas enviados pela NASA estão desembarcando em um planalto de Marte.

Este planalto, que é curiosamente retangular, deve ser navegado pelas sondas para que suas câmeras obtenham uma visão completa do terreno para enviar de volta para a Terra.

A posição de cada sonda é representada por uma combinação de coordenadas `X Y` e uma letra que representa um dos quatro pontos cardeais `N E S W` (Norte, Leste, Sul e Oeste, respectivamente). O planalto é dividido em uma grade para simplificar a navegação das sondas. Um exemplo de posição da sonda pode ser `1 1 N`, o que significa que a sonda está no canto superior esquerdo e de frente para o Norte.

A fim de controlar a sonda, a NASA envia uma seqüência simples de letras. As letras possíveis são `L`, `R` e `M`. Os comandos `L` e `R` fazem a sonda girar 90 graus para a esquerda ou direita, respectivamente, sem sair de seu local atual. Ja o comando `M` faz a sonda avançar um ponto em frente, e manter a mesma orientação.


# ENTRADA:
A primeira linha de entrada são as coordenadas inferior direita do planalto, as coordenadas superior esquerda são assumidas como `1 1`.

O resto da entrada são as informações relacionadas às sondas que foram implantadas. Cada sonda tem duas linhas de entrada. A primeira linha dá a posição inicial da sonda, e a segunda linha é uma série de instruções que dizem a ela como explorar o planalto.

A posição inicial é constituída por dois números inteiros e uma letra separada por espaços, que correspondem às coordenadas `x` e `y` e a orientação inicial da sonda, um exemplo de entrada é `4 2 S`.

Cada sonda será concluída sequencialmente, o que significa que a segunda sonda não vai começar a se mover até que a primeira termine seu movimento.

# SAÍDA
A saída para cada sonda deve ser sua última coordenada e orientação.

# INSTALAÇÃO:
Projeto não necesita de instalação, basta executar o aquivo `index.html`.

# EXEMPLOS DE ENTRADA:
`1.`
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

`2.`
9 9
5 2 N
LLMLLMRMLMMM
3 8 W
MMLMLMMMRM

# EXEMPLOS DE SAÍDA:
`1.`
3 5 E
5 1 W

`2.`
6 1 N
4 9 S


