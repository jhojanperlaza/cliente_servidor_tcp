const net = require('net');
const readline = require('readline-sync')

const optionsConetion = {
    port: 4000,
    host: '127.0.0.1'
}

const client = net.createConnection(optionsConetion)

client.on('connect', () => {
    console.log('Successful connection!')
    sendLine()
})

client.on('data', (data) => {
    console.log('The server responds:' + data)
    sendLine()
})

client.on('error', (err) => {
    console.log(err.message)
})

/*
0d 01 48 6f 6c 61 20 6d 75 6e 64 6f d5
Saludos "Hola mundo"
04 02 01 07
Comando 1
07 03 43 68 61 6f 85
Despedirse "Chao"
*/

function sendLine() {
    var line = readline.question('\nEnter the data frame: ')
    if (line == "exit") {
        client.end()
    } else {
        client.write(line)
    }
}