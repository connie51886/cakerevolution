import React from 'react';


const MobileComponent = () => {
    const componentStyle = {
        backgroundImage: 'url(./images/mobilecake.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',

      };
    
    
  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    margin: '0'
    
  };

    return (
    <div className="mobile-component" style={componentStyle}>

            <h2 style = {headingStyle}>Pls come back on desktop!</h2>

    </div>
    );
  };
  
export default MobileComponent;