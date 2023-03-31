import React from 'react'

const Input = (props) => {
    const {placeholder,backgroundColor,color,onChange,type} =props
    
  return (
    <div>
        <input type={type?type:"text"} onChange={onChange} placeholder={placeholder?placeholder:'input value'} style={{backgroundColor: backgroundColor?backgroundColor:"White",color: color?color:"white",padding:"10px",marginBottom:25,width:200,height:20}} ></input>
    </div>
  )
}

export default Input