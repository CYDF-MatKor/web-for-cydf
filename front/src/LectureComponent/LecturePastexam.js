import "./LecturePastexam.css";

import { useParams } from "react-router-dom";

function LecturePastexam() {
	const { num } = useParams();
	return (
		<div className="LecturePastexam-page">
			<h1>LecturePastexam</h1>
			<p>{num}</p>
		</div>
	);
}

export default LecturePastexam;
