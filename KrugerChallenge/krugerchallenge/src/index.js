import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Administrator from "./components/administrator/Administrator";
import Employee from "./components/employee/Employee";
import EmployeeRegistration from "./components/employeeRegistration/EmployeeRegistration";
import ListEmployees from "./components/listEmployees/ListEmployees";
import './index.css';

render(
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee/>}/>
        <Route path="empleado" element={<Employee />} />
        <Route path="administrador" element={<Administrator />} >
            <Route path="registroempleado" element={<EmployeeRegistration />} />
            <Route path="listaempleados" element={<ListEmployees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
