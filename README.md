# TRABALHO PRÁTICO 3 - SINCRONIZAÇÃO COM SEMÁFOROS

Trabalho desenvolvido para a disciplina de C012 utilizando react para demonstrar a sincronização de threads utilizando semáforos

## Teoria

Os carros dividem um recurso compartilhado que é o cruzamento, assim quando um carro faz uma requisição se o semáfaro tiver recursos dispóniveis (nenhum outro carro estiver atavessando o cruzamento) essa requisição é atendida, porém se não possuir recursos dispóniveis o carro é colocado em espera até ter recursos dispóniveis para atende-lo.

## Funcões

### `Botão iniciar`

Ao clicar no botão iniciar é feito a requisição dos 4 carros simultâneamente para o semáforo.

### `Botão reiniciar`

Ao clicar no botão reiniciar os 4 carros voltam para a posição inicial.

## Demonstração

![Demonstração](https://github.com/ItaloRez/C012---Trabalho-Semaforos/blob/main/src/assets/demo/demo.gif)
