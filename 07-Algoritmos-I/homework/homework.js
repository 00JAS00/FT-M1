'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores=[1]
  let divisor=2
  while (num!=1) {
    if (num%divisor===0) {
      factores.push(divisor)
      num/=divisor
    }else{
      divisor++;
    }
    
  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array.length-1; j++) {
      if (array[j]>array[j+1]) {
         let aux=array[j]
         array[j]=array[j+1];
         array[j+1]=aux
         }
      }
  }
  return array;
}
console.log(bubbleSort([1,5,80,12,42,13]))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let puntero=array[i];
    let anterior=i-1;
    while (anterior>=0&&array[anterior]>puntero) {
      array[anterior+1]=array[anterior]
      anterior=anterior-1
    }
    array[anterior+1]=puntero;
  }
  return array
}
console.log(insertionSort([1,5,80,12,42,13]))


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length-1; i++) {
    let min = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[min]>array[j]) {
        min=j;
      }
    }
    if(i!==min){
      let aux=array[i];
      array[i]=array[min];
      array[min]=aux;
    }
    
    
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
