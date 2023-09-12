import BookSearchPage from "./Component/BookSearchPage";
import FetchingApi from "./Component/FetchingApi";
import { useState } from "react";
import './style.css';

function App() {

  const [search, setSearch] = useState(""); 
    
    const changeSearch =(x)=>{
        setSearch(x)
    }

  return (
    <>
    <BookSearchPage changeSearch={changeSearch}/>
    <FetchingApi search={search} q="Name of the book"/>
    </>
  );
}

export default App;


