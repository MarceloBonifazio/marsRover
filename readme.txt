# MarsRover
Um esquadrão de sondas robóticas enviados pela NASA estão desembarcando em um platô de Marte.

Este planalto, que é curiosamente retangular, deve ser navegado pelas sondas para que suas câmeras possam obter uma visão completa do terreno para enviar de volta para a Terra.

A posição de cada sonda é representada por uma combinação de coordenadas x e y e uma letra que representa um dos quatro pontos cardeais (N, L, S, O). O planalto é dividido em uma grade para simplificar a navegação. Um exemplo de posição da sonda pode ser 1 1 N, o que significa que a sonda está no canto superior esquerdo e de frente para o Norte.

A fim de controlar a sonda, a NASA envia uma seqüência simples de letras. As letras possíveis são 'L', 'R' e 'M'. Os comandos 'L' e 'R' fazem a sonda girar 90 graus para a esquerda ou direita, respectivamente, sem sair de seu local atual. Ja o comando 'M' faz o rover avançar um ponto em frente, e manter a mesma orientação.


# ENTRADA:
A primeira linha de entrada são as coordenadas inferior direita do planalto, as coordenadas superior esquerda são assumidas como 1,1.

O resto da entrada são as informações relacionadas às sondas que foram implantadas. Cada sonda tem duas linhas de entrada. A primeira linha dá a posição da sonda, e a segunda linha é uma série de instruções que dizem a ela como explorar o planalto.

A posição é constituída por dois números inteiros e uma letra separada por espaços, que correspondem às coordenadas x e y e a orientação inicial da sonda.

Cada sonda será concluída sequencialmente, o que significa que a segunda sonda não vai começar a se mover até que a primeira termine seu movimento.

# SAÍDA
A saída para cada sonda deve ser sua última coordenadas e orientação.