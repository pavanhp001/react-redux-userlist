import axios from 'axios';
const USER_DETAILS = "USER_DETAILS";

export const getUserDetails = (usrLogin) => {
    return (dispatch) => {
      const request = axios.get(`https://api.github.com/users/${usrLogin}`);
      request.then(({data}) => {
          dispatch({type: USER_DETAILS, payload: data});
        }
      ).catch((err)=>{
        console.log(err);
      })
    }
}
