import React, { useEffect, useMemo, useState } from "react";

function UseMemoSample(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState(' ');
 
    {/* const [data, setData] = useState(0);
    useEffect(() =>{
        console.log(Math.random());
    },[count])*/}


            {/*<h2>{count}</h2>
            <h2>{data}</h2>
            <button onClick={()=>{setCount(count+1)}}>Update count</button>
    <button onClick={()=>{setData(data+1)}}>Update Data</button>*/}

    const noRender = useMemo(() => {
        return <div>
             <h2 style={{color:'red'}}>No render agian {count}  -- {name}</h2>
            <h2 style={{color:'red'}}>UseEffect vs UseMemo Hook</h2>
        </div>
    },[name])
    return(
        <div>
            <h1 style={{color:'violet'}}>UseMemo Hook Sample</h1>

            {/*      */}
            {noRender}
            {/*      */}

            {/*      */}
            <h2>Render it agian and again {count}</h2>
            <h2>UseEffect vs UseMemo Hook</h2>
            {/*      */}
            <button onClick={()=>setCount(count+1)}>Click</button>
            <button onClick={()=>setName('code step by step')}>ClickMe</button>

        </div>

    )
}

export default UseMemoSample;