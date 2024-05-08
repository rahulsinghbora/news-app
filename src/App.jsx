 import { useState } from "react";
import Navbar from "./components/Navbar";
 import Newsboard from "./components/Newsboard";
 import Newsitem from "./components/Newsitem";

const App=()=>{

  const[category,setcategory]=useState("general")

  return(<>
      <Navbar setcategory={setcategory}/>
      <Newsboard category={category}/>
     
  </>)
}
export default App;