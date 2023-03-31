import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Admindashboard from "../pages/Admindashboard";
import Institutelist from "../pages/Intituteslist"
import Addinstitute from "../pages/Addinstitute"
function Approuter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          { <Route path="/" element={< Admindashboard/>} /> }
          { <Route path="/Addinstitute" element={< Addinstitute/>} /> }
          { <Route path="/Instituteslist" element={< Institutelist/>} /> }


          {/* <Route path="/" element={< ResponsiveDrawer/>} /> */}
          {/* <Route path="/signup" element={< SignUp/>} /> */}
          {/* <Route path="/login" element={< Login/>} /> */}
          {/* <Route path="/Studentdashboard" element={< StudentDrawer/>} />
          <Route path="/Admindashboard" element={<Admindrawer/>} />
          <Route path="/Registerationform" element={<Registerationform/>} /> */}
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Approuter;
