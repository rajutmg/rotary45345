import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./../components/FormInput";
import CTA from "./../components/CTA";
import Prompt from "./../components/Prompt";
// import ConfirmPasswordInput from "./../components/ConfirmPasswordInput";
import Error from "./../components/Error";
import useForm from "./../hooks/useForm";
import useAuth from "./../hooks/useAuth";
import axios from "../api/axios";
export default function Register() {
  const { values, handleChange } = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone_number: "",
      district_id: "",
      ward_id: "",
      municipality_id: "",
      company_id: "",
    },
  });

  //   const { registerUser, error } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    // await registerUser(values);
    await axios.post("/register", handleChange);
  };

  return (
    <div className="page" style={{ justifyContent: "center" }}>
      <div className="inlineForm">
        <h3>Register</h3>
        <div className="inlineForm__notif">
          {/* {error && <Error error={error.messages} />} */}
        </div>
        <form onSubmit={handleRegister}>
          <FormInput
            type={"text"}
            placeholder={"Name"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
          />
          <FormInput
            type={"text"}
            placeholder={"Email"}
            name={"email"}
            value={values.email}
            handleChange={handleChange}
          />

          <FormInput
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            value={values.password}
            handleChange={handleChange}
          />
          <FormInput
            type={"number"}
            placeholder={"Phone_number"}
            name={"phone_number"}
            value={values.phone_number}
            handleChange={handleChange}
          />
          <FormInput
            type={"text"}
            placeholder={"District"}
            name={"district_id"}
            value={values.district_id}
            handleChange={handleChange}
          />
          <FormInput
            type={"text"}
            placeholder={"Ward"}
            name={"ward_id"}
            value={values.ward_id}
            handleChange={handleChange}
          />

          <FormInput
            type={"text"}
            placeholder={"Municipality"}
            name={"municipality_id"}
            value={values.municipality_id}
            handleChange={handleChange}
          />
          <FormInput
            type={"text"}
            placeholder={"company"}
            name={"company_id"}
            value={values.company_id}
            handleChange={handleChange}
          />
          <div className="inlineForm__submit">
            <Link to="/login">
              <Prompt prompt={"Existing account? Log in."} />
            </Link>
            <CTA name={"register"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}
