import { SignInButton, UserButton } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function Dashboard() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the Transportation LLM Service</h1>
      <p>Your one-stop solution for all transportation-related information and services.</p>
      <p>Our chatbot can assist you with:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Driving Licence</li>
        <li>Registration</li>
        <li>Permits</li>
        <li>Taxes and Fees</li>
        <li>Acts and Rules</li>
        <li>Various Forms and Procedures</li>
      </ul>

        <SignInButton/>
    </div>
  );
}

export default Dashboard;
