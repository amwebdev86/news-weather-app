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

function convertKelvinToFah(k) {
  return (((k - 273.15) * 9) / 5 + 32).toFixed(2) + " \xB0F"
}
function convertKelvinToCelsius(k) {
  return (k - 273.15).toFixed(2) + "\xB0C"
}

export { truncateString, convertKelvinToCelsius, convertKelvinToFah}