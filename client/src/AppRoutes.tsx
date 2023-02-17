import { Route, Routes } from 'react-router-dom';
import FormInfo from './pages/FormInfo';
import Home from './pages/Home';


function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/form-info" element={<FormInfo />} />
		</Routes>
	);
}

export default AppRoutes;