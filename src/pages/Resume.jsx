import pdf from "../assets/Pam.pdf";

export default function Resume() {
return (
    <div>
        <h1>Resume</h1>
         <a href={pdf} download>My Resume</a>
    </div>
);
}