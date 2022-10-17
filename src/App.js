import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  return (
    <div className="bg-gray-900 text-white h-screen">
      <div class="flex justify-center ">
        <div class="mb-3 w-96 float-right my-7">
          <div class="input-group relative flex flex-row items-stretch w-full mb-4 rounded">
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Enter Target Domain"
              aria-label="Search"
              aria-describedby="button-addon2"
              typeof="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <span
              class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
              onClick={() => {
                console.log(link);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="white"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* dashboard with card */}
      <div class="flex justify-center">
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-gray-800 rounded-lg p-4">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-5 bg-green-500"></div>
              </div>
              <div
                class="flex-1 text-right md:text-center cursor-pointer"
                onClick={() => {
                  console.log("clicked");
                  // google search link
                  // remove https:// from link
                  window.open(
                    "https://www.google.com/search?q=" +
                      'allinurl:"Index Of" site:' +
                      link.replace("https://", ""),
                    "_blank"
                  );
                }}
              >
                <h5 class="font-bold uppercase text-gray-500">
                  Directory Listing
                </h5>
                {/* <h3 class="font-bold text-3xl text-gray-600">500</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
