import{BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
function App(){
  return (
    <BrowserRouter>
       <Routes>
            <Route path ="/" element = {<Home />}/>
            <Route path="*" element={<NotFound />} />
            <Route path = "/tasks" element = { <ProtectedRoute><Tasks /></ProtectedRoute>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            <Route path = "/counter" element = {<Counter/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
       </Routes>
    </BrowserRouter>
  );
}
    

export default App;
