import React from 'react'
import '../App.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      DashBoard Page
      <nav>
        <Link to="courses">Course</Link> <br />
        <Link to="reports">Reports</Link>  <br />
        <Link to="mocktest">Mock Test</Link> <br />
      </nav>
      <Outlet/>
    </div>
  )
}

export default Dashboard
