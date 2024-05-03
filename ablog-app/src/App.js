import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProtectedRoute from "./utils/ProtectedRoutes";

import Home from "./components/Home";
import Authentication from "./components/Authentication";
import UnauthenticatedHome from './components/UnauthenticatedHome';
import Navbar from './components/Navbar';
import NewBlog from './components/NewBlog';
import MyBlogs from './components/MyBlogs';
import Drafts from './components/Drafts';
import Trash from './components/Trash';
import Personalize from './components/Personalize';



function App() {

  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<Home />}>
            <Route index element={<Navbar />} />  
            <Route path="new-blog" element={<NewBlog />} />
            <Route path="my-blogs" element={<MyBlogs />} />
            <Route path="drafts" element={<Drafts />} />
            <Route path="trash" element={<Trash />} />
            <Route path="personalize" element={<Personalize />} />
          </Route>
        </Route>
        {/* Authentication route */}
        <Route path="/authentication" element={<UnauthenticatedHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
