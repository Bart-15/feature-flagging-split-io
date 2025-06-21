import { v4 as uuidv4 } from 'uuid';
export const getUserKey = () => {
  let userKey = localStorage.getItem('user_key');
  if (!userKey) {
    userKey = uuidv4();
    localStorage.setItem('user_key', userKey);
  }
  return userKey;
};
