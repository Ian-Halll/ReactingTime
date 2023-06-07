import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address';
    }

    // Validate message
    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation using regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Form is valid, perform further actions (e.g., submit data)
      // Reset form fields and errors
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setIsSubmitting(true);
    } else {
      // Form has errors, update error state
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;