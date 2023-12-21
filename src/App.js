import './App.css';
import Register from "./pages/Register";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import CreateRestaurant from "./pages/CreateRestaurant";
import UserContext  from "./user-context";
import {useState} from "react";
import Login from "./pages/Login";

function App() {
    const [user, setUser] = useState(null);

    return (
      <UserContext.Provider value={[user, setUser]}>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Register />} />
                  <Route path="/create" element={<CreateRestaurant />} />
                  <Route path="*" element={<h1>Not Found</h1>} />
                  <Route path="/login" element={<Login />}/>
              </Routes>
          </div>
      </UserContext.Provider>
  );
}

export default App;
