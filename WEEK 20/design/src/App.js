import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function App() {
  return (
    <div className="flex items-center justify-center m-24">
      <div className="flex items-center justify-center bg-blue-500 p-4">
        <div className="bg-white rounded-lg flex flex-col p-10 space-y-4 m-5">
          <h1 className="text-xl text-center text-neutral-600 font-bold">FREE</h1>
          <p className="text-3xl px-8 font-bold">$0/Month</p>
          <hr className="border-t-2 border border-gray-300 w-full" />

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Single User</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>50GB Storage</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Unlimited Public Projects</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Community Access</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaTimesCircle className="text-neutral-600 text-xl" />
            <h1 className="text-neutral-600	">Unlimited Private Projects</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaTimesCircle className="text-neutral-600 text-xl" />
            <h1 className="text-neutral-600	">Dedicated Phone Support</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaTimesCircle className="text-neutral-600	 text-xl" />
            <h1 className="text-neutral-600	">Free Subscription</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaTimesCircle className="text-neutral-600	 text-xl" />
            <h1 className="text-neutral-600	">Monthly Status Reports</h1>
          </div>
          <button className="bg-blue-300 rounded-3xl p-4 text-white font-bold">BUTTON</button>
        </div>
        <div className="bg-white rounded-lg flex flex-col  p-10 space-y-4 m-5">
          <h1 className="text-xl text-center text-neutral-600 font-bold">PLUS</h1>
          <p className="text-3xl px-8 font-bold">$9/Month</p>
          <hr className="border-t-2 border border-gray-300 w-full" />

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Single User</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>50GB Storage</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Unlimited Public Projects</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Community Access</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Unlimited Private Projects</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Dedicated Phone Support</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Free Subscription</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaTimesCircle className="text-neutral-600	text-xl" />
            <h1 className="text-neutral-600	">Monthly Status Reports</h1>
          </div>
          <button className="bg-blue-300 rounded-3xl p-4 text-white font-bold">BUTTON</button>

        </div>
        <div className="bg-white rounded-lg flex flex-col p-10 space-y-4 m-5">
          <h1 className="text-xl text-center text-neutral-600 font-bold">PRO</h1>
          <p className="text-3xl px-8 font-bold">$49/Month</p>
          <hr className="border-t-2 border border-gray-300 w-full" />

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Single User</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>50GB Storage</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Unlimited Public Projects</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Community Access</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Unlimited Private Projects</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Dedicated Phone Support</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Free Subscription</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <h1>Monthly Status Reports</h1>
          </div>
          <button className="bg-blue-300 rounded-3xl p-4 text-white font-bold">BUTTON</button>

        </div>
      </div>
    </div>
  );
}

export default App;
