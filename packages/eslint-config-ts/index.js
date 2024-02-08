const { getConfig } = require('./get-config')

// Default exports rules
module.exports = getConfig(__dirname)

// Export config function
module.exports.getConfig = getConfig
