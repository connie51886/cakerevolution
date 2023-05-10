import React from 'react';


const MobileComponent = () => {
    const componentStyle = {
        backgroundImage: 'url(./images/mobilecake.png)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',


        height: '100%'
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
      <div style={{height:'100%'}}>
        <div style = {{height:'100%'}}>
      
          <div className="mobile-component" style={componentStyle}>

              <h2 style = {headingStyle}>Pls come back on desktop!</h2>

          </div>

      </div>
      </div>
    );
  };
  
export default MobileComponent;