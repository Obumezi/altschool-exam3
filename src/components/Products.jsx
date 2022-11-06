import { Link, Outlet } from "react-router-dom";

import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Products() {
  return (
    <>
      <div>
        <MDBInputGroup
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <MDBInput label='Search' />
          <MDBBtn rippleColor='dark'>
            <MDBIcon icon='search' />
          </MDBBtn>
        </MDBInputGroup>
      </div>

      <nav>
        {/* Do not include the slash for nested routes */}
        <Link to='FeaturedProducts' style={{ fontSize: "20px" }}>
          Featured
        </Link>
        <Link to='NewProduct' style={{ fontSize: "20px" }}>
          New Products
        </Link>
      </nav>

      {/* tells react where to render the child components */}
      <Outlet />
    </>
  );
}
