import React from 'react';
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
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

const Developer = () => {

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="ProfilePhoto.JPG"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px', height: '220px' }}
                  fluid />
                <p className="text-muted mb-1">MS Computer Science</p>
                <p className="text-muted mb-4">Brandeis University, Waltham, MA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Yifei Zhou</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">yfzhou23@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Waltham, MA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );

    // return (

    //     // <div className='main-content'>
    //     //     <Card style={{ width: '36rem', height: '50rem', margin: '10px', backgroundColor: 'white', border: '1px solid white' }}>
    //     //         <div className="d-flex justify-content-center align-items-center">
    //     //           <Card.Img variant="top" src="ProfilePhoto.JPG" alt="Yifei Zhou" style={{ width: '34rem', height: '36rem', marginBottom: '10px' }} />
    //     //         </div>
    //     //         <Card.Body>
    //     //           <Card.Title style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Developer: Yifei Zhou</Card.Title>
    //     //           <Card.Text>
    //     //             MS Computer Science Student at Brandeis University
    //     //           </Card.Text>
    //     //         </Card.Body>
    //     //       </Card>
    //     // </div>

    //   // <>
    //   //   <div className="absolute top-30 left-0 z-0 h-[100vh] w-screen">
    //   //     <img
    //   //       src="bw-map.jpeg"
    //   //       alt="world map"
    //   //       className="w-full h-full sm:block hidden object-cover"
    //   //     />
    //   //   </div>
    //   //   <div className="absolute top-30 left-0 z-0 h-[100vh] w-screen">
    //   //     <img
    //   //       src="world-map.png"
    //   //       alt="world map"
    //   //       className="w-full h-full sm:hidden block object-cover"
    //   //     />
    //   //   </div>
    //   //   <section
    //   //     className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
    //   //     sm:bg-hero bg-hero-mobile overflow-hidden">
    //   //     <div
    //   //       className={`absolute inset-0 sm:top-[250px] top-[150px] 
    //   //       lg:top-[150px] xl:top-[250px] ${developerStyles.paddingX} 
    //   //       max-w-7xl mx-auto flex flex-row items-start
    //   //       justify-between gap-3`}>
    //   //       <div className="flex flex-col justify-center items-center mt-5 ml-3">
    //   //         <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
    //   //         <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
    //   //       </div>

    //   //       <div>
    //   //         <h1
    //   //           className={`${developerStyles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
    //   //           Hi, I'm{' '}
    //   //           <span
    //   //             className="sm:text-battleGray sm:text-[90px] 
    //   //             text-eerieBlack text-[50px] font-mova
    //   //             font-extrabold uppercase whitespace-nowrap">
    //   //             Yifei Zhou
    //   //           </span>
    //   //         </h1>
    //   //         <p className={`${developerStyles.heroSubText} mt-2 text-eerieBlack`}>
    //   //           MS Computer Science Student
    //   //           Brandeis University
    //   //           <br className="sm:block hidden" />
    //   //           Contact: yfzhou23@gmail.com
    //   //         </p>
    //   //       </div>
    //   //       <div
    //   //         className="w-screen flex flex-col items-start 
    //   //         justify-center sm:-ml-[3rem] xxs:mt-4"></div>

    //   //       <div></div>
    //   //     </div>
    //   //   </section>
    //   // </>
    // );
};

export default Developer;
