
export function kindLevel (level) {
  var l = ''
  switch(level) {
    case 0:
      l = 'Estagiário'
      break;
    case 1:
      l = 'Junior'
      break;
    case 2:
      l = 'Junior'
      break;
    default:
      l = 'Senior'
  }
  return l
}

export function kindJob (level) {
  var l = ''
  switch(level) {
    case 0:
      l = 'Remoto'
    default:
      l = 'Presencial'
  }
  return l
}