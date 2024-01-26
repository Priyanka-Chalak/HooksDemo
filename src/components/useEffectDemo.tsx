import React,{useEffect, useState} from "react";

function UseEffectDemo(){

    const[content , setContent]=useState('posts')

    useEffect(()=>{
        console.log('content Mount')
    },[]);

    useEffect(()=>{
        console.log('User Updated content')
    },[content]);

    return(
        <div>
            <p>  </p>
            <button onClick={()=>setContent('posts')}>Posts</button>
            <button onClick={()=>setContent('users')}>Users</button>
            <button onClick={()=>setContent('comments')}>Comments</button>
            <h1>{content}</h1>
        </div>
    )

}

export default UseEffectDemo;