import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

export default function EditProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state;
  const [pusername, setpusername] = useState(from.user.username);
  const [pemail, setpemail] = useState(from.user.email);
  const [prevenue, setprevenue] = useState(from.user.revenue);
  const [pservice, setpservice] = useState(from.user.service_deliveries);
  const [user_id] = useState(from.user._id);

  const [cookies] = useCookies(['accessToken']);

  const validateInput = async (event) => {
    event.preventDefault();

    const username = pusername;
    const email = pemail;
    const revenue = prevenue;
    const service_deliveries = pservice;

    await fetch(`/service/updateuser`, {
      method: 'PUT',
      body: JSON.stringify({ username, email, revenue, service_deliveries }),
      headers: { 'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies.accessToken}` },
    });

    console.log('Updated');
    navigate('/profile');
    
  };

  return (
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
                <h5 className="mt-3">{pusername}</h5>
                <p className="text-muted mb-4">{pemail}</p>
                <MDBTable responsive className="text-center">
                  <MDBTableHead >
                    <tr>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Revenue</th>
                      <th>Service </th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>
                        <input
                          type="username"
                          value={pusername}
                          onChange={(e) => setpusername(e.target.value)}
                          style={{ textAlign: 'center' }}
                        />
                      </td>
                      <td>
                        <input
                          type="email"
                          value={pemail}
                          onChange={(e) => setpemail(e.target.value)}
                          style={{ textAlign: 'center' }}
                        />
                      </td>
                      <td>
                        <input
                          type="revenue"
                          value={prevenue}
                          onChange={(e) => setprevenue(e.target.value)}
                          style={{ textAlign: 'center' }}
                        />
                      </td>
                      <td>
                        <input
                          type="service_deliveries"
                          value={pservice}
                          onChange={(e) => setpservice(e.target.value)}
                          style={{ textAlign: 'center' }}
                        />
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
                <div className="d-flex justify-content-center mt-4">
                  <Link to="#" className="btn btn-primary me-2" onClick={validateInput}>Update</Link>
                  <button className="btn btn-secondary">Message</button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
 );
}