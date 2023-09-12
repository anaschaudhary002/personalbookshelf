import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function BookSearchPage(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("")

  const getInputData = (e) => {
    setSearch(e.target.value);
  }
  const submitForm = (e)=>{
    if(e.target.keyCode == "13"){
      postData();
    }
  }

  const postData = (e) => {
    e.preventDefault();
    props.changeSearch(search);
    setSearch("");
  }
  const NavigateToShelf = ()=>{
    navigate('/bookshelf');
  }
  return (
    <>
      <div style={{ textAlign: 'center', padding: '10px 0px 50px 0px'}}>
        <h3>Search by book name:</h3>
        <div className='btndiv' style={{textAlign:'right',marginRight:'20px'}}>
        <button  className="btn btn-success" onClick={NavigateToShelf} >My Book Shelf</button>
        </div>
        <form onSubmit={postData} role="search">
          <input className='maininput' value={search} onKeyUp={submitForm} onChange={getInputData} style={{ width: '22%' }} type='search' />
         
        </form>
      </div>
    </>
  )
}
