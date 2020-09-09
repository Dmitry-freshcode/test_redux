const add1 =(number) => {
    return{  
        type: "ADD1",
        payload: number      
    }
};

 const sub1 = (number)=>{
    return {  
            type: "SUB1",
            payload: number       
        };
    };

    const add2 =(number) => {
        return{  
            type: "ADD2",
            payload: number      
        }
    };
    
     const sub2 = (number)=>{
        return {  
                type: "SUB2",
                payload: number       
            };
        };
export {add1,sub1,add2,sub2}