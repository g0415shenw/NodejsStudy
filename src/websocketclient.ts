import WebSocket = require('ws')

const ws = new WebSocket('ws://127.0.0.1:8181', {
  perMessageDeflate: false,
})

ws.on('open', function open() {
  ws.send('something')
})

ws.on('message', function message(data: WebSocket.RawData) {
  console.log('received: %s', data.toString())
})
