import React, {useEffect, createContext} from 'react';
import axios from "axios";
import userContext from "../../contexts/user-context";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();
    const [user, setUser] = React.useContext(userContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChanges = (e) => {
         if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: " + email);
        console.log("Password: " + password);
        axios.post("http://localhost:8003/api/users/login", {
                email: email,
                password: password
              }).then((res) => {
                console.log(res.data.user.firstName);
                setUser({firstName: res.data.user.firstName, lastName: res.data.user.lastName ,email: email, password: password });
                navigate("/create");
        }).catch((err) => {
                console.log(err);
              });
           }

    return (
        <div className="">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com" value={email} onChange={handleChanges}/>
                </div>
                <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           value={password} onChange={handleChanges}/>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    SIGN IN
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account?
                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Create one</a>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;