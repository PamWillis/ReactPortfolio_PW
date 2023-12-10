import '../styles/Body.css';
import React, { useState } from 'react';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isEntry, setIsEntry] = useState(false);
    //____________________________________________________________________

    const validateEmail = (email) => {
        // Use a regular expression to validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateEntry = (name) => {
        const notemptyRegex = /^.+$/;
        return notemptyRegex.test(name);
    };
    //__________________________________________________________________

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const isValid = validateEmail(email);
        setIsValidEmail(isValid);

        const isNameEntry = validateEntry(name);
        const isMessageEntry = validateEntry(formData.get('message'));

        setIsEntry(isNameEntry || !isMessageEntry);

        // // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    //__________________________________________________________________
    return (
        <form id="myForm" method="post" onSubmit={handleSubmit}>
            <>
                <div className="container">
                    <h1>Contact Me</h1>
                    <label>
                        Name:<br></br>
                        <input
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>
                        Email:<br></br>
                        <input name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>
                        Message:<br></br>
                        <textarea name="message" rows={10} cols={100} />
                    </label><br></br>
                    <button type="submit">SUBMIT</button>

                    {!isValidEmail && <p>Please enter a valid email.</p>}
                    {!isEntry && <p>Please fill in all required fields.</p>}
                </div>

            </>
        </form>
    );
}
