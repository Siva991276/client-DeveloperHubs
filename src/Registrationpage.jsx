import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Registration.css";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Registrationpage() {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [skills, setskills] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  let navigate = useNavigate();
  const [data, setdata] = useState([]);
  console.log(fullname);

  const useData = {
    fullname: fullname,
    email: email,
    mobile: mobile,
    skills: skills,
    password: password,
    confirmpassword: confirmpassword,
  };
  console.log(useData);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      fullname &&
      email &&
      mobile &&
      skills &&
      password &&
      confirmpassword !== ""
    ) {
      axios
        .post("http://localhost:4005/register", useData)
        .then((response) => {
          setdata(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Registration Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {
              navigate("/LoginPage");
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Form className="form12" onSubmit={onSubmitForm}>
        <Form.Group
          className="mb-3 text-start"
          controlId="formBasicEmail"
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
        >
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="type"
            placeholder="Enter Full name"
            className="w-25"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 text-start"
          controlId="formBasicEmail"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="w-25"
          />
          <Form.Text className="text-muted" style={{ fontSize: "12px" }}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 text-start"
          controlId="formBasicEmail"
          onChange={(e) => setmobile(e.target.value)}
          value={mobile}
        >
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="type"
            placeholder="Enter Full name"
            className="w-25"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 text-start"
          controlId="formBasicEmail"
          onChange={(e) => setskills(e.target.value)}
          value={skills}
        >
          <Form.Label>Skills</Form.Label>
          <Form.Control
            type="type"
            placeholder="Enter Full name"
            className="w-25"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 text-start"
          controlId="formBasicPassword"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="w-25"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 text-start"
          controlId="formBasicPassword"
          onChange={(e) => setconfirmpassword(e.target.value)}
          value={confirmpassword}
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=" Confirm Password"
            className="w-25"
          />
        </Form.Group>
        <Button variant="primary text-start" type="submit" className="button21">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Registrationpage;

// {
//   "fullname": "Bhavana",
//   "email": "bhavana@gmail.com",
//   "mobile": 9632514521,
//   "skills": "java",
//   "password": "bhavana123",
//   "confirmpassword": "bhavana123"
// }
