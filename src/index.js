//import { resetDefaultConfig } from 'eslint/lib/rule-tester/rule-tester';
import validator from './validator.js';

const comprar= document.querySelector('#comprar');
const validar=document.querySelector('#validar')
let creditCard=document.getElementById('creditCard');
const result=document.getElementById('result')

comprar.addEventListener("click", (e)=> {
  e.preventDefault();
    document.getElementById("formulario").style.display = "block";
    document.getElementById("peliculas").style.display = "none";
});


validar.addEventListener("click", (e)=> {
  e.preventDefault();
  let message = validator.isValid(creditCard.value);
   
  validator.maskify(creditCard.value);
  let number = validator.maskify(creditCard.value);
  alert(number);

  
  if (message === true) {
      result.innerHTML="Tu tarjeta es válida, continúa tu compra"
  } else {
      result.innerHTML="Lo sentimos tu tarjeta no es válida, por favor intenta con otra tarjeta"
  }
  
})  
  
    
    console.log(validator.isValid(creditCard.value))
    console.log(validator.maskify(creditCard.value))
 
      

   
console.log(validator);






  
 