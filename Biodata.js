export function Biodata() {
    const Biostyle = {
        heading:{
            fontstyle:"bold",
            fontSize:"12px",
            textAlign:"center",
            color:"grey"
        },
        info: {
            color:"purple",
            fontSize:"12px"
        }
    }
    return ( 
    <>
    <div style={Biostyle.heading}>
       <h1><u>BIODATA</u></h1>
    </div>
    <div class="container">
        <div style={Biostyle.info}>
            <b>NAME: </b>Jayashree<br />
            <b>DATE OF BIRTH:</b>09/01/2003<br />
            <b>FATHER NAME:</b>Narayana Poojary<br />
        </div>
    </div>
    </>
    )
    }
    
    
    
    App.js

import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"
import { Biodata } from "./components/Biodata"
import { Achievement } from "./components/Achievement"
import { Navbar } from "./components/Navbar"
import { Qualifiaction } from "./components/Qualification";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={< Home />}></Route> 
      <Route path="Biodata" element={<  Biodata  />}></Route>
      <Route path="Achievement" element={< Achievement />}></Route>
      <Route path="Qualification" element={< Qualifiaction />}></Route>
    </Routes>
    </>
  )
}
      
export default App;


