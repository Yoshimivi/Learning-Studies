function getFlagValue(flag) {
  const index = process.arvg.indexOf(flag) + 1
  return process.arvg[index]
}
module.exports = getFlagValue