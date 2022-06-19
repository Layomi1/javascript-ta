// complete the function
function prime(num) {
  // code goes here
  if (num <= 1) {
    return false
  }
  for (i = 2; num > i; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function solution(arg) {
  return prime(arg)
}

if (typeof require !== 'undefined' && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error('Require argument')
  }

  const arg = process.argv[2]
  console.log(solution(arg))
}

module.exports = { solution }
