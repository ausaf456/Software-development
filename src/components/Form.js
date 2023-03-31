import React, { useState } from "react";
import Input from "./Input";
import Selectt from "./Selectbox";

import Button from "./Button"
import { sendData } from "../Config/firebasemethods";


function Form() {
  const [bgg, setBgg] = useState({})
  const abc = [
    { displayValue: "Web & App" },
    { displayValue: "Graphic Desingning" },
    { displayValue: "Affiliate marketing" },
    { displayValue: "Amazon virtual Asssistant" },
    { displayValue: "None" },
  ]
  const xyz = [
    { displayValue: "Sir adamjee institute" },
  ]
  const hhf = [
    { displayValue: "Mon & thurs" },
    { displayValue: "Wed & Sat" },
    { displayValue: "Tues & Fri" },
  ]
  const City = [
    { displayValue: "Institute" },
    
  ]
  const Country = [
    { displayValue: "School" },
    { displayValue: "College" },
    { displayValue: "University" },
    { displayValue: "Institute" },

  ]
  const Gender = [
    { displayValue: "Male" },
    { displayValue: "Female" },
    { displayValue: "Neutral" },
  ]
  const sendingdata = () => {
    sendData(bgg, "institutes").then((res) => console.log(res)).catch((err)=>console.log(err))
  }
  return (
    <

      >
      <div style={{ textAlign: "center" }}>
        <h1>ADD INSTITUTE  </h1>
        <h5>Institute Name</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, institutename: e.target.value })

        }} color={"black"} placeholder={"Institute Name"} />
        <h5> Short Name</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, shortName: e.target.value })
        }} color={"black"} placeholder={"Institute Short Name"} />
        <h5>Logo Image</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, institutename: e.target.value })

        }} color={"black"} placeholder={"Logo Image"} />
        <h5>NO Of Campus</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, NOOfCampus: e.target.value })

        }} color={"black"} type={"number"} placeholder={"NO Of Campus"} />
        <h5>Campus Details</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, CampusDetails: e.target.value })

        }} color={"black"} type={"text"} placeholder={"Campus Details"} />
        <h5>Location</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, Location: e.target.value })

        }} color={"black"} type={"text"} placeholder={"Location"} />
        <h5>Address</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, Address: e.target.value })

        }} color={"black"} type={"text"} placeholder={"Address"} />
        <h5>Contact</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, Contact: e.target.value })

        }} color={"black"} type={"number"} placeholder={"Contact"} />
        <h5>Owner Contact</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg,OwnerContact: e.target.value })

        }} color={"black"} type={"text"} placeholder={"Owner Contact"} />
        <h5> Owner Email</h5>
        <Input onChange={(e) => {
          setBgg({ ...bgg, OwnerEmail: e.target.value })

        }} color={"black"} type={"email"} placeholder={"Owner Email"} />
       
        <h5>User Type</h5>
        <Selectt onChange={(e) => {
          setBgg({ ...bgg,UserType: e.target.value })

        }} data={City} width={150} padding={10} />
        <h5>Institute Type</h5>
        <Selectt onChange={(e) => {
          setBgg({ ...bgg, InstituteType: e.target.value })

        }} data={Country} width={150} padding={10} />
       
        <Button onClick={() => sendingdata()} />


      </div>
    </>
  )
}
export default Form;