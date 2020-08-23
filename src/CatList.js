// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

    listCats = () => {
        return (
            this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={"cat"} />)
        )
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

export default CatList