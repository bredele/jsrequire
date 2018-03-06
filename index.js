/**
 * Dependencies
 */

const join = require('path').join


/**
 * Require Javacript modul or JSON file at a given path.
 *
 * Javascript module takes precendence over JSON and will be returned
 * if both JSON and Javascript files exist.
 *
 * @param {String} file
 * @return javacript module or json object
 * @api public
 */

module.exports = file => {
  const filename = path(file)
  const js = read(filename + '.js')
  return js == null ? read(filename + '.json') : js
}



/**
 * Return absolute file path.
 *
 * @param {String} file
 * @return {String}
 * @api private
 */

function path (file) {
  if (file[0] !== '/') {
    return join(module.parent.filename, '..', file)
  }
  return file
}

/**
 * Synchronously read file and return null if does not exist.
 *
 * @param {String} path
 * @return {Any | null}
 * @api private
 */

function read (path) {
  try {
    return require(path)
  } catch (e) {
    return null
  }
}
