import React from 'react';
import { Link } from 'react-router';

const UserBar = (props) => {
  return (
    <Link to={`/users/${props.users.id}`}  style={{ textDecoration: 'none', color: 'black' }}>
          <div className="disp-inlineBlock padding-20px">
            <img className="img-round" src={props.users.avatar_url} alt="User Images"/>
          </div>
          <div className="disp-inlineBlock vertical-align-top padding-30px">
            <h6>{props.users.login}</h6>
            <h6>{props.users.gists_url}</h6>
          </div>
    </Link>
  )
}

export default UserBar
