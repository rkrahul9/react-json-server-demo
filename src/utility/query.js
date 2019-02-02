import axios from "axios";
const baseUrl = "http://localhost:4000";

const get = async (url) => {
  try{
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data; 
  }
  catch(err){
    console.log(err);
  }
}

const put = async (url,user) => {
  try{
    const response = await axios.put(`${baseUrl}${url}`,user);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}

const create = async (url,user) => {
  try{
    const response = await axios.post(`${baseUrl}${url}`,user);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
}
export default { get, put, create }