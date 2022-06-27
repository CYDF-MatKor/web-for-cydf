import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import {
	About,
	Contact,
	Error,
	Terms,
	Lecture,
	LectureInfo,
	LecturePastexam,
	LectureTier,
	ProfessorInfo,
	ProfessorTier,
	AcademicCalendar,
	Busasu,
	Club,
} from ".";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isPaid, setIsPaid] = useState(false);
	return (
		<div className="App">
			<div id="navbar">Navbar</div>
			<div id="page">
				<Routes id="page-login-common">
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/error" element={<Error />} />
					<Route path="/terms" element={<Terms />} />
				</Routes>
				{/* {isLoggedIn ? (
					<Routes id="page-login-true">
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/mypage" element={<Mypage />} />
						<Route path="/timetable" element={<Timetable />} />
						<Route path="/grade" element={<Grade />} />
						<Route
							path="/lecture/description"
							element={<Lecture />}
						/>
						{isLoggedIn && (
							<Route
								path="/lecture/:num"
								element={<LectureInfo />}
							/>
						)}
						{isLoggedIn && (
							<Route
								path="/lecture/pastexam/:num"
								element={<LecturePastexam />}
							/>
						)}
						{isLoggedIn && (
							<Route
								path="/lecture/tier"
								element={<LectureTier />}
							/>
						)}
						{isLoggedIn && (
							<Route
								path="/professor/:num"
						{isLoggedIn && (
								element={<ProfessorInfo />}
							/>
						)}
						{isLoggedIn && (
							<Route
								path="/professor/tier"
								element={<ProfessorTier />}
							/>
						)}
						{isLoggedIn && (
						<Route
							path="/academic-calendar/:year"
							element={<AcademicCalendar />}
						/>
						<Route
							path="/academic-calendar"
							element={<Navigate to="/academic-calendar/2022" />}
						/>
							<Route
								path="/%EB%B6%80%EC%82%AC%EC%88%98/:year/:semester"
								element={<Busasu />}
							/>
						)}
						{isLoggedIn && (
							<Route
								path="/부사수/:year/:semester"
								element={<Busasu />}
							/>
						)}
						<Route path="/rand-menu" element={<RandMenu />} />
							<Route
								path="/busasu/:year/:semester"
								element={<Busasu />}
							/>
						)}
						<Route path="/club/:club" element={<Club />} />
					</Routes>
				) : (
					<Routes id="page-login-false">
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/*" element={<Navigate to="/login" />} />
					</Routes>
				)} */}
			</div>
		</div>
	);
}

export default App;

