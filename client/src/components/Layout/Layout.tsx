import Footer from "../Footer";
import Header from "../Header";

type appProps = {
	children: any
}

function Layout({ children }: appProps) {
	return (
		<>
			<Header />
			<div className="container m-auto pb-[100px]">
				{children}
			</div>
			<Footer />
		</>
	);
}

export default Layout;