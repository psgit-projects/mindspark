import React from 'react';
import './c.css'
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "62762396-5c29-4394-ad12-df0f58a12e76");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
  <div className="co">
    <div className="co-co">
      <h3>Send a Message</h3>
      <p>We’d love to hear from you! If you have any questions, suggestions, or need assistance, feel free to reach out to us. 
      <ul>
        <li>
        MindSpark@gmail.com
        </li>
        <li>
       +6548542121484
        </li>
        <li>
        77 Indore, Near by Hotel
        </li>
        <li>
        © 2021 Copyright:MindSpark.com
        </li>
      </ul>
</p>
    </div>
    <div className="co-co">
     <form onSubmit={onSubmit} >
      <label className='label'>Your Name</label>
      <input type="text" name='Name' placeholder='Enter Your Name' required />
      <label className='label'>Phone Number</label>
      <input type="text" name='phone' placeholder='Enter Phone Number' required />
      <label className='label'>Write Your Message</label>
      <textarea name='Message' placeholder='Enter Your Suggession' required />
      <button type='submit' className='btn dark-btn'>Submit Now</button>
     </form>
     <span>{result}</span>
    </div>
  </div>
  );
}

export default Contact;
