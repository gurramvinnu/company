// src/components/Career.js
import React, { useState } from 'react';
import './Career.css';

function Career() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle form submission, e.g., sending the data to a server
        console.log('Form Data:', formData);
        alert("Application submitted successfully!");
    };

    return (
        <div className="career">
            <h1>Join with Us</h1>
            <div className="image">
                    <img src="interview im.jpeg" alt="Company" />
                </div>
            <form className="career-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Resume:
                    <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        required
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Career;
