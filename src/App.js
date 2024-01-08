import './App.css';
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import CreateRestaurantOld from "./pages/CreateRestaurant-old";
import UserContext  from "./contexts/user-context";
import React, {useState} from "react";
import Login from "./pages/Login";
import System from "./pages/System";
import Employees from "./pages/Employees";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Restaurant from "./pages/Restaurant";
import CreateRestaurant from "./pages/CreateRestaurant";

function App() {
    const [user, setUser] = useState(null);

    return (
      <UserContext.Provider value={[user, setUser]}>
          <div className="App">
              <div className="flex h-screen">
                  <div id="docs-sidebar"
                       className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-20 bg-[#DB504A] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0">
                      <Sidebar/>
                  </div>
                  <div className="flex-1 ml-20 ">
                      <Routes>
                          <Route path="/" element={<Register/>}/>
                          <Route path="/create-old" element={<CreateRestaurantOld/>}/>
                          <Route path="/create" element={<CreateRestaurant/>}/>
                          <Route path="*" element={<h1>Not Found</h1>}/>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/dashboard" element={<Dashboard/>}/>
                          <Route path="/employees" element={<Employees/>}/>
                          <Route path="/restaurants" element={<Restaurant/>}/>
                      </Routes>
                  </div>
              </div>
          </div>
      </UserContext.Provider>
    );
}

export default App;
