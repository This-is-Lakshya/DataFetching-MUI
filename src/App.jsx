import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import NextPage from './components/NextPage';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <ToastContainer 
    position='top-center'
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <Router>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/next' element={<NextPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
