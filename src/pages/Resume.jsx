import pdf from "../assets/Pam.pdf";
export default function Resume() {
return (
    <div className="container">
         <a href={pdf} download>My Resume</a>
    </div>
);
}