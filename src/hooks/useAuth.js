import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "../api/axios";
import { UserContext } from "./UserContext";

export default function useAuth() {
  let history = useHistory();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  //set user
  const setUserContext = async () => {
    return await axios
      .get("/user")
      .then((res) => {
        setUser(res.data.currentUser);
        history.push("/home");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };
  const retrieveContacts = async () => {
    const response = await axios.get("/myprofile");
    console.log(response.data);
    return response.data;
  };
  retrieveContacts();

  //register user
  const registerUser = async (data) => {
    console.log(data);
    const {
      name,
      email,
      password,
      phone_number,
      district_id,
      ward_id,
      municipality_id,
      company_id,
    } = data;
    return axios
      .post(`/register`, {
        name,
        email,
        password,
        phone_number,
        district_id,
        ward_id,
        municipality_id,
        company_id,
      })
      .then(async () => {
        await setUserContext();
      })
      .catch((err) => {
        return setError(err.response.data);
      });
  };

  //login user
  const loginUser = async (data) => {
    const { username, password } = data;
    return axios
      .post("/login", {
        username,
        password,
      })
      .then(async () => {
        await setUserContext();
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}
