import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faMoneyBill, faHashtag, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MDBCard, MDBCardBody, MDBContainer, MDBCardText, MDBTypography, MDBCol,MDBRow, MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './ServiceProfile.css';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';

export default function ServiceUpdation() {

    const [isOpen, setisOpen] = React.useState(false);
    const [servicedata, setServiceData] = React.useState({});

    const gotoUpdate = async() => 
    {
        <Link to={{
            pathname: '/service/profileupdation',
            state: {
                title: servicedata.service.title,
                description: servicedata.service.description,
                price: servicedata.service.price,
                tags: servicedata.service.tags
            }
        }} />

    }

    const handledeletion = async() => {

        setisOpen(false);

        await fetch(`/deleteservice`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }.then(response => response.json())
        .then(data => {
            toast.success(data.message);
        })
        .catch((error) => {
            toast.error(error.message);
        }));

    }

    React.useEffect(() => {
        (async() => {
            await fetch(`/service/getservice`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
            }.then(response => response.json())
            .then(data => {
                setServiceData(data);
            })
            .catch((error) => {
                toast.error(error.message);
    }));
        })();
    }, []);



    return(
        <div>
            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol xl="10">
                        <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                        <MDBCardBody className="p-4">
                            <MDBTypography className='text-center my-4' tag='h3'>{servicedata.service.title}</MDBTypography>
                            <MDBCardText className="medium">
                            <MDBRow className='my-4'>
                                <MDBCol md='1' className="d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faClipboard} className="fa-xl" />
                                </MDBCol>
                                <MDBCol md='9'>
                                {servicedata.service.description}
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='my-4'>
                                <MDBCol md='1' className="d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faMoneyBill} className="fa-xl" />
                                </MDBCol>
                                <MDBCol md='9'>
                                {servicedata.service.price}
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='my-4'>
                                <MDBCol md='1' className="d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faHashtag} className="fa-xl" />
                                </MDBCol>
                                <MDBCol md='9'>
                                    {servicedata.service.tags.map((tag) => {
                                        return(
                                            <MDBBadge id='badge-large' color='dark' className='ms-2'>{tag}</MDBBadge>
                                        )
                                    })}
                    
                                    {/* // <MDBBadge id='badge-large' color='dark' className='ms-2' >React</MDBBadge>
                                    // <MDBBadge id='badge-large' color='dark' className='ms-2'>Web Development</MDBBadge>
                                    // <MDBBadge id='badge-large' color='dark' className='ms-2'>MERN Stack</MDBBadge>
                                    // <MDBBadge id='badge-large' color='dark' className='ms-2'>Web Services</MDBBadge> */}
                                </MDBCol>
                            </MDBRow><br></br>
                            <MDBRow className='my-4'>
                                <MDBCol md='2' className="d-flex align-items-center justify-content-center">
                                    
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBBtn id='btnfont' color='dark' className='w-100 mb-4' onClick={gotoUpdate}>Update Service</MDBBtn>
                                    <MDBBtn outline id='btnfont' color='danger' className='w-100 mb-4' onClick={() => setisOpen(true)}>Delete Service</MDBBtn>
                                </MDBCol>
                            </MDBRow>

                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>    
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            { <div className={`confirmation-alert ${isOpen ? 'open' : ''}`}>
                <div className="confirmation-alert-overlay"></div>
                <div className="confirmation-alert-content">
                    <div className="confirmation-alert-header">
                    <FontAwesomeIcon icon={faCheckCircle} className="confirmation-alert-icon" />
                    <h2 className="confirmation-alert-title">Confirmation</h2>
                    </div>
                    <div className="confirmation-alert-body">
                    <p>Do you want to proceed with deleting this service?</p>
                    </div>
                    <div className="confirmation-alert-footer">
                    <button className="confirmation-alert-button confirmation-alert-confirm" onClick={handledeletion}>
                        Yes
                    </button>
                    <button className="confirmation-alert-button confirmation-alert-cancel" onClick={() => setisOpen(false)}>
                        No
                    </button>
                    </div>
                </div>
                </div>
                }

        </div>

        
    );
}