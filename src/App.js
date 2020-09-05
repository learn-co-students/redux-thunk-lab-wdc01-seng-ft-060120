import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {  
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics)
    console.log(this.props.loading)
    return (
      <div>
        <h1>CatBook</h1>
        { this.props.loading
        ? 'LOADLING LOADING'
        : this.props.catPics.map( cat => {
          return <CatList key={cat.id} catPics={cat}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

