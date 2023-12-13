import pdf from "../assets/Pam.pdf";

export default function Resume() {
return (
    <div className="container">
        <h1>Resume</h1>
        <p>click on link to download resume.</p>
         <a href={pdf} download>My Resume</a>
    </div>
);
}