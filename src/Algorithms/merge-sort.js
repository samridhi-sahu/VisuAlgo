
export const mergeSort = (state) =>{
    console.log("merge sort called");
    let history = [];
    const arr = state.map((objarr) => objarr);

    history.push(
        arr.map( obj => {
            return {...obj}
        })
    );

    let startIndex = 0;
    let endIndex = arr.length -1;
    

    merge_sort(arr,startIndex, endIndex, history);

    history.push(
        arr.map((obj, idx)=>{
                return {
                    ...obj,
                    color: "#32CD32"
                }
        })
    );
    history.push(
        arr.map((obj, idx)=>{
                return {
                    ...obj
                }
        })
    );


    return history;
}


function merge_sort(arr, startIndex, endIndex, history){ 
    if(startIndex < endIndex){
        let mid = Math.floor((startIndex + endIndex)/2);

        merge_sort(arr, startIndex, mid, history);
        merge_sort(arr, mid+1, endIndex, history);
        merge(arr, startIndex, mid, endIndex, history);
    }
    return ;
}


function merge(arr, startIndex, mid, endIndex, history){
    let leftArr = [];
    for(let i = startIndex; i<= mid ;i++){
        leftArr.push({...arr[i]});
    }
    leftArr.push({value : 999999});

    let rightArr = [];
    for( let i = mid+1 ; i<=endIndex ; i++){
        rightArr.push({...arr[i]});
    }
    rightArr.push({value : 999999});

     history.push(
        arr.map((obj, idx)=>{
               if(idx === mid) {
                   return {
                       ...obj,
                       color : "red"
                   }
               }else if (idx >= startIndex && idx <= endIndex){
                   return {
                        ...obj,
                        color: "green"   
                    }

               }
               return {...obj};
                
        })
     );


    let i = 0,
        j = 0,
        index = startIndex;

    while( index<= endIndex){
       

        if(leftArr[i].value <= rightArr[j].value){
            arr[index++] = leftArr[i++];
        }else{
             arr[index++] = rightArr[j++];
        }
    }   
    
    
    history.push(
        arr.map((obj, idx)=>{
                return {
                    ...obj
                }
        })
    );

}