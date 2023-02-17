import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="flex justify-between">
			<span className="text-sm text-gray-500 block">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
			</span>
			<ul className="">
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
				</li>
				<li>
					<a href="#" className="hover:underline">Contact</a>
				</li>
			</ul>
		</footer>

	);
}

export default Footer;