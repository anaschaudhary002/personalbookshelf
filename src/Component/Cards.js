import React from 'react';
import AddToBookShelf from './AddToBookShelf';
import '../Cards.css'

const Cards = (props) => {
    return (
        
        <>
            <div className='col-md-3 col-sm-6' >
                <div className="card">
                    <div className="card-body">
                        <h6 style={{height:'30px'}}><span style={{fontWeight:'bold',marginRight:'10px'}}>Book Title:</span>{props.data.title}</h6>
                        <h6><span style={{fontWeight:'bold',marginRight:'10px'}}>Edition Count:</span>{props.data.edition_count}</h6>
                        <AddToBookShelf buttonId={props.data.key} />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;