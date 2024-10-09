import React from 'react';



const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>React Crud-operations</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Employee</button>
        {/* <Logout setIsAuthenticated={setIsAuthenticated} /> */}
      </div>
    </header>
  );
};

export default Header;