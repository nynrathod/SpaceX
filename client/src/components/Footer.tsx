import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="fixed bottom-0 w-full p-4 bg-white rounded-lg shadow-md md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<Link to="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
				</li>
				<li>
					<Link to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
				</li>
				<li>
					<Link to="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
				</li>
				<li>
					<Link to="#" className="hover:underline">Contact</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;