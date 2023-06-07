import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import he from '../assets/27470349_7309670.jpg';
import { useCookies } from 'react-cookie';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit';

export default function Profile() {
  const [customerinfo, setCustomerinfo] = useState(null);
  const [cookies] = useCookies(['accessToken']);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/service/getuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        });
        const data = await response.json();
        setCustomerinfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, [cookies.accessToken]);

  return (
    <div>
        <br/><br/><br/>
      {customerinfo === null ? (
        <p>Loading...</p>
      ) : (
        <section style={{ backgroundColor: '#FBFBFB' }}>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol md="6" className="offset-md-3">
                <MDBCard className="text-center">
                  <MDBCardBody>
                    <MDBCardImage
                      src={he}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px', marginLeft: '265px' }}
                      fluid
                    />
                    <h5 className="mt-3">{customerinfo.user.username}</h5>
                    <p className="text-muted mb-4">{customerinfo.user.email}</p>
                    <MDBTable responsive>
                      <MDBTableHead>
                        <tr>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Revenue</th>
                          <th>Service Deliveries</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>{customerinfo.user.username}</td>
                          <td>{customerinfo.user.email}</td>
                          <td>{customerinfo.user.revenue}</td>
                          <td>{customerinfo.user.service_deliveries}</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                    <div className="d-flex justify-content-center mt-4">
                      <Link to="/editprofile" className="btn btn-primary me-2" state={{ from: customerinfo }}>
                        Edit
                      </Link>
                      <button className="btn btn-secondary">Message</button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
  </div>
 );
}