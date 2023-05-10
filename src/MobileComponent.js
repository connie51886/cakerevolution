import './App.css';
import React from 'react';


const MobileComponent = () => {
    const componentStyle = {
        backgroundImage: 'url(./images/mobilecake.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };


    return (
    <div className="mobile-component" style={componentStyle}>
    
        <div class="center">
            <h2>Pls come back on desktop!</h2>
        </div>

    </div>
    );
  };
  
export default MobileComponent;