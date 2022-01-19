import React from 'react';
import { Routes, Route } from 'react-router';
import Secret from './Secret';

function Dashboard() {
  return <div>
    <Routes>
      <Route path='/secret' element={<Secret />}/>
    </Routes>
  </div>;
}

export default Dashboard;
