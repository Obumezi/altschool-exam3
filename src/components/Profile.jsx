import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div>Welcome {auth.user}</div>
      {/*  <button onClick={handleLogout}>Logout</button> */}

      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className='py-5'>
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg='4'>
              <MDBCard className='mb-4'>
                <MDBCardBody className='text-center'>
                  <MDBCardImage
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                    alt='avatar'
                    className='rounded-circle'
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className='text-muted mb-1'>Prime Account</p>
                  <p className='text-muted mb-4'>Lagos, Nigeria</p>
                  <div className='d-flex justify-content-center mb-2'>
                    <MDBBtn outline className='ms-1' onClick={handleLogout}>
                      Logut
                    </MDBBtn>
                    <MDBBtn className='ms-1'>Inbox</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg='8'>
              <MDBCard className='mb-4'>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm='3'>
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm='9'>
                      <MDBCardText className='text-muted'>
                        {auth.user}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm='3'>
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm='9'>
                      <MDBCardText className='text-muted'>
                        example@example.com
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm='3'>
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm='9'>
                      <MDBCardText className='text-muted'>
                        (097) 234-5678
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm='3'>
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm='9'>
                      <MDBCardText className='text-muted'>
                        (098) 765-4321
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm='3'>
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm='9'>
                      <MDBCardText className='text-muted'>
                        Bay Area, San Francisco, CA
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md='6'></MDBCol>

                <MDBCol md='6'>
                  <MDBCard className='mb-4 mb-md-0'></MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};
