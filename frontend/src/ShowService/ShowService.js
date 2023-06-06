import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTags } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { MDBCard, MDBCardBody, MDBContainer, MDBCardText, MDBTypography, MDBCol,MDBRow } from 'mdb-react-ui-kit';
import { faClipboard, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';

export default function ShowService() {

  const [cookies] = useCookies(['accessToken']);

        const [selectedFilters, setSelectedFilters] = useState({
          title: false,
          description: false,
          price: false,
          tags: false,
        });

        

        const[result,setresult]=useState([]);
      
        const toggleFilter = (filter) => {
          setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: !prevFilters[filter],
          }));
        };

        const handleSearch = async () => {
            try {
              const searchInput = document.getElementById('search-input').value;
              const filters = Object.keys(selectedFilters).filter((key) => selectedFilters[key]);
              console.log(filters);
              const query = {
                input: searchInput,
                filters: filters,
              };
        
              const response = await fetch('/service/findservice', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${cookies.accessToken}`
                  
                },
                body: JSON.stringify(query),
              });
        
              if (!response.ok) {
                throw new Error('Search request failed');
              }
        
              const searchResults = await response.json();
              setresult(searchResults);
        
              
            } catch (error) {
              toast.error(error.message);
              
            }
          };



          const CreateOrder = async () => {
            
            
          }
        
          return (
            <div>
            <div className="d-flex flex-column align-items-center">
                <br />< br /><br />
                <div className="d-flex justify-content-center align-items-center mb-4">
        <MDBInput id="search-input" type="text" outline placeholder="Search..." className="me-2" />
        <MDBBtn color="dark" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </MDBBtn>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <MDBBtn
          className={`btn btn-sm ${selectedFilters.title ? 'btn-dark' : 'btn-light'}`}
          onClick={() => toggleFilter('title')}
        >
          Title
        </MDBBtn>
        <span className="mx-2"></span>
        <MDBBtn
          className={`btn btn-sm ${selectedFilters.description ? 'btn-dark' : 'btn-light'}`}
          onClick={() => toggleFilter('description')}
        >
          Description
        </MDBBtn>
        <span className="mx-2"></span>
        <MDBBtn
          className={`btn btn-sm ${selectedFilters.price ? 'btn-dark' : 'btn-light'}`}
          onClick={() => toggleFilter('price')}
        >
          Price
        </MDBBtn>
        <span className="mx-2"></span>
        <MDBBtn
          className={`btn btn-sm ${selectedFilters.tags ? 'btn-dark' : 'btn-light'}`}
          onClick={() => toggleFilter('tags')}
        >
          <FontAwesomeIcon icon={faTags} />
        </MDBBtn>
      </div>
      </div>

      {result.length > 0 ? (
        <div>
          <section className="vh-100" style={{ backgroundColor: '#eee' , width: '100%'}}>
            <MDBContainer className="py-5 h-100">
              {result.map((servicedata) => (
                <MDBRow
                  className="justify-content-center align-items-center h-100"
                  key={servicedata._id}
                >
                  <MDBCol xl="10">
                  <MDBCard className="mb-5" style={{ borderRadius: '15px', width: '100%' }}>
                      <MDBCardBody className="p-4">
                        <MDBTypography className='text-center my-4' tag='h3'>{servicedata.title}</MDBTypography>
                        <MDBCardText className="medium">
                          <MDBRow className='my-4'>
                            <MDBCol md='1' className="d-flex align-items-center justify-content-center">
                              <FontAwesomeIcon icon={faClipboard} className="fa-xl" />
                            </MDBCol>
                            <MDBCol md='9'>
                              {servicedata.description}
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className='my-4'>
                            <MDBCol md='1' className="d-flex align-items-center justify-content-center">
                              <FontAwesomeIcon icon={faMoneyBill} className="fa-xl" />
                            </MDBCol>
                            <MDBCol md='9'>
                              {servicedata.price}
                            </MDBCol>
                          </MDBRow>
                          <br></br>
                          <MDBRow className='my-4'>
                            <MDBCol md='2' className="d-flex align-items-center justify-content-center">

                            </MDBCol>
                            <MDBCol md='8'>
                              <MDBBtn id='btnfont' color='dark' className='w-100 mb-4' onClick={CreateOrder}>Hire Service</MDBBtn>
                            </MDBCol>
                          </MDBRow>

                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              ))}
            </MDBContainer>
          </section>
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>No search results found.</p>
        )}


    </div>
      
     );
    }