import "./LectureInfo.css";
import { useParams } from "react-router-dom";

function LectureInfo() {
	const { num } = useParams();
	return (
		<div className="LectureInfo-page">
			<h1>LectureInfo</h1>
			<p>{num}</p>
		</div>
	);
}

export default LectureInfo;
