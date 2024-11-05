import React from 'react';
import { Card } from 'antd';
import IcastHeader from '../Layouts/IcastHeader';
import Footer from '../Layouts/IcastFooter';

const VenuMap = () => {
  return (
<>
<IcastHeader/>
<Card title="Event Venue Map" className="venue-map-card">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.306936238965!2d73.17496607549269!3d33.519404573362294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff206d49e3247%3A0xc36973d93ffa92c5!2sInstitute%20of%20Space%20Technology%20(IST)!5e0!3m2!1sen!2s!4v1730780938231!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Card>
    <Footer/>
        <style jsx>{`
          .venue-map-card {
  max-width: 100%;
  margin: 0 auto;
}

.map-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

          `}</style>
</>
  );
};

export default VenuMap;
