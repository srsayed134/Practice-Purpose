function MyClass(publicField, privateField, protectedField){
   this.publicField = publicField;

   //Private field (closure)
   const _privateField = privateField;

   //Protected field
   const _protectedField = protectedField;
   

   //Methods -------------------------

   //Public method 
   this.publicMethod = function(){
    return `Public Field: ${this.publicField}`
   }
   
   //Private method (closure)
   function _privateMethod (){
    return `Private Method: ${_privateField}`
   }
   
   
   //Protected Method (closure)
   function _protectedMethod (){
    return `Protected Method: ${_protectedField}`
   }

   //Method to access protected method
   this.accessProtectedMethod = function(){
    return _protectedMethod()
   }

}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data")

// console.log(myObject.publicField)
// console.log(myObject._privateField)
// console.log(myObject._protectedField)

console.log(myObject.publicMethod())
// console.log(myObject._privateMethod())
// console.log(myObject._protectedMethod())
console.log(myObject.accessProtectedMethod())