import React, { useEffect, useState } from "react";

function UseStateDemo()  {
   /* const [count , setCount] = useState(0)
    const [name , setName ] = useState(()=>{
        return 'Increment';
    })  */

    const [state , setState] = useState({count:0,name:'Increment'})
    const count = state.count
    const name = state.name

    function increment(){
        setState (prevState=>{
            return {...prevState, name:'Increment',count:prevState.count+1}
        })
        /*setCount(prevCount=>prevCount+1)*/
        /*setCount(prevCount=>prevCount+1)*/
        /*setCount(count+1)*/
    }

    function decrement(){
        setState (prevState =>{
            return{...prevState, name:'Decrement',count: prevState.count-1}
        })
        /*setCount(prevCount=>prevCount-1)
       /* setCount(count-1)*/
    }

    useEffect(() => {
        console.log("Count Mounted");
        
        return function() {
            console.log("Unmount count");
        };
    },[]);
    return(
        <div> 
            {name}<br/>
            <button onClick={increment}> + </button>{ count }
            <button onClick={decrement}> - </button>
        </div>
    );
}

export default UseStateDemo;