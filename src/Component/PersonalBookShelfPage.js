import React from 'react';
import FetchingApi from "./FetchingApi";


export default function PersonalBookShelfPage() {

  return (
    <>
      <h2 style={{ textAlign: "center" }}>My Bookshelf</h2>
      <div className="container">
        <div className="row g-4">
        <FetchingApi q="Name of the book" />
        </div>
      </div>

    </>
  )
}
