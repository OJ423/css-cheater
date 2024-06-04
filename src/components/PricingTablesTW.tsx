import { tailwindPricingTables } from "../utils/pricingTableUtils";
import SectionsCodeTW from "./SectionsCodeTW";

export default function PricingTablesTW() {
  return (
    <>
    <h3 className="font-bold text-2xl w-[100%] text-left mb-8 max-w-screen-xl m-auto">Clean React/Tailwind Pricing Table</h3>
    <section className="bg-gray-100 py-20 w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that’s right for your business.
          </p>
        </div>
        <div className="mt-16 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {/* Basic Plan */}
          <div className="relative flex flex-col bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <p className="mt-4 text-gray-600">
                Ideal for small businesses just getting started.
              </p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  $19
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  5 Projects
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Basic Analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Email Support
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              <p className="mt-4 text-gray-600">
                Perfect for growing businesses.
              </p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  $49
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  20 Projects
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced Analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Priority Email Support
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Custom Reports
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative flex flex-col bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Enterprise
              </h3>
              <p className="mt-4 text-gray-600">
                Best for large enterprises needing full control.
              </p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-900">
                  $99
                </span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited Projects
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advanced Analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Custom Reports & Analytics
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <div className="rounded-lg shadow-md">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SectionsCodeTW sectionName="Classic Pricing Table" tailwindSections={tailwindPricingTables} />
    </>
  );
}
