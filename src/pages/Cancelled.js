import { Link } from "react-router-dom";

export default function Cancelled() {
  return (
    <>
      <section className="flex items-center justify-center flex-col mt-10 px-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-gray-800 lg:mb-8">
          Cancellation Successful
        </h1>
        <p className="text-xl mb-10 text-center">
          You have successfully cancelled your donation!
        </p>
        <button className="bg-blue-500 py-2 px-6 rounded font-bold hover:bg-transparent border-2 border-blue-500 text-white transition-all duration-500 hover:opacity-75 hover:bg-blue-800 hover:border-blue-800 shadow-lg">
          <Link to="/">Back to Homepage</Link>
        </button>
      </section>
    </>
  );
}
