

function reverser(str) {
    return str.split('').reverse().join('')
}

console.log(reverser('32243'))

function palindrome(str) {
    let lower = str.toLowerCase().replace(/[\W_]/g, '')
    let x = lower.split('').reverse().join('')
    return x === lower
}

console.log(palindrome('nurses run'))
