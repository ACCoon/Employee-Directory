import axios from "axios";

export default {
  searchTerms: function() {
    return axios.get(
      "https://randomuser.me/api/?result=25&nat=us"
    );
  }
};
