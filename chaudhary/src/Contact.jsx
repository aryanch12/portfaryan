import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleForm = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await fetch('http://localhost:3000/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert('Contact form submitted successfully!');
      } else {
        console.error('Error submitting contact form:', response.status, response.statusText);
        alert('Error submitting contact form. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting contact form. Please try again later.');
    }
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"><strong className="brand-name">Contact</strong> Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form method="POST"onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={handleForm}
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={handleForm}
                  placeholder="Phone"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={handleForm}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={handleForm}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn-get-started">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
