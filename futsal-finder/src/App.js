import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Pages/Header';
import LoginPage from './Pages/LoginPage';
import SignupForm from "./Pages/SignupForm";
import Dashboard from "./Pages/Dashboard";
import Fcourt from "./Pages/court";
import Booking from "./Pages/Booking";
import OwnerPage from "./Pages/OwnerPage";
import Home from "./Pages/Home";
import Schedule from "./Pages/Schedule";
import PostStatus from "./Pages/PostStatus";
function App() {
  
  return (
<>
<Header/>
< BrowserRouter> 
       <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/" element={<Home />} />
       <Route path="/court" element={<Fcourt />} />
       <Route path="/booking" element={<Booking />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/signup" element={<SignupForm />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/ownerpage" element={<OwnerPage />} />
       <Route path="/ownerpost" element={<PostStatus />} />

       </Routes>
      </BrowserRouter>
</>
  );
}

export default App;