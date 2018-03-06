

module.exports = (path) => {
  const js = read(path + '.js')
  const json = read(path + '.json')
  return js == null ? json : js
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
