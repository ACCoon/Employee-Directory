import axios from "axios";

function API() {
    return axios.get(
      "https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,picture"
    )
    .then(res => {
      const emps = res.data.results;
      return emps.map(emp => {
        return{
          picture: emp.picture.thumbnail,
          name: `${emp.name.first} ${emp.name.last}`,
          email: emp.email,
          phone: emp.phone
        };
      });
    });
  }
export default API;
