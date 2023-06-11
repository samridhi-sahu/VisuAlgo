import React from 'react'
import  './right.scss';

function Right({state,size}) {
    
    

    return (
        <div className='right'>
                <div className="right__Notice"> 
                </div>

                {state.map((obj,index)=>  (
                    <div  className="right__bar"  
                    style={
                        {
                            height: `${obj.value}%`,
                            width: `${Math.floor(70/size)}%`,
                            backgroundColor: `${ obj.color}`,
                            color: 'white'
                        }
                        }
                        key={index}
                    >
                      {/* {`${obj.value}`}  */}
                     </div>
                )
                )}
        
        </div>
    )
}

export default Right