import axios from 'axios';
const USER_LIST = "USER_LIST";

export const getUsers = (nextPage) => {
    return (dispatch) => {
      const request = axios.get(`https://api.github.com/users?per_page=5&since=${nextPage}`);
      request.then(({data}) => {
          dispatch({type: USER_LIST, payload: data});
        }
      ).catch((err)=>{
        console.log(err);
      })
    }
}
