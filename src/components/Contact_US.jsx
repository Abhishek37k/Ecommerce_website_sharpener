import React from 'react'
import { Form } from 'react-router-dom'

function Contact_US() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneno = e.target.phoneno.value;

        const data = {
            name,
            email,
            phoneno,
        };

        try {
            const response = await fetch(
                "https://react-fetch-movie-sharpener-default-rtdb.firebaseio.com/contactus.json",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to send message!");
            }

            const result = await response.json();
            console.log("Submitted:", result);
            alert("Message sent successfully!");
            e.target.reset(); 
        }
        
        catch (err) {
            console.error("Error:", err);
            alert("Something went wrong.");
        }
    };
    return (
        <div className="container mt-5  flex " style={{ maxWidth: 600 }} >
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneno" className="form-label">Phone no</label>
                    <input type='text' name="phoneno" id="phoneno" className="form-control" required />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Send</button>
                <br /><br /><br />
            </form>
        </div>
    )
}
export default Contact_US;
