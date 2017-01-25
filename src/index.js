const MIN = -8192, MAX = 8191
const OFFSET = 8192
const LENGTH = 4

//accept 14 length string
function padAndSplit(value) {
  let base = 14
  let bit14 = (`${'0'.repeat(base)}${value}`).slice(-base)

  let chunks = bit14.match(/.{7}/g)
  let padded = chunks.map((chunk) => {
    return (`0${chunk}`)
  })
  return padded
}

function bin2hex(b) {
  return b.match(/.{1,4}/g).reduce(function(acc, i) {
    return acc + parseInt(i, 2).toString(16)
  }, '')
}

function hex2bin(h) {
  return h.split('').reduce(function(acc, i) {
    return acc + ('000' + parseInt(i, 16).toString(2)).substr(-4, 4)
  }, '')
}

function encode(value){
  if (isNaN(value)) { throw (`error input ${value} is not a number`)  }
  value = parseInt(value)
  if (value < MIN || value > MAX) { throw (`error input (${value}) must have a value lower than ${MIN} and greater than ${MAX}.`) }
  let binaryValue = (value + OFFSET).toString(2)

  let padded = padAndSplit(binaryValue)
  let encoded = padded.reduce(function(acc, i){
    let hex = bin2hex(i)
    return acc + hex
  }, '')
  return encoded
}

function decode(value){
  if (value.length !== LENGTH) { throw (`error input (${value}) must have a length of ${LENGTH}.`) }
  let chunks = value.toString().match(/.{2}/g)
  let bins = chunks.map((chunk) => {
    return hex2bin(chunk)
  })
  let decodedBin = bins.reduce((acc, bin) => {
    return acc + bin.slice(1)
  }, '')
  return  parseInt(decodedBin,2) - OFFSET
}

export {encode, decode}
