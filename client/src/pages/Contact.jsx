import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
    return (
        <>
            <Navbar />

            <div className="contact-container">

                <h1>Contact Us</h1>

                <p className="contact-text">
                    We'd love to hear from you! Feel free to reach out using the form below.
                </p>

                <div className="contact-content">

                    <div className="contact-info">

                        <h2>Get in Touch</h2>

                        <p>📧 Email: akhilareddy3258@gmail.com</p>

                        <p>📱 Phone: +91 7075820365</p>

                        <p>📍 Location: Hyderabad, India</p>

                        <p>💻 GitHub: github.com/yourusername</p>

                        <p>💼 LinkedIn: linkedin.com/in/yourprofile</p>

                    </div>

                    <div className="contact-form">

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="6"
                        ></textarea>

                        <button>
                            Send Message
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Contact;