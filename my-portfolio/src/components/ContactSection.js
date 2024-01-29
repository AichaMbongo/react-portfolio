// ContactSection.js
import React from 'react';

const ContactSection = ({ title, imageSrc, contacts }) => {
  return (
    <section className="container mt-4 mb-4 bg-dark col-md-12">
      <h2 className="text-center mb-4 text-white">{title}</h2>

      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageSrc} className="img-fluid rounded-circle shadow-lg" alt="..." />
        </div>
        <div className="col-md-8">
          {contacts.map((contact, index) => (
            <div key={index} className="card rounded bg-dark text-white shadow-lg mb-5">
              <div className="row g-0">
                <div className="col-md-1">
                  <img src={contact.iconSrc} className="img-fluid rounded-circle shadow-lg mt-3" alt="..." style={{ maxWidth: '50px' }} />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <a href={contact.link} target="_blank">
                      {contact.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
