# MarsRover
Um esquadrão de robôs robóticos enviados pela NASA estão desembarcando em um platô de Marte.
Este planalto, que é curiosamente retangular, deve ser navegado pelos rovers para que suas câmeras possam obter uma visão completa do terreno para enviar de volta para a Terra.
Uma posição e localização do robô é representado por uma combinação de coordenadas x e y e uma letra que representa um dos quatro pontos cardeais. O planalto é dividido em uma grade para simplificar a navegação. Um exemplo de posição do rover pode ser 0 0 N, o que significa que o rover está no canto inferior esquerdo e de frente para o Norte.
A fim de controlar a Rover, a NASA envia uma seqüência simples de letras. As letras possíveis são 'L', 'R' e 'M'. Os comandos 'L' e 'R' fazem o rover girar 90 graus para a esquerda ou direita, respectivamente, sem sair de seu local atual. Ja o comando 'M' faz o rover avançar um ponto em frente, e manter a mesma orientação.
Suponha que a praça directamente do Norte a partir de (x, y) é (x, y + 1).

ENTRADA:
A primeira linha de entrada é as coordenadas superior direito do planalto, as coordenadas inferior esquerdo estão a ser assumida 0,0.
O resto da entrada é a informação relacionada com os rovers que foram implantados. Cada rover tem duas linhas de entrada. A primeira linha dá a posição do rover, ea segunda linha é uma série de instruções que dizem ao robô como explorar o planalto.
A posição é constituído por dois números inteiros e uma carta separada por espaços, que correspondem aos X e Y co-ordenadas e orientação da sonda.
Cada rover será concluída sequencialmente, o que significa que o segundo rover não vai começar a se mover até que a primeira terminou em movimento.

SAÍDA
A saída para cada rover deve ser sua última coordenadas e título.