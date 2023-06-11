
export const quickSort = (state) =>{
    console.log("Quick Sort Called");
    const arr = state.map((objArr)=> objArr);
    const history = [];

    history.push(
       arr.map((a)=>{
          return {...a};
       } )
    );
    let start =0;
    let end = arr.length-1;

    Quick_sort(arr, start, end, history);

   history.push(
       arr.map((a)=>{
          return {
             ...a,
             color: "#32CD32"
            };
       } )
    );
history.push(
       arr.map((a)=>{
          return {
             ...a
            };
       } )
    );

    return history;
}


function Quick_sort(arr , start, end ,history){
   if(start < end){
      let pMid = partition(arr, start, end , history); 
      console.log(pMid);
      Quick_sort(arr, start, pMid-1, history);
      Quick_sort(arr, pMid+1, end, history);

   }
   return;
}



function partition ( arr, start, end, history){
   let pivot = arr[end].value;
    history.push(
       arr.map((a, index)=>{
         if( index === arr.length-1){
            return {
              color : "#DC143C",
              ...a
            }

         }
         return {...a};
         
       } )
    );



   let i = start-1 , j=start;

   while( j<end){
       history.push(
       arr.map((a, index)=>{
         //  return {...a};
         if( index === j || index === end){
            return {
               ...a,
               color : "white"
            }
         }
         return {...a};   
       } )
    );


      if(arr[j].value<= pivot){

      history.push(
       arr.map((a, index)=>{
      
         if( index === j){
            return {
               ...a,
               color : "#32CD32"
            }

         }
         return {...a};
         
       } )
    );

        let temp = arr[++i];
        arr[i]= arr[j];
        arr[j]= temp;
      }
      history.push(
       arr.map((a, index)=>{
      
         if( index === j){
            return {
               ...a,
               color : "#DC143C"
            }

         }
         return {...a};
         
       } )
    );

      j++
   }

   let temp = arr[++i];
   arr[i] = arr[end];
   arr[end] = temp;
   history.push(
       arr.map((a, index)=>{
      
         if( index === i){
            return {
               ...a,
               color : "#32CD32"
            }

         }
         return {...a};
         
       } )
    );

   return i; 
}