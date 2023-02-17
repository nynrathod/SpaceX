import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useLayoutEffect } from "react"
import { useState } from "react";
import axios from 'axios';

function FormInfo() {

	const state = useLocation();
	console.log(state.state)

	const [myData, setMyData] = useState({
		fullName: "",
		emailAddress: "",
		whereDoYouWantToGo: "",
		noOfTravellers: "",
	});
	console.log(myData)
	useLayoutEffect(() => {
		if (state.state != null) {

			const id = state.state.uid
			axios.get(`http://localhost:3000/api/form/getFormData/${id}`)
				.then(function (response) {
					// console.log(response);
					setMyData(response.data)
					console.log(myData)
				})
				.catch(function (error) {
					console.log(error);
				});

			window.history.replaceState({}, document.title)
		} else {
			window.history.replaceState({}, document.title)
			window.location.replace("/")
		}
	}, []);

	return (
		<Layout>
			<div className="relative overflow-x-auto my-[40px] max-w-[700px] m-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Full Name
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Where do you want to go?
							</th>
							<th scope="col" className="px-6 py-3">
								No. of travellers
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="px-6 py-4">
								{myData?.fullName}
							</td>
							<td className="px-6 py-4">
								{myData?.emailAddress}
							</td>
							<td className="px-6 py-4">
								{myData?.whereDoYouWantToGo}
							</td>
							<td className="px-6 py-4">
								{myData?.noOfTravellers}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Layout>

	);
}

export default FormInfo;