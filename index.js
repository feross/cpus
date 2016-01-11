var os = require('os')

module.exports = function cpus () {
  return os.cpus()
}
