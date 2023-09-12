import React from 'react';


export default function AddToBookShelf(props) {


  const AddToBookShelf = (e) => {
    let localStoragedata = JSON.parse(localStorage.getItem("books"));
    let data = [];
    if (localStoragedata !== null) {
      data = localStoragedata;
    }
    const result = data.filter(checkID);
    function checkID(id) {
      return id == e.target.id;
    }
    if(result.length <= 0){
      data.push(e.target.id);
      // console.log(data);
    }
    localStorage.setItem("books", JSON.stringify(data));
    alert("Book Added")

  }
  return (
    <>
      <button type="button" id={props.buttonId} className="btn btn-success" onClick={AddToBookShelf}>Add to Bookshelf</button>
    </>
  )
}
