import { useState } from "react";
import RectangleBg from "./asset/RectangleBg.svg";
import Rectangle from "./asset/Rectangle.svg";
import Logo from "./asset/logo.svg";
import directory from "./asset/directory.svg";
import backup from "./asset/backup.svg";
import database from "./asset/database.svg";
import login from "./asset/login.svg";
import log from "./asset/log.svg";
import config from "./asset/config.svg";
import wordpress from "./asset/wordpress.svg";

function App() {
  const [link, setLink] = useState("");
  const isMobile = window.innerWidth > 768;
  return (
    <>
      <div >
        <div className=" text-white pb-20 p-4" style={{
          backgroundImage: isMobile ? `url(${RectangleBg})` : `url(${Rectangle})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div className="flex justify-start top-0">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex justify-center ">
            <div className=" w-2/5 float-right my-9">
              <form>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Target Domain"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    typeof="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)} />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-7">

          <div className="grid grid-cols-4 gap-6" >

            <div class="flex justify-center cursor-pointer" onClick={() => {
              window.open(
                "https://www.google.com/search?q=" +
                'allinurl:"Index Of" site:' +
                link.replace("https://", ""),
                "_blank"
              );
            }} style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",

            }}>
              <div class=" bg-white max-w-sm">
                <div class="flex justify-center p-5">
                  <img src={directory} alt="directory" width={60} />
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Directory Listing</h5>
                </div>
              </div>
            </div>
            <div class="flex justify-center cursor-pointer" onClick={() => {
              window.open(
                "https://www.google.com/search?q=" +
                'site:' + link.replace("https://", "") + ' ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini', "_blank"
              );
            }} style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              margin: "10px",

            }}>
              <div class=" bg-white max-w-sm">
                <div class="flex justify-center p-5">
                  <img src={config} alt="directory" width={60} />
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Configuration Files</h5>
                </div>
              </div>
            </div>
            <div class="flex justify-center cursor-pointer" onClick={() => {
              window.open(
                "https://www.google.com/search?q=" +
                'site:' + link.replace("https://", "") + ' ext:sql | ext:dbf | ext:mdb', "_blank"
              );
            }} style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              margin: "10px",

            }}>
              <div class=" bg-white max-w-sm">
                <div class="flex justify-center p-5">
                  <img src={database} alt="directory" width={60} />
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Database Files</h5>
                </div>
              </div>
            </div>
            <div class="flex justify-center cursor-pointer" onClick={() => {
              window.open(
                "https://www.google.com/search?q=" +
                'site:' + link.replace("https://", "") + ' inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download', "_blank"
              );
            }} style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              margin: "10px",

            }}>
              <div class=" bg-white max-w-sm">
                <div class="flex justify-center p-5">
                  <img src={wordpress} alt="directory" width={60} />
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">wordPress</h5>
                </div>
              </div>
            </div>
            <div class="flex justify-center cursor-pointer" onClick={() => {
              window.open(
                "https://www.google.com/search?q=" +
                'site:' + link.replace("https://", "") + ' ext:log', "_blank"
              );
            }} style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              margin: "10px",

            }}>
              <div class=" bg-white max-w-sm">
                <div class="flex justify-center p-5">
                  <img src={log} alt="directory" width={60} />
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Log Files</h5>
                </div>
              </div>
            </div>
            <div class="flex justify-center cursor-pointer" onClick={() => {
              window.open(
                "https://www.google.com/search?q=" +
                'site:' + link.replace("https://", "") + ' ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup', "_blank"
              );
            }} style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              margin: "10px",

            }}>
              <div class=" bg-white max-w-sm">
                <div class="flex justify-center p-5">
                  <img src={backup} alt="directory" width={60} />
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Backup and Old Files</h5>
                </div>
              </div>
            </div>
            <div class="flex justify-center cursor-pointer" onClick={() => {
              window.open(
                "https://www.google.com/search?q=" +
                'site:' + link.replace("https://", "") + ' inurl:login', "_blank"
              );
            }} style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              margin: "10px",

            }}>
              <div class=" bg-white max-w-sm">
                <div class="flex justify-center p-5">
                  <img src={login} alt="directory" width={60} />
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Login Pages</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
    </>
  );
}

export default App;
