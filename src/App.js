import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Employee from './Employee';
import Assignment2 from './Assignmnet2';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/assignment2" element={<Assignment2 />} />
      </Routes>
    </Router>
  );
}