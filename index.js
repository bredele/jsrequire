

/**
 * Require Javacript modul or JSON file at a given path.
 *
 * Javascript module takes precendence over JSON and will be returned
 * if both JSON and Javascript files exist.
 *
 * @param {String} path
 * @return javacript module or json object
 * @api public
 */

module.exports = path => {
  const js = read(path + '.js')
  return js == null ? read(path + '.json') : js
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
