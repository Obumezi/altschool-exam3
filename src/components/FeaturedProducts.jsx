import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBPagination, MDBPaginationItem, MDBPaginationLink
} from "mdb-react-ui-kit";

export function FeaturedProducts() {
  return (
    <>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        Featured Products
      </h3>

      <MDBContainer fluid className='my-5'>
        <MDBRow>
          <MDBCol md='12' lg='4' className='mb-4 mb-lg-0'>
            <MDBCard>
              <div className='d-flex justify-content-between p-3'>
                <p className='lead mb-0'>Today's Combo Offer</p>
                <div
                  className='bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong'
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className='text-white mb-0 small'>x4</p>
                </div>
              </div>
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
                position='top'
                alt='Laptop'
              />
              <MDBCardBody>
                <div className='d-flex justify-content-between'>
                  <p className='small'>
                    <a href='#!' className='text-muted'>
                      Laptops
                    </a>
                  </p>
                  <p className='small text-danger'>
                    <s>$1099</s>
                  </p>
                </div>

                <div className='d-flex justify-content-between mb-3'>
                  <h5 className='mb-0'>HP Notebook</h5>
                  <h5 className='text-dark mb-0'>$999</h5>
                </div>

                <div class='d-flex justify-content-between mb-2'>
                  <p class='text-muted mb-0'>
                    Available: <span class='fw-bold'>6</span>
                  </p>
                  <div class='ms-auto text-warning'>
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='12' lg='4' className='mb-4 mb-lg-0'>
            <MDBCard>
              <div className='d-flex justify-content-between p-3'>
                <p className='lead mb-0'>Today's Combo Offer</p>
                <div
                  className='bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong'
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className='text-white mb-0 small'>x2</p>
                </div>
              </div>
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp'
                position='top'
                alt='Laptop'
              />
              <MDBCardBody>
                <div className='d-flex justify-content-between'>
                  <p className='small'>
                    <a href='#!' className='text-muted'>
                      Laptops
                    </a>
                  </p>
                  <p className='small text-danger'>
                    <s>$1199</s>
                  </p>
                </div>

                <div className='d-flex justify-content-between mb-3'>
                  <h5 className='mb-0'>HP Envy</h5>
                  <h5 className='text-dark mb-0'>$1099</h5>
                </div>

                <div class='d-flex justify-content-between mb-2'>
                  <p class='text-muted mb-0'>
                    Available: <span class='fw-bold'>7</span>
                  </p>
                  <div class='ms-auto text-warning'>
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon far icon='star' />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='12' lg='4' className='mb-4 mb-lg-0'>
            <MDBCard>
              <div className='d-flex justify-content-between p-3'>
                <p className='lead mb-0'>Today's Combo Offer</p>
                <div
                  className='bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong'
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className='text-white mb-0 small'>x3</p>
                </div>
              </div>
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp'
                position='top'
                alt='Gaming Laptop'
              />
              <MDBCardBody>
                <div className='d-flex justify-content-between'>
                  <p className='small'>
                    <a href='#!' className='text-muted'>
                      Laptops
                    </a>
                  </p>
                  <p className='small text-danger'>
                    <s>$1399</s>
                  </p>
                </div>

                <div className='d-flex justify-content-between mb-3'>
                  <h5 className='mb-0'>Toshiba B77</h5>
                  <h5 className='text-dark mb-0'>$1299</h5>
                </div>

                <div class='d-flex justify-content-between mb-2'>
                  <p class='text-muted mb-0'>
                    Available: <span class='fw-bold'>5</span>
                  </p>
                  <div class='ms-auto text-warning'>
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star' />
                    <MDBIcon fas icon='star-half-alt' />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <nav aria-label='' style={{display:'flex', justifyContent:'center', paddingBottom:'20px'}}>
        <MDBPagination className='mb-0'>
          <MDBPaginationItem disabled>
            <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
              Previous
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem active aria-current='page'>
            <MDBPaginationLink href='#'>
              2 <span className='visually-hidden'>(current)</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>Next</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </nav>
    </>
  );
}
