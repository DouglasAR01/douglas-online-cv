import React, { useState, useEffect } from 'react';
import "./scss/style.scss";

function App() {
  const fullPage = {
    minHeight: "100vh"
  }
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row" style={fullPage}>
          <div className="col-4 bg-dark"></div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
