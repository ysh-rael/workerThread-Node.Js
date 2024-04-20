// hi! See https://imasters.com.br/front-end/usando-worker-threads-no-node-js for more details
// const withoutWorkerThread = require('./withoutWorkerThread')
const { payloads } = require('./payloads.json')
const { Worker } = require('worker_threads')
const formatMemoryUsage = require('./formatMemoryUsage')

// withoutWorkerThread()

const LEADING_ZEROES = 4
const final = []
const LABEL_TIME = 'With Work Thread'

let finishedWorkers = 0

const initialMemoryUsage = process.memoryUsage();
console.time(LABEL_TIME)

for (let payload of payloads) {
  const worker = new Worker('./worker.js', { env: { LEADING_ZEROES } })
  worker.once('message', (message) => {
    final.push(message)
    finishedWorkers++
    if (finishedWorkers === payloads.length) {
      // console.log(final)
      console.timeEnd(LABEL_TIME)
      const finalMemoryUsage = process.memoryUsage();
      const memoryUsageDiff = {
        rss: finalMemoryUsage.rss - initialMemoryUsage.rss,
        heapTotal: finalMemoryUsage.heapTotal - initialMemoryUsage.heapTotal,
        heapUsed: finalMemoryUsage.heapUsed - initialMemoryUsage.heapUsed,
        external: finalMemoryUsage.external - initialMemoryUsage.external
      };
      console.log('Diferenca do uso de memoria:');
      console.log(formatMemoryUsage(memoryUsageDiff))
      console.log('---------------------------')
    }
  })
  worker.on('error', console.error)
  // console.log(`Iniciando worker de ID ${worker.threadId} e enviando o payload "${payload}"`)
  worker.postMessage(payload)
}

