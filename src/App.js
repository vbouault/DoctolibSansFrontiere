import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import LoginPatient from './pages/LoginPatient';
import LoginDoctor from './pages/LoginDoctor';
import Header from './components/Header';
import Footer from './components/Footer';
import DoctorPrescriptions from './pages/DoctorPrescriptions';
import NewPrescription from './pages/NewPrescription';
import Agenda from './pages/Agenda';
import PatientPrescriptions from './pages/PatientPrescriptions';
import Connection from './pages/Connection';
import SinglePrescription from './pages/SinglePrescription';
import SingleDoctorPrescription from './pages/SingleDoctorPrescription';
import './fonts/gilroy.css';


function App () {
/*   const [login, setLogin] = useState('') */

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/connection' component={Connection} />
          <Route exact path='/doctor/prescriptions' component={DoctorPrescriptions} />
          <Route exact path='/doctor/new-prescription' component={NewPrescription} />
          <Route exact path='/user/patient' component={LoginPatient} />
          <Route exact path='/user/doctor' component={LoginDoctor} />
          <Route exact path='/patient/agenda' component={Agenda} />
          <Route exact path='/patient/prescriptions' component={PatientPrescriptions} />
          <Route exact path='/patient/prescriptions/:prescriptionId' component={SinglePrescription} />
          <Route exact path='/single-doctor-prescription' component={SingleDoctorPrescription} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
