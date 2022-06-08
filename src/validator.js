const validator = {
  isValid:(creditCard)=>{
    console.log(creditCard);

    let inverse=creditCard.split("").reverse();
    console.log(inverse); 
    let result =0; 
    

    for(let i=0; i<inverse.length; i++){
      if(i%2===1)
      { 
        inverse[i] *=2;
        
        if(inverse[i]>9){
          inverse[i] -=9;
          console.log(inverse[i]);
        }        

      }
      result +=parseInt(inverse[i]);
      console.log(result)      
    }
    return(result%10)===0;
       
  },

  maskify:(creditCard)=>{
    if(creditCard.length<4){
      return creditCard
    }else{
      let ultimos_4=''
      for (let i=creditCard.length-4;i<creditCard.length;i++)
      ultimos_4 +=creditCard[i]

      let mask = ''
    for (let j =0; j<creditCard.length; j++)
    mask += '#'

    return mask + ultimos_4
    }
    
    

  }
  
}



export default validator;
