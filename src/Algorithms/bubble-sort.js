
export const  bubbleSort = ( state) => {  
    let arr = state.map((objArr)=> objArr );
    let history =[];
  
  
    history.push(
         arr.map((a)=>{
            return {...a};
         } )
    )
  
  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < ( arr.length - i -1 ); j++){
         
       arr[j].color ='white';
       arr[j+1].color ='white';
       
       history.push(
         arr.map((a)=>{
            return {...a};
         } )
       )
  
       if(arr[j].value > arr[j+1].value){
  
         arr[j].color ='#DC143C';    
         arr[j+1].color ='#DC143C';
  
        history.push(
         arr.map((a)=>{
            return {...a};
         } )
        )
         var temp = arr[j]
         arr[j] = arr[j + 1]
         arr[j+1] = temp
  
        
  
  
       }
       else{
          arr[j].color ='#32CD32';   
          arr[j+1].color ='#32CD32';
  
          history.push(
          arr.map((a)=>{
            return {...a};
          } )
         );
       }
  
      arr[j].color ='#293451';  
      arr[j+1].color ='#293451';
  
        history.push(
         arr.map((a)=>{
            return {...a};
         } )
        );
  
     }
   }
    
         history.push(
         arr.map((a)=>{
            return {...a, color : "#32CD32"};
         } )
    )
     history.push(
         arr.map((a)=>{
            return {...a};
         } )
    )
  return history;
  }
  