import pdf from "../assets/Pam.pdf";
export default function Resume() {
return (
    <div>
         <a href={pdf} download>My Resume</a>
    </div>
);
}