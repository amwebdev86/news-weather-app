/**
 * Truncates the length of a string setting desired length and desired ending to append.
 * @param {string} str 
 * @param {int} length 
 * @param {string} ending 
 */ 
function truncateString(str, length, ending) {
  if (length === null) {
    length = 50
  }
  if (ending === null) {
    ending = "..."
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}
/**
 * converts Kelvin to Fahrenheit returning and appending the degree symbol 
 * @param {int} k 
 */
function convertKelvinToFah(k) {
  return (((k - 273.15) * 9) / 5 + 32).toFixed(2) + " \xB0F"
}
/**
 * converts Kelvin to Celsius to a fixed decimal of 2 'x.xx' and returning and appending the degree symbol
 * @param {double} k 
 */
function convertKelvinToCelsius(k) {
  return (k - 273.15).toFixed(2) + "\xB0C"
}
function convertUnixTime(unix) {
  let unix_timeStamp = unix
  const date = new Date(unix_timeStamp * 1000)
  let hours = date.getHours()
  let mins = "0" + date.getMinutes()
  return `${hours > 12 ? hours - 12 : hours}:${mins.substr(-2)}`
}

export { truncateString, convertKelvinToCelsius, convertKelvinToFah, convertUnixTime}