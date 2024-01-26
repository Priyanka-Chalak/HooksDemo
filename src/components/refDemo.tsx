import React, { createRef, RefObject } from "react";

class RefDemo extends React.Component {
    private inputRef: RefObject<HTMLInputElement>;

    constructor(props: {}) {
        super(props);
        this.inputRef = createRef();
    }
    
    componentDidMount() {
       /* if (this.inputRef.current !== null) {
            this.inputRef.current.value = "10000";
        }*/
    }

    getValue()
    {
        console.log(this.inputRef.current?.value)
        if (this.inputRef.current !== null)
        {
            this.inputRef.current.style.color="red"
            this.inputRef.current.style.backgroundColor="black"
        }   
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "navy" }}> Ref Demo</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getValue()}>Check Ref</button>
            </div>
        );
    }
}

export default RefDemo;
