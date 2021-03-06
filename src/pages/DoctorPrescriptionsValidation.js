import fb from '../services/firebase';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../styles/DoctorPrescriptions.css';
import '../styles/DoctorPrescriptionsValidation.css';

const PatientPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const getAllPrescriptions = fb.firestore().collection('prescriptions').onSnapshot(s => {
      setPrescriptions(s.docs.map(prescription => {
        console.log({ id: prescription.id, ...prescription.data() });
        return { id: prescription.id, ...prescription.data() };
      }));
    });

    return () => getAllPrescriptions();
  }, []);

  return (
    <>
      <main id='seeprescription-main-container' className='main-container'>
        <div className='validation-animation-container'>
          <div className='validation-animation' />
          <p>Prescription created</p>
        </div>
        
        <Link to='/doctor/new-prescription' >
          <div className='create-new-button'>
            <span className='add-icon' />Create new prescription
          </div>
        </Link>
        <div className='patient-prescriptions-container'>
          <h1 className='title-with-line'>Prescriptions</h1>
          <div className={prescriptions === undefined ? 'loader' : 'loader invisible'} />
          {prescriptions.map(p => {
            return (
              <Link to={`/doctor/prescriptions/${p.id}`}>
                <div className='patient-prescription-container'>
                  <div className='prescription-status'>
                    <div className={`prescription-status-icon ${p.status}`} />
                  </div>
                  <div className='prescription-delivery-date'>
                    <p>{p.status === 'canceled' ? `Canceled on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}` : `Delivered on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}`}</p>
                  </div>
                  <div className='prescription-doctor-name'>
                    <p>{p.patient.civility} {p.patient.firstname} {p.patient.lastname}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default PatientPrescriptions;
