const formatMemoryUsage = require('./formatMemoryUsage')
const { payloads } = require('./payloads.json')
const crypto = require('crypto')


function withoutWorkerThread () {
    const LEADING_ZEROES = 4
    const final = []

    const LABEL_TIME = 'Without Work Thread'

    const initialMemoryUsage = process.memoryUsage();
    console.time(LABEL_TIME)
    for (let payload of payloads) {
        let nonce = 0
        let generatedHash = ''

        do {
            generatedHash = crypto.createHash('sha256').update(payload + nonce).digest('hex')
            nonce++
        } while (generatedHash.slice(0, LEADING_ZEROES) !== '0'.repeat(LEADING_ZEROES))

        final.push({ payload, nonce, hash: generatedHash })
    }
    //console.log(final)
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

withoutWorkerThread()

module.exports = withoutWorkerThread