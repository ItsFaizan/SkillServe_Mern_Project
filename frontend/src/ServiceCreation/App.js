import React from 'react';
import {
  MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBIcon, MDBCheckbox, MDBRow, MDBCol, MDBInput
}
from 'mdb-react-ui-kit';
import logo from './servcreation.jpg';

function App() {
  return (
    <div>
   <MDBContainer fluid className='p-4'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
      The best offer <br />
      <span className="text-primary">for your business</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
    Are you passionate about sharing your skills and expertise with others? It's time to turn your knowledge into a valuable service! By creating your own service on this platform, you open the doors to a world of opportunities.

    <br></br><br></br>Not only can you showcase your unique offerings to a wide audience, but you also have the chance to make a positive impact on people's lives. Whether you're a talented designer, a skilled writer, a knowledgeable consultant, or an experienced coach, creating a service allows you to connect with those who can benefit from your expertise.

    <br></br><br></br>It's a win-win situation where you can pursue your passion, earn income, and contribute to the growth and development of others. So, take that leap of faith, unleash your potential, and embark on an exciting journey of creating a service that will make a difference!
    </p>

  </MDBCol>

  <MDBCol md='6'>

    <MDBCard className='my-5'>
      <MDBCardBody className='p-5'>

        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

        <MDBBtn className='w-100 mb-4' size='md'>Submit</MDBBtn>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>
</div>

  );
}

export default App;
