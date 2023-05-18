'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:

  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree{
   constructor(value){
      this.value=value;
      this.left=null;
      this.right=null;
   }

//size: retorna la cantidad total de nodos del árbol
size(){
let contador=1;

   if(this.left){
      contador+=this.left.size()
      }
   if(this.right){contador+=this.right.size()};
   return contador;
}
//insert: agrega un nodo en el lugar correspondiente
insert(value){
   if(value < this.value){
      if(this.left){
         this.left.insert(value);
      }
      else{
         this.left = new BinarySearchTree(value);
      }
   }

   if(value >= this.value){
      if(this.right){
         this.right.insert(value);
      }
      else{
         this.right = new BinarySearchTree(value);
      }
   }
}
//contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
contains(value){
      if (value==this.value) {
         return true;
      }
      if (value<this.value) {
         if(this.left){return this.left.contains(value);}else{return false;}         
      }
      if (value>this.value) {
          if(this.right){return this.right.contains(value);}else{return false;}
      }
   } 


// -depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
//  según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
// Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
depthFirstForEach(cb,order){
 /*   if (typeof cb!="function") {
      return "error";
   }  */
   switch (order) {
    // root => izq > der
    case "pre-order":
      cb(this.value); // imprimirValor(this.value)
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      break;

    // izq - der - root
    case "post-order":
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;

    // izq - root - der
    default:
      if (this.left !== null) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right !== null) this.right.depthFirstForEach(cb, order);
      break;
  }
      
   }
   

}



/* let tree=new BinarySearchTree(13);
tree.insert(12);tree.insert(32);tree.insert(42),console.log(tree.size());   
console.log(tree.contains()); */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
