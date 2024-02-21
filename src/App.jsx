import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import "./App.css"

const App = () => {
  const[category, setCategory] = useState("general")

  return (
    <>
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
    {/* <div className="container"> */}
      {/* <div className="row"> */}
     
    {/* </div> */}
    {/* </div> */}
    </>
    )
  };
      
        

export default App;
