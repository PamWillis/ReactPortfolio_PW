import '../styles/Body.css';
import { useState } from 'react';
import '../assets/style.css';

export default function Contact() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    return (

        <>
            <div className="container">
                <h1>Contact Me</h1>

                
                <label>
                    Name:
                    <input
                        value={Name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Email:
                    <input
                        value={Email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Message:
                    <textarea name="postContent" rows={10} cols={100} />
                </label><br></br>
                <button type="submit">SUBMIT</button>

                {Name !== '' &&
                    <p>Your name is {Name}.</p>
                }
                {Email !== '' &&
                    <p>Your email is {Email}.</p>
                }

            </div>
        </>
    );
}
