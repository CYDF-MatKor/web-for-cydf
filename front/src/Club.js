import "./Club.css";
import { useParams } from "react-router-dom";

function Club() {
	const { club } = useParams();
	return (
		<div className="Club-page">
			<h1>Club</h1>
			<p>동아리</p>
			<p>{club}</p>
		</div>
	);
}
export default Club;
