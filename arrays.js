var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){

  var newArray = new Array();
  newArray = [element, ...array];
  return newArray

}

function destructivelyAddElementToBeginningOfArray(array, element){

  array[0] = element;
  return array;

}
