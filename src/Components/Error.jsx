import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 bg-white text-black">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-6xl text-gray-900">
				<span className="sr-only">Error</span>Page Not Found
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">It seems the page you were looking for does not exist.</p>
			<p className="mt-4 mb-8 text-gray-700">Please check the URL for errors or go back to our homepage.</p>
			<Link to={'/'} rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-[#3ca3b0] text-white">Back to homepage</Link>
		</div>
	</div>
</section>

        </div>
    );
};

export default Error;