import React from 'react';
import {connect} from 'react-redux';

const UserDetails = (props) => {
    let details = {};
    const id = props.params.id,
    radix = false,
    responseData = props.getUsersResp.userListResp

    if (responseData) {
      responseData.forEach((result)=>{
        if (result.id === parseInt(id, radix)) {
          details = {
            "proImg": result.avatar_url,
            "gitUrl": result.gists_url
          }
          return details;
        }
      })
    }

    return (
      <div className="text-align-center">
        <h1 className="App-title">User Details</h1>
        <div className="box">
          {
            <img  className="img-round-large" src={details.proImg} alt="User Images"/>
          }
          <h5>{details.gitUrl}</h5>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
	return {
		getUsersResp: state.userListResp
	}
}
export default connect(mapStateToProps)(UserDetails)
