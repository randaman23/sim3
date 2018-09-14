import React from "react"
// import {withRouter} from 'react-router'
import {connect} from 'react-redux'

 function Nav(props) {
     console.log(props)
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
      {/* <p>Username: {username}</p>
      <p>User-imag: {user_img}</p> */}
    </div>
  );
}

function mapStateToProps(state){
    return{
        username: state.username,
        user_img: state.user_img
    }
}

export default connect(mapStateToProps)(Nav)
