import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import icon from "./navbaricon.png";

function Navbar({ isLoggedIn, isPaid, usrName }) {
	const [isOpen, setIsOpen] = useState(false);
	const openSubnavbar = () => setIsOpen(true);
	const closeSubnavbar = () => setIsOpen(false);
	return (
		<div id="navbar" onMouseLeave={closeSubnavbar}>
			<div id="navbar-main">
				<div id="navbar-main-left">
					<Link id="navbar-logo-link" to="/">
						<img id="navbar-logo-img" src={icon} alt="logo" />
					</Link>
				</div>
				<div id="navbar-main-middle">
					<div style={{ width: "20%" }}>
						<Link
							className="navbar-main-middle-link"
							onMouseEnter={openSubnavbar}
							to="/about"
						>
							소개
						</Link>
					</div>
					<div style={{ width: "20%" }}>
						<Link
							className="navbar-main-middle-link"
							onMouseEnter={openSubnavbar}
							to="/professor"
						>
							교수
						</Link>
					</div>
					<div style={{ width: "20%" }}>
						<Link
							className="navbar-main-middle-link"
							onMouseEnter={openSubnavbar}
							to="/lecture"
						>
							강의
						</Link>
					</div>
					<div style={{ width: "20%" }}>
						<Link
							className="navbar-main-middle-link"
							onMouseEnter={openSubnavbar}
							to="/academic-calendar"
						>
							생활
						</Link>
					</div>
					<div style={{ width: "20%" }}>
						<Link
							className="navbar-main-middle-link"
							onMouseEnter={openSubnavbar}
							to="/timetable"
						>
							개인페이지
						</Link>
					</div>
				</div>
				<div id="navbar-main-right">
					{isLoggedIn && (
						<div className="navbar-main-right-name">{usrName}님 반갑습니다</div>
					)}
					{isLoggedIn && (
						<Link className="navbar-main-right-link" to="/mypage">
							마이페이지
						</Link>
					)}
					{isLoggedIn && (
						<div className="navbar-main-right-link" to="/mypage">
							로그아웃
						</div>
					)}
					{!isLoggedIn && (
						<Link className="navbar-main-right-link" to="/login">
							로그인
						</Link>
					)}
				</div>
			</div>
			<div id="navbar-sub" style={isOpen ? {} : { height: 0 }}>
				<div id="navbar-sub-left"></div>
				<div id="navbar-sub-middle">
					<div class="navbar-sub-middle-container">
						<Link className="navbar-sub-middle-link" to="/about">
							소개
						</Link>
						<Link className="navbar-sub-middle-link" to="/contact">
							연락
						</Link>
					</div>
					<div class="navbar-sub-middle-container">
						<Link className="navbar-sub-middle-link" to="/professor">
							교수 소개
						</Link>
						<Link className="navbar-sub-middle-link" to="/professor/tier">
							교수 티어
						</Link>
					</div>
					<div class="navbar-sub-middle-container">
						<Link className="navbar-sub-middle-link" to="/lecture">
							과목 정보
						</Link>
						<Link className="navbar-sub-middle-link" to="/lecture/tier">
							과목 티어
						</Link>
						<Link className="navbar-sub-middle-link" to="/lecture/description">
							수강신청방법
						</Link>
						<Link className="navbar-sub-middle-link" to="/부사수">
							부사수
						</Link>
					</div>
					<div class="navbar-sub-middle-container">
						<Link className="navbar-sub-middle-link" to="/academic-calendar">
							학사일정
						</Link>
						<Link className="navbar-sub-middle-link" to="/club">
							동아리
						</Link>
						<Link className="navbar-sub-middle-link" to="/rand-menu">
							식사메뉴추천
						</Link>
					</div>
					<div class="navbar-sub-middle-container">
						<Link className="navbar-sub-middle-link" to="/timetable">
							시간표
						</Link>
						<Link className="navbar-sub-middle-link" to="/grade">
							성적
						</Link>
					</div>
				</div>
				<div id="navbar-sub-right"></div>
			</div>
		</div>
	);
}

export default Navbar;
