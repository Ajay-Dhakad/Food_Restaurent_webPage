import Header from "./components/Header"
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// import Homepage from "./components/Homepage";
function App() {
 
  
  return (
   <main>
  <Header/>
  <Outlet/>
  <Footer/>
  
   </main>
  )
}

export default App
