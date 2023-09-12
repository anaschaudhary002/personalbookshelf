import React from 'react';
import '../Cards.css'

const BookShelfCards = (props) => {
    return (
        
        <>
            <div className='col-sm-2 col-md-3' >
                <div className="card">
                    <div className="card-body">
                        <h6 style={{height:'30px'}}><span style={{fontWeight:'bold',marginRight:'10px'}}>Book Title:</span>{props.data.title}</h6>
                        <h6><span style={{fontWeight:'bold',marginRight:'10px'}}>Edition Count:</span>{props.data.edition_count}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookShelfCards;