import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateUserPage from "./pages/createUser/CreateUserPage";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<CreateUserPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;

