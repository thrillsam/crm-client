import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Chart from "./components/Chart"
import Ticket from "./Ticket"
import Tickets from "./Tickets"
import App from './App'

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth" element={<Auth />}/>
        <Route exact path="/chart" element={<Chart />}/>
        <Route exact path="/tickets" element={<Tickets />}/>
        <Route exact path="/tickets/:id" element={<Ticket />} />;
      </Routes>
    </BrowserRouter>
  )
}

export default Home;


// import "bootstrap/dist/css/bootstrap.min.css"
// import axios from "axios";
// import "./Home.css"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Auth from "./Auth"
// import React from "react"

// axios.defaults.baseURL = 'http://localhost:3001';

// class Home extends React.component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/auth" element={<Auth />} />
//         </Routes>
//       </BrowserRouter>
//     )
//   }
// }

// export default Home;
