import React from 'react';
import ReactDOM from 'react-dom/client';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a href='/privacy_policy'>Privacy Policy</a>
        <a href='/contact_us'>Contact Us</a>
      </div>
    );
  }
}

export default Footer;