import React from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../actions/getUsers';
import UserBar from '../components/UserBar';
import { BulletList } from 'react-content-loader';

const MyBulletListLoader = () => <BulletList />

class UserList extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      "users": [],
      "page": 0,
      "loaded": false
    }
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
	}

  componentDidMount() {
    this.props.getUsers(this.state.page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
        this.setState({"users": nextProps.getUsersResp.userListResp, "loaded": true});
    }
  }

  nextPage(){
    this.state.page < 7 &&
    this.setState({"page": this.state.page+1, "loaded": false}, ()=>{
      this.props.getUsers(this.state.page);
    });
  }

  prevPage(){
    this.state.page > 0 &&
    this.setState({"page": this.state.page-1,  "loaded": false}, ()=>{
      this.props.getUsers(this.state.page);
    });
  }

  render() {
    return(
      <div>
        <h1 className="App-title text-align-center">Users List</h1>
        <div className="box">
          {
            this.state.loaded ? this.state.users.map((users, i)=>{
              return (
                <div key={i}>
                  <UserBar users={users}/>
                </div>
              )
            }) : <MyBulletListLoader></MyBulletListLoader>
          }
        </div>
        <br />
        <div className="text-align-center">
          <span className="box box-small" onClick={this.prevPage}> { "<" } </span>
          <span className="box box-small" onClick={this.nextPage}> { ">" } </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		getUsersResp: state.userListResp
	}
}

export default connect(mapStateToProps, { getUsers })(UserList)
