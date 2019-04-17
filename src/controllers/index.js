
export function skillsConvert (skillsList) {
  var k = skillsList
  if (!k) {
    return k
  }
  k = k.replace(/'/g, '"')
  k = JSON.parse(k)
  return k
}
