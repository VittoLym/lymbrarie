import Link from "next/link";

function NotFound() {
  return (
    <section className="grid place-items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black">
            404
          </p>
          <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
            Page Not Found
          </p>
          <p className="mb-4 text-lg text-gray-800 ">
            Sorry, we can&apos;t find that page.
          </p>
          <Link
            href="/"
            className="inline-flex text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            <u>Back to Homepage</u>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NotFound;
