import "./AcademicCalendar.css";
import { useParams } from "react-router-dom";

function AcademicCalendar() {
	const { year } = useParams();
	return (
		<div className="AcademicCalendar-page">
			<h1>AcademicCalendar</h1>
			<iframe
				src="https://calendar.google.com/calendar/u/0/embed?src=haksa@korea.ac.kr&ctz=Asia/Seoul"
				style={{ border: 0 }}
				width="800"
				height="600"
				frameBorder="0"
				scrolling="no"
			></iframe>
		</div>
	);
}
export default AcademicCalendar;
