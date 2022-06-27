import "./Busasu.css";
import { useParams } from "react-router-dom";
function Busasu() {
	const { year, semester } = useParams();
	return (
		<div className="Busasu-page">
			<h1>Busasu</h1>
			<p>부사수</p>
			<p>{year}</p>
			<p>{semester}</p>
		</div>
	);
}
export default Busasu;
