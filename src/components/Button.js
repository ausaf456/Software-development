import React from 'react'

const Button = (props) => {
    const {color,bgColor,onClick,text,margin}=props;
    return (
        <button onClick={onClick} style={{ color:color?color: "white", backgroundColor:bgColor?bgColor: "green", border: "none", borderRadius: 5, padding: "8px 10px", fontSize: 18, cursor: "pointer" ,margin:margin?margin:40 }}>
            {text?text:"Submit"}
        </button>
    )
}

export default Button