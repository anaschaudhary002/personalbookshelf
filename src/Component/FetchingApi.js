import React, { Component } from 'react'
import Cards from './Cards'
import BookShelfCards from './BookShelfCards';

export default class FetchingApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docs: []
        }
    }
   
    async get() {
        let response = await fetch(`https://openlibrary.org/search.json?q=${this.props.q}&limit=10&page`);

        let result = await response.json();
        this.setState({
            docs: result.docs
        })
    };

    async get2() {
        let response = await fetch(`https://openlibrary.org/search.json?q=${this.props.search}&limit=10&page`);

        let result = await response.json();
        this.setState({
            docs: result.docs
        })
    };

    componentDidMount() {
        this.get();
    };

    componentDidUpdate(old) {
        if (this.props.search !== old.search) {
            this.get2();
        }
    }

    render() {
        let LSData = JSON.parse(localStorage.getItem("books"));
        console.log(LSData)

        if (window.location.pathname == "/bookshelf") {

            return (
                <>
                    {
                        (LSData==null)?<h4>Note:-Please Add Books</h4>:
                        this.state.docs.map((item, index) => {
                            if(LSData != null){
                                for (let i = 0; i < LSData.length; i++) {
                                    const element = LSData[i];
                                    if (item.key == element) {
                                        return(
                                            
                                            <BookShelfCards data={item} key={index} />
                                        )
                                    }
                                }
                            }
                        })
                    }
                </>
            )
        }
        else {
            return (
                <>
                    <section>
                        <div className="container">
                            <div className='row g-4'>
                                {
                                    this.state.docs.map((item, index) => {
                                        return <Cards data={item} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </>
            )
        }


    }
}
