import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectpath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectpath, { replace: true });

    navigate("/", { replace: true });
  };
  return (
    <>
      <label>
        {/*  <input type='text' onChange={(e) => setUser(e.target.value)}>


                </input> */}
      </label>

      <MDBContainer className='p-3 my-5 d-flex flex-column w-50'>
        <MDBInput
          wrapperClass='mb-4'
          label='UserName'
          id='form1'
          type='email'
          onChange={(e) => setUser(e.target.value)}
        />

        <div className='d-flex justify-content-between mx-3 mb-4'>
          <MDBCheckbox
            name='flexCheck'
            value=''
            id='flexCheckDefault'
            label='Remember me'
          />
          <a href='!#'>Forgot password?</a>
        </div>

        <MDBBtn className='mb-4' onClick={handleLogin}>
          Sign in
        </MDBBtn>
      </MDBContainer>
      {/*  <button onClick={handleLogin}>Login</button> */}
    </>
  );
}
