import React from "react"
// import {withRouter} from 'react-router'
import {connect} from 'react-redux'

 function Nav() {
  return (
    <div>
      <a href="http://localhost:3000/#/dashboard">
        <button>Home</button>
      </a>
      <a href="http://localhost:3000/#/new">
        <button>New Post</button>
      </a>
      <a href="http://localhost:3000/#/">
        <button>Logout</button>
      </a>
    </div>
  );
}

function mapStateToProps(state){
    return{
        
    }
}

export default connect(mapStateToProps,)(Nav)
