import axios from "axios";
class AtmosFericServices {
  constructor() {
    if (AtmosFericServices.instance) {
      return AtmosFericServices.instance = this;
    }
    return AtmosFericServices.instance;
  }
  API = process.env.REACT_APP_BASE_API;

  getAtmosfericsConditions = async (page, pageSize) => {
    try{
      const response = await axios.get(`${this.API}?pageSize=${pageSize}&page=${page}`);
      return response;
    }catch(error){
      return error;
    }
  }

}
export default AtmosFericServices;