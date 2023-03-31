import { Select } from '@mui/material';
import React, { useState } from 'react'


const Selectt = (props) => {
    const { data,onChange,label,width,padding,fontSize,backgroundColor } = props

    return (
        <>
            <label for="Value">{label}</label>
            <div >
                <select  onChange={onChange} style={{backgroundColor:backgroundColor?backgroundColor:"white", width:width?width:45,padding:padding?padding:10,fontSize:fontSize?fontSize:15}} >
                    <option disabled={true}>Select Option</option>
                    {data.map((e) => {
                        return <>
                            <option value={e.displayValue}>{e.displayValue}</option>
                        </>
                    })}
                </select>



            </div>

        </>
    )
}

export default Selectt
