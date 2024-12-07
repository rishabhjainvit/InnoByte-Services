import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import A from '../assest/A.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [hovered, setHovered] = useState(false);

  const styles = {
    heroSection: {
      backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${A})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      flexDirection: 'column',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 20px rgba(0,0,0,0.9)',
    },
    heroSubtitle: {
      fontSize: '1.75rem',
      marginBottom: '40px',
      textShadow: '1px 1px 12px rgba(0,0,0,0.7)',
    },
    button: {
      padding: '14px 35px',
      fontSize: '20px',
      color: '#fff',
      backgroundColor: hovered ? '#ff4500' : '#1a1a1a',
      border: '2px solid #ff4500',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: hovered ? '0 6px 15px rgba(255, 69, 0, 0.6)' : '0 4px 15px rgba(255, 69, 0, 0.5)',
    },
    section: {
      padding: '80px 20px',
      textAlign: 'center',
      backgroundColor: 'rgb(19, 36, 53)',
      color: '#e0e0e0',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      marginBottom: '25px',
    },
    sectionContent: {
      fontSize: '1.2rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.8',
    },
    amenitiesList: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap',
      marginTop: '50px',
    },
    amenityItem: {
      width: '260px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
      textAlign: 'center',
      backdropFilter: 'blur(8px)',
      transition: 'transform 0.3s',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    inputField: {
      padding: '14px',
      fontSize: '18px',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      border: '1px solid #444',
      borderRadius: '8px',
    },
    submitButton: {
      padding: '14px',
      fontSize: '20px',
      backgroundColor: '#ff4500',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    mapContainer: {
      marginTop: '0', // Removed margin to close the gap
      backgroundColor: 'rgb(19, 36, 53)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '20px 0',
      width: '100%',
    },
    mapTitle: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#fff',
    },
    map: {
      width: '100%',
      height: '450px',
      maxWidth: '120000px',
      border: '0',
      borderRadius: '0px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    },
    footer: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: 'rgb(19, 36, 53)',
      color: '#ccc',
    },
    footerTop: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      paddingBottom: '20px',
      borderBottom: '1px solid #444',
    },
    footerBottom: {
      paddingTop: '20px',
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section style={styles.heroSection} data-aos="fade-in">
        <h1 style={styles.heroTitle}>Welcome to King Sukh Guest House</h1>
        <p style={styles.heroSubtitle}>Experience comfort like never before</p>
        <button
          style={styles.button}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Book Now
        </button>
      </section>

      {/* About Section */}
      <section style={styles.section} data-aos="fade-up">
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.sectionContent}>
          At King Sukh Guest House, we offer a luxurious experience with our top-class services and amenities. Whether you're traveling for business or leisure, we provide the comfort and convenience you need for a memorable stay.
        </p>
      </section>

       {/* Amenities Section */}
       <section style={styles.section} data-aos="fade-right">
        <h2 style={styles.sectionTitle}>Our Amenities</h2>
        <div style={styles.amenitiesList}>
          {['Free Wi-Fi', 'Complimentary Breakfast', 'Swimming Pool', '24/7 Room Service'].map(
            (amenity, index) => (
              <div
                key={index}
                style={styles.amenityItem}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3>{amenity}</h3>
                <p>Enjoy premium amenities like {amenity.toLowerCase()}.</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Google Map Section */}
      <section style={styles.mapContainer} data-aos="fade-up">
        <h2 style={styles.mapTitle}>Find Us Here</h2>
        <iframe
          title="King Sukh Guest House Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.464291610433!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4d8d5b77%3A0xb2e0b8f0d752b5e7!2sKing%20Sukh%20Guest%20House!5e0!3m2!1sen!2sus!4v1697612439481!5m2!1sen!2sus"
          style={styles.map}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Contact Section */}
      <section style={styles.section} data-aos="fade-up">
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <form style={styles.contactForm}>
          <input type="text" placeholder="Your Name" style={styles.inputField} required />
          <input type="email" placeholder="Your Email" style={styles.inputField} required />
          <textarea placeholder="Your Message" style={styles.inputField} rows="4" required />
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </section>

      

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div style={styles.footerTop}>
          <div>
            <h3>Contact Information</h3>
            <p>Email: info@kingsukh.com</p>
            <p>Phone: +91 123-456-7890</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p>About Us | Contact | Book Now</p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <p>Facebook | Instagram | Twitter</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2024 King Sukh Guest House. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Hero;
