import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

interface IFormInputs {
	fullName: string
	email: string
	whereDoYou: string
	noTraveller: string
}

function Home() {

	const navigate = useNavigate();
	const [totalBudget, setTotalBudget] = useState('')
	const { register, handleSubmit, setError, formState: { errors } } = useForm<IFormInputs>();

	const onSubmit = (formData: any) => {
		// console.log(formData)
		axios.post('http://localhost:3000/api/form/submitForm', formData)
			.then(function (response) {
				// console.log(response);
				navigate("/form-info", { state: { uid: response.data } });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function budgetHandler(e: any) {
		setTotalBudget(e.target.value)
		console.log(e.target.value)
	}

	console.log(errors)
	return (
		<Layout>
			<div className="m-auto max-w-md mt-[20px]">
				<h3 className="text-[25px] mb-[20px]">Enter details here</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 gap-6">
						<label className="block">
							<span className="text-gray-700">Full name</span>
							<input
								type="text"
								className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								placeholder=""
								{...register("fullName", {
									required: "This field is required",
								})}
							/>
							{errors.fullName && <span className="text-red-800 text-[11px]">{errors.fullName.message}</span>}
						</label>
						<label className="block">
							<span className="text-gray-700">Email address</span>
							<input
								type="email"
								className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								placeholder="john@example.com"
								{...register("email", {
									required: "required",
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "Please enter valid email"
									},
								})}
							/>
							{errors.email && <span className="text-red-800 text-[11px]">{errors.email.message}</span>}
						</label>
						<label className="block">
							<span className="text-gray-700">Where do you want to go? </span>
							<select
								className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								{...register("whereDoYou", {
									required: "This field is required",
								})}
							>
								<option disabled selected>Please select</option>
								<option value="India">India</option>
								<option value="Africa">Africa</option>
								<option value="Europe">Europe</option>
							</select>
							{errors.whereDoYou && <span className="text-red-800 text-[11px]">{errors.whereDoYou.message}</span>}
						</label>
						<label className="block">
							<span className="text-gray-700">No. of travellers </span>
							<div className="mt-1 flex items-center rounded-md shadow-sm">
								<span className="inline-flex h-full min-w-[115px] items-center mt-1 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 py-[10px] px-3 text-sm text-gray-500">
									50 $ / person
								</span>
								<input
									type="number"
									className="block mt-1 w-full rounded-md rounded-l-none bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="enter total persons"
									{...register("noTraveller", {
										required: "This field is required",
										onChange: (e) => { budgetHandler(e) },
									})}
								/>
								<span className="flex items-center">
									<span className="px-3">=</span>
									<input
										type="text"
										className="block mt-1 rounded-md bg-gray-100 border-transparent focus:border-transparent text-center text-gray-500  focus:ring-0 max-w-[80px]"
										placeholder=""
										value={`${Number(totalBudget) * 50} $`}
										readOnly
									/>
								</span>
							</div>
							{errors.noTraveller && <span className="text-red-800 text-[11px]">{errors.noTraveller.message}</span>}
						</label>
						<div className="block">
							<div className="mt-2">
								<div>
									<label className="inline-flex items-center">
										<input type="checkbox" className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500" />
										<span className="ml-2">Email me news and special offers</span>
									</label>
								</div>
							</div>
						</div>
						<div className="block">
							<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center w-full">
								<svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
									<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
								</svg>
								Submit...
							</button>
						</div>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default Home;