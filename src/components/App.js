import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIntialData } from '..//actions/shared'
import Dashboard  from './Dashboard'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleIntialData())
  }
  render() {
    return (
      <div>
        {this.props.loading 
          ? null
          : <Dashboard />}       
      </div>
      
      
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)