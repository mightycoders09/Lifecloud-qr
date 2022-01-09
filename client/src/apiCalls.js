import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post('/api/auth/login', userCredential);
    console.log(res, 'res')
    let username = `${res.data.firstName} ${res.data.lastName}`
    dispatch({ type: 'LOGIN_SUCCESS', payload: username });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
