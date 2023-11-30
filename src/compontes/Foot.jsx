import React from 'react';

const Foot = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  };

  const socialIconStyle = {
    marginRight: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; 2023 Your Company</p>
        <div style={socialIconStyle}>
          {/* Add your social media icons or links here */}
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <i style={{ color: 'white' }} className="bi bi-twitter"></i>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <i style={{ color: 'white' }} className="bi bi-facebook"></i>
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Foot;

