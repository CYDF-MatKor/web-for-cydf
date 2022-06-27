import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
export { default as About } from "./About";
export { default as Contact } from "./Contact";
export { default as Error } from "./Error";
export { default as Terms } from "./Terms";
export { default as Lecture } from "./Lecture";
export { default as LectureInfo } from "./LectureComponent/LectureInfo";
export { default as LecturePastexam } from "./LectureComponent/LecturePastexam";
export { default as LectureTier } from "./LectureComponent/LectureTier";
export { default as ProfessorInfo } from "./ProfessorComponent/ProfessorInfo";
export { default as ProfessorTier } from "./ProfessorComponent/ProfessorTier";
export { default as AcademicCalendar } from "./AcademicCalendar";
export { default as Busasu } from "./Busasu";
export { default as Club } from "./Club";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

