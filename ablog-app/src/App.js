import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProtectedRoute from "./utils/ProtectedRoutes";

import Home from "./components/Home";
import Authentication from "./components/Authentication";


function App() {

  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route element={<ProtectedRoute/>}>
          <Route path='/' element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
        </Route>
        {/* Authentication route */}
        <Route path="/authentication" element={<Authentication/>}/>
      </Routes>
    </Router>
  );
}

export default App;
