import React, { useState } from 'react'; // Corrected import
import './ContactForm.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: ''
  });

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="cont">
      <h1>Contact Us</h1>
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src="hands.jpeg" alt="Company Logo" style={{ maxWidth: '75%', height: 'auto' }} />
      </div>

      

      <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }}
        />

        <label htmlFor="product">Product Name:</label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }}
        >
          <option value="" disabled>Select a Product</option>
          <option value="Web Design">Web Design</option>
          <option value="Website">Website</option>
          <option value="App">App</option>
          <option value="Game">Game</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" style={{ padding: '10px 20px', color: '#fff', backgroundColor: '#28a745', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      <div className="info" style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>
        We offer high-quality projects at friendly costs and deliver on time with outstanding features.
      </div>
    </div>
    </div>
  );
}

export default Contact;
