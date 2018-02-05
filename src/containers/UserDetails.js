import React from 'react';
import {connect} from 'react-redux';
import {getUserDetails} from '../actions/getUserDetails';
import { BulletList } from 'react-content-loader';

const MyBulletListLoader = () => <BulletList />


class UserDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userDetails: {},
      id: this.props.params.id,
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getUserDetails(this.state.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
        this.setState({"userDetails": nextProps.getUsersDetResp, "loaded": true});
    }
  }

  render () {
    return(
      <div className="text-align-center">
        <h1 className="App-title">User Details</h1>
            <div className="box">
              {
                this.state.loaded ?
                <div>
                  {
                    <img  className="img-round-large" src={this.state.userDetails.avatar_url} alt="User Images"/>
                  }
                  <h5>{this.state.userDetails.url || '-' }</h5>
                  <div>
                    <h5>{this.state.userDetails.blog || '-' }</h5>
                    <h5>{this.state.userDetails.company || '-' }</h5>
                    <h5>{this.state.userDetails.location || '-' }</h5>
                  </div>
                </div>: <MyBulletListLoader></MyBulletListLoader>
              }
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		getUsersDetResp: state.userListResp.userDetailsResp
	}
}
export default connect(mapStateToProps, {getUserDetails})(UserDetails)
