
export function skills (skillsList) {
  var k = skillsList
  k = k.replace(/'/g, '"')
  k = JSON.parse(k)

  return k
}
