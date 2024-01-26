import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
    console.log('Rendering button - ', children);
    return (
        <button onClick={onClick}>{children}</button>
    );
}

export default React.memo(Button);
