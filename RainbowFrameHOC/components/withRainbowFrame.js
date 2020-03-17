import React from 'react';

function withRainbowFrame(colors) {
   
return Fragment=> props=>{
        let code=<Fragment>{props.children}</Fragment>
        colors.forEach(i=> 
            code= <div style={{border:"solid 5px "+i, padding:"10px"}}>  {code} </div>)
        return code
        }
    
 
}

export {withRainbowFrame};
