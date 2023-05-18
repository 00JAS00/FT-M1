'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length<=1) {
    return array
  }
  let pivot=array[Math.floor(Math.random()*array.length)]
  let izq=[]
  let der=[]
  let equal=[]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      izq.push(array[i]);
    } else if (array[i] > pivot) {
      der.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(izq).concat(equal).concat(quickSort(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<2)return array;
  const mitad=Math.floor(array.length/2)
  let left=array.slice(0,mitad)
  let right=array.slice(mitad)
  array=[]
  left=mergeSort(left)
  right=mergeSort(right)

  while (left.length&&right.length) {
    if (left[0]< right[0]) {
      array.push(left.shift())
    }else{
      array.push(right.shift())
    }
  }
  array=array.concat(left,right)
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
