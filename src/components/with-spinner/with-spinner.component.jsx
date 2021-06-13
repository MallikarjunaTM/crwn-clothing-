import React from 'react';

const WithSpinner = WrappedComponent =>{

    const spinner=({isLoading,...props})=>{
        
        return isLoading ? 
        (<div>Loading ...</div>) :
         (<WrappedComponent {...props}/>)
    }
    return spinner;

} 

export default WithSpinner;


