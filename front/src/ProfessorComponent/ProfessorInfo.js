import "./ProfessorInfo.css";
import { useParams } from "react-router-dom";

function ProfessorInfo(props) {
	const { num } = useParams();
	return (
		<div className="ProfessorInfo-page">
			<h1>ProfessorInfo</h1>
			<p>교수정보</p>
			<p>{num}</p>
		</div>
	);
}
export default ProfessorInfo;
