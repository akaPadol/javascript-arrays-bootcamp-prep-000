chocolateBars = ["snickers",
"hundred grand",
"kitkat",
"skittles"]

function addElementToBeginningOfArray(arrays,element){
  var result = new Array()
  result=[element, ...arrays]
  return result
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
}
function addElementToEndOfArray(arrays,element){
  var result = new Array()
  result=[...arrays, element]
  return result
}
function destructivelyAddElementToEndOfArray(arrays,element){
  arrays.push(element)
}

function accessElementInArray(arrays,index){
  return arrays[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrays){
  arrays.shift()
}
function removeElementFromBeginningOfArray(arrays){
  var result = new Array()
  result = arrays.slice(1)
  return result
}
function destructivelyRemoveElementFromEndOfArray(arrays){
  arrays.pop()
}
function removeElementFromEndOfArray(arrays){
  var result = new Array()
  result= arrays.slice(0, arrays.lenght -1)
  return result
}
