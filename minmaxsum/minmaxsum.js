function miniMaxSum(data) {
  let result = {}
  if (data.length == 0 || Array.isArray(data) == false) {
    result = {}
  } else {
    dataSort = data.sort()

    min = 0
    max = 0

    dataSort.forEach(element => {
      min += element
      max += element
    });

    result = {
      "min": min - dataSort[dataSort.length - 1],
      "max": max - dataSort[0],
    }
  }

  return result
}

let test = miniMaxSum([1, 2, 4, 5, 7])