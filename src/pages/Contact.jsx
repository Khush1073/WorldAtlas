export const Contact = () => {

  const handleFormSubmit = (formData) => {
    // formData.preventDataDefault(); // Prevent the form from submitting in the default way 
    const forminputData =Object.fromEntries(formData.entries());
    console.log(forminputData);
    // Logs form data as an object
  }

  return (
    <>   
       <section className="section-contact">
        <h2 className="container-title">Contact us</h2>

        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
            <input
              type="text"
              className="form-control"
              required
              autoComplete="off"
              placeholder="Enter your name"
              name="username"
            />

            <input
              type="email"
              className="form-control"
              required
              autoComplete="off"
              placeholder="Enter your email"
              name="email"
            />

            <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              required
              autoComplete="off"
              name="message"
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};
