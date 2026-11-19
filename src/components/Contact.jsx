import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Contact.css';

const Contact = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section bg-secondary" id="contact" ref={sectionRef}>
      <div className="section-bg-element bg-central-station"></div>
      
      <div className="container reveal-up">
        <div className="contact-header text-center">
          <h2 className="section-title">Central Station — Contact</h2>
          <p className="section-subtitle mx-auto">
            Choose a route to connect, collaborate, or explore my work.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Routes */}
          <div className="contact-routes">
            <h3 className="contact-column-title">Connection Routes</h3>
            
            <a href="mailto:anniesherlyn2006@gmail.com" className="route-card" target="_blank" rel="noopener noreferrer">
              <div className="route-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="route-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="route-details">
                <span className="route-label">Primary Email</span>
                <span className="route-value">anniesherlyn2006@gmail.com</span>
              </div>
            </a>

            <a href="mailto:anniesherlyn2@gmail.com" className="route-card" target="_blank" rel="noopener noreferrer">
              <div className="route-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="route-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="route-details">
                <span className="route-label">Secondary Email</span>
                <span className="route-value">anniesherlyn2@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/annie-sherlyn-cit/" className="route-card" target="_blank" rel="noopener noreferrer">
              <div className="route-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="route-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className="route-details">
                <span className="route-label">LinkedIn</span>
                <span className="route-value">annie-sherlyn-cit</span>
              </div>
            </a>

            <a href="https://github.com/Annie-Sherlyn" className="route-card" target="_blank" rel="noopener noreferrer">
              <div className="route-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="route-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div className="route-details">
                <span className="route-label">GitHub</span>
                <span className="route-value">Annie-Sherlyn</span>
              </div>
            </a>

            <a href="https://leetcode.com/u/Annie_sherlyn2006/" className="route-card" target="_blank" rel="noopener noreferrer">
              <div className="route-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="route-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div className="route-details">
                <span className="route-label">LeetCode</span>
                <span className="route-value">Annie_sherlyn2006</span>
              </div>
            </a>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-container">
            <h3 className="contact-column-title">Direct Message</h3>
            <form className="contact-form" action="mailto:anniesherlyn2006@gmail.com" method="post" encType="text/plain">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we collaborate?" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
