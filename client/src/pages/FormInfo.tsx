import Layout from "../components/Layout/Layout";

function FormInfo() {
	return (
		<Layout>
			<div className="relative overflow-x-auto my-[40px] max-w-[500px] m-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product name
							</th>
							<th scope="col" className="px-6 py-3">
								Color
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Apple MacBook Pro 17"
							</th>
							<td className="px-6 py-4">
								Silver
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Apple MacBook Pro 17"
							</th>
							<td className="px-6 py-4">
								Silver
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Apple MacBook Pro 17"
							</th>
							<td className="px-6 py-4">
								Silver
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Layout>

	);
}

export default FormInfo;