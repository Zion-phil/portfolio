import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsLoading(false);
      return;
    }

    try {
      // Connect to your local Node backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error connecting to server. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bx-contact-section bx-section padding-tb-80 body-bg">
      <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          <p className="light-txt">form</p>
          <h2>Get In<span className="primary-clr"> Touch</span></h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
              <div className="border-box">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-none"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="custom-btn bx-btn-1" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Submit'}
              </button>
              
              {status.message && (
                <div style={{ marginTop: '15px', color: status.type === 'error' ? 'red' : 'green' }}>
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}