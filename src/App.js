import './assets/css/bootstrap.css'
import './assets/css/bootstrap-responsive.css'
import './assets/css/docs.css'
import './assets/css/prettyPhoto.css'
import './assets/js/google-code-prettify/prettify.css'
import './assets/css/flexslider.css'
import './assets/css/sequence.css'
import './assets/css/style.css'
import './assets/color/default.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Error from './components/Error'
import Donate from './components/Donate'
import Education from './components/Education'
import Coe from './components/Coe'
import Tech from './components/Tech'
import Incubation from './components/Incubation'



function App() {
  return (
    <>
       <Router>
            <Routes >
              <Route exact path="/" element={<Home />} />
              <Route exact path="/donate" element={<Donate />} />
              <Route exact path="/contact" element={<ContactUs/>} />
              <Route exact path="/education" element={<Education/>} />
              <Route exact path="/coe" element={<Coe/>} />
              <Route exact path="/technology" element={<Tech/>} />
              <Route exact path="/incubation-space" element={<Incubation/>} />
              <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
