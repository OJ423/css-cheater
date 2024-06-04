export interface cssPricing {
  sectionName: string,
  code: {
    html: string,
    css: string,
  }
}

export const cssPricingTables:cssPricing[] = [
  {
    sectionName: 'CSS Floating Pricing Table',
    code: {
      html: `<div class="pricing-background">
  <div class="pricing-container">
    <div class="pricing-panel pricing-table">
      
      <div class="pricing-plan">
        <img src="https://www.svgrepo.com/show/493328/male-programmer.svg" alt="" class="pricing-img">
        <h2 class="pricing-header">Personal</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Custom domains</li>
          <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
        </ul>
        <span class="pricing-price">Free</span>
        <a href="#/" class="pricing-button">Sign up</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://www.svgrepo.com/show/246822/team.svg" alt="" class="pricing-img">
        <h2 class="pricing-header">Small team</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Never sleeps</li>
          <li class="pricing-features-item">Multiple workers for more powerful apps</li>
        </ul>
        <span class="pricing-price">$150</span>
        <a href="#/" class="pricing-button is-featured">Free trial</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://www.svgrepo.com/show/331718/enterprise.svg" alt="" class="pricing-img">
        <h2 class="pricing-header">Enterprise</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Dedicated</li>
          <li class="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span class="pricing-price">$400</span>
        <a href="#/" class="pricing-button">Free trial</a>
      </div>
      
    </div>
  </div>
</div>`,
      css: `.pricing-background {
  padding: 0 25px 25px;
  position: relative;
  width: 100%;
}

.pricing-background::after {
  content: '';
  background: #60a9ff;
  background: -moz-linear-gradient(top, #60a9ff 0%, #4394f4 100%);
  background: -webkit-linear-gradient(top, #60a9ff 0%,#4394f4 100%);
  background: linear-gradient(to bottom, #60a9ff 0%,#4394f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

@media (min-width: 900px) {
  .pricing-background {
    padding: 0 0 25px;
  }
}

.pricing-container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 960px;
  width: 100%;
}

.pricing-panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
  max-height: 150px;
  margin: auto;
}

.pricing-header {
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 20px;
}

.pricing-features {
  color: #016FF9;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #016FF9;
  display: block;
  font-size: 32px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #48aaff;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #269aff;
}`
    }
}]

export interface tailwindPricing {
  sectionName: string,
  code: string
} 

export const tailwindPricingTables: tailwindPricing[] = [
  {
    sectionName: 'Classic Pricing Table',
    code:`<section className="bg-gray-100 py-20 w-[100%]">
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
</section>`
  }
]