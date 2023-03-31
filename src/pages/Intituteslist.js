import React, { useEffect, useState } from "react";
import { getData } from "../Config/firebasemethods";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import * as React from 'react';


function Addinstitute (){
    const [first, setfirst] = useState([])
    useEffect(() => {
        getData("institutes").then(res=>setfirst(res)).catch((err)=>console.log(err))
    }, [])
    
    return(
        

 
    <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Institute Names</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >NO of Campus</TableCell>
            <TableCell >Institute Type</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {first.map((e) => (
            <TableRow
              key={e.institutename}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="e">
                {e.institutename}
              </TableCell>
              <TableCell >{e.CampusDetails}</TableCell>
              <TableCell >{e.NOOfCampus}</TableCell>
              <TableCell >{e.InstituteType}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
     
        </>
  );
}
        


export default Addinstitute;