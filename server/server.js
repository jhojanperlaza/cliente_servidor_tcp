const net = require('net');

const server = net.createServer()

// create the socket
server.on('connection', (socket) => {

    //data sent by the client
    socket.on('data', (data) => {
        console.log('\nCliente messages: ' + data)
        let m = analyzeData(data)
        //message returned:
        socket.write(m)
    })

    //connection finished
    socket.on('close', () => {
        console.log('communication completed')
    })

    socket.on('error', (err) => {
        console.log(err.message)
    })
})

function analyzeData(data) {

    let dataStr = String(data)
    dataStr = dataStr.split(' ')
    lenght_data = dataStr.length
    var array = [];

    for (i = 0; i < dataStr.length; i++) {
        array.push(parseInt(dataStr[i], 16));
    }

    if (lenght_data != array[0]) {
        console.log(array[0])
        return "e6"
    }
    if (array[1] != 1 && array[1] != 2 && array[1] && 3) {
        console.log(array[1])
        return "e6"
    }

    var sum = 0;

    // Running the for loop
    for (let i = 0; i < array.length - 1; i++) {
        sum += array[i];
    }

    if (sum.toString(16) != array[array.length - 1].toString(16)) {
        return "e6"
    }
    /*
    console.log(sum)
    console.log(array)
    console.log(array[array.length - 1])

    console.log(sum.toString(16))
    console.log(array[array.length - 1].toString(16))*/

    return "a0"
    //console.log(parseInt('0d', 16))
}

server.listen(4000, () => {
    console.log('server running on :', server.address().port)
})