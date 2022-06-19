import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Business from "./components/Business"
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import Detail from "./components/Detail";
import View from "./components/View";
import Search from "./components/Search";
import SearchM from "./components/SearchM";
import Filter from "./components/Filter";
import DetailM from "./components/DetailM";
import Report from "./components/Report"
function App() {
	const user = localStorage.getItem("token");
	//const { user } = useContext(AuthContext);
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/password-reset/:id/:token" element={<PasswordReset />} />
			<Route path="/detail" exact element={<Detail />} />
			<Route path="/search" exact element={<Search />} />
			<Route path="/view/:id" exact element={<View />} />
			<Route path="/filter" exact element={<Filter />} />
            <Route path="/business" exact element={<Business />} />
			<Route path="/searchm" exact element={<SearchM />} />
			<Route path="/detailM" exact element={<DetailM />} />
			<Route path="/report" exact element={<Report />} />
		</Routes>
	);
}

export default App;
