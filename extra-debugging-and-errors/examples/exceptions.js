function check (n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError('The argument must be between -500 and 500.')
  }
}

try {
  check(2000)
} catch (e) {
  if (e instanceof RangeError) {
    console.log(e instanceof RangeError)
    console.log(e.message)
    console.log(e.name)
    console.log(e.stack)
  }
}
