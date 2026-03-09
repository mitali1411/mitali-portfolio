import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setResult("Sending....");

      const formData = new FormData(e.target);
  
      formData.append("access_key", "bfefc8d7-c15d-4f49-8c6d-81f5b95a2ae4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert(data.message)
        e.target.reset();
      } else {
        console.log("Error", data);
        alert(data.message)
      }
    };

  return (
    <section id='contact' className="contact-section">
      <h3 className='mt-4'>CONTACT <span>ME</span></h3>

      <div className="contact">
        <div className="info">
          <h1>Let's Talk</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p> */}
          <p>Let's create something amazing together. Contact me.</p>

          <div className="address">
          <span>
          <i className='bx bxs-envelope'></i>
          <a href="mailto:mitalirasaniya@gmail.com" target='_blank'>mitalirasaniya@gmail.com</a>
          </span>

          <span>
          <i className='bx bxs-phone-call' ></i>
          <a href="https://wa.me/123456789" target='_blank'>+91-1234567890</a>
          </span>

          <span>
          <i className='bx bx-current-location'></i>
          <a>Indore, Bharat</a>
          </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
        <input className='form-control' type="text" name='name' placeholder="Enter your name" required/>
        <input className='form-control' type="email" name='email' placeholder="Enter your email" required/>
        <textarea name="message" id="" placeholder='Enter your message' className='form-control' rows={5} required/>
        <span>{result}</span>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </section>
  )
}

export default Contact