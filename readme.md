
# Worker Threads Node.js
Esse e um exemplo de otimizacao de tempo de execucao e recursos utilizando multiplas threads com node.js

## O que a aplicacao faz? 
Simula de forma simplificada um minerador de bitcoins. Veja na fonte https://imasters.com.br/front-end/usando-worker-threads-no-node-js para mais detalhes.

"O ato de ‘minerar’ um bitcoin basicamente é encontrar um número único que, ao ser adicionado ao payload de um
bloco, produz um hash final que segue uma regra específica. No caso do bitcoin, essa regra diz que o hash final precisa começar com uma quantidade de N zeros."

"Isto é um caso excelente para processamento paralelo, porque é um processo que demora um tempo e exige computação mais pesada. Vamos simplificar o modelo de mineração e abstrair as funcionalidades principais para um código mais simples de entender e focar em nossos workers. Nosso ‘minerador’ vai receber um JSON"
 
Possuimos duas aplicacao que realizam a mesma tarefa, utilizando os mesmos recursos. A diferenca esta que uma possui a divisao de multi-tarefas por thread, enquanto a outra centraliza tudo na thread principal, como comumente e feito no Node.js

## O que executar?
No terminal, execute o ```inode ndex.js``` para executar a tarefa usando threads e ```node withoutWorkerThread.js``` para realizar a tarefa somente na thread principal.

## O que "aquilo" significa?

Aqui esta uma descricao do objeto retornado no console:

**rss:** Isso representa a quantidade total de memória alocada para o processo em memória física do sistema. "RSS" significa "Resident Set Size" e inclui todas as partes do processo que estão atualmente na memória física do sistema, incluindo partes compartilhadas com outros processos.

**heapTotal:** Esta é a quantidade total de memória alocada para o heap do JavaScript. O heap é a região da memória onde são alocados objetos JavaScript, como arrays e objetos. O valor heapTotal representa o tamanho total do heap disponível para o processo.

**heapUsed:** Este é o valor atual de quanto do heap do JavaScript está sendo utilizado pelo processo. Indica a quantidade de memória atualmente em uso pelo processo para armazenar objetos JavaScript.

**external:** Esta é a quantidade de memória utilizada por buffers de memória que são parte do heap do processo, mas que estão fora da gestão automática de memória do JavaScript. Isso geralmente inclui objetos como buffers de memória usados pelo módulo Buffer do Node.js ou outros objetos que fazem uso de memória diretamente do sistema operacional.

Alem das informacoes sobre memoria, tambem e exibido o tempo de conclusao da tarefa em segundos.

<br>
<br>
<br>

>   .
>   :date: Atualizado em 19.04.2024
>   :penguin:  **Ysh-rael** | _ysp.rael@gmail.com_
>   .



