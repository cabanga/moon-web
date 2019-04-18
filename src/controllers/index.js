export function benefitsConvert (bonus) {
  var k = bonus

  if (!k) {
    return ''
  }
  k = k.split(', ')
  return k
}

export function skillsConvert (skillsList) {
  var k = skillsList

  if (!k) {
    return ''
  }
  k = k.split(', ')
  return k
}

export function optionsLevel () {
  var k = []
  k = [
    {
      'id': 0,
      'kind': 'Estagiário'
    },
    {
      'id': 1,
      'kind': 'Junior'
    },
    {
      'id': 2,
      'kind': 'Pleno'
    },
    {
      'id': 3,
      'kind': 'Senior'
    }
  ]
  return k
}

export function optionsJobs () {
  var k = []
  k = [
    {
      'id': 0,
      'kind': 'Remoto'
    },
    {
      'id': 1,
      'kind': 'Presencial'
    }
  ]
  return k
}
