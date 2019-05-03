import axios from "axios";

export default {

  getDatas: function(){
    return axios.get("/api/data");
  },
  getData: function(id){
    return axios.get("/api/data/" + id);
  },
  deleteData: function(id){
    return axios.delete("/api/data/" + id);
  },
  saveData: function(data){
    return axios.post("/api/data", data);
  },
  search: function(query){
    return axios.get("/api/search/" + query);
  }
};
