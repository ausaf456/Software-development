import React, { useState } from 'react'
import Button from './Button';
import Input from './Input'

const SearchBar = (props) => {
  const {data}=props


  const [newData, setNewData] = useState([...data])


  const [input, setInput] = useState("");
  const searchingdata = () => {
    let searchData = data.filter((x) => {
      return x.displayValue.includes(input)


    })
    setNewData(searchData)
  }
  return (
    <>
      <div>

        <Input placeholder={"Search Here"} backgroundColor={"black"} color={"white"} onChange={(e) => {
          setInput(e.target.value);

        }} />
        <Button color={"white"} bgColor={"blue"} onClick={searchingdata} text={"Search"} />

      </div>
      <div>
        {newData.map((e) => {
          return <>
            <p>{e.displayValue}</p>
          </>


        })}
      </div>
    </>
  )
}

export default SearchBar