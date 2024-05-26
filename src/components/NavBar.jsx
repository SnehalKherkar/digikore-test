// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.clear();

//     navigate("/login");
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-semibold">
//           <Link to="/">File Manager</Link>
//         </h1>
//         <div className="hidden md:flex space-x-4 items-center">
//           <span className="text-white font-sans text-xl">
//             Welcome <span className="text-lg">{username}</span>{" "}
//           </span>
//           <button
//             onClick={handleLogout}
//             className="text-white hover:text-gray-300 focus:outline-none"
//             title="Log Out"
//           >
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white hover:text-gray-300 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden mt-5  flex flex-col items-start px-2 py-2 bg-gray-800 text-white right-0">
//           <span className="block text-xl mb-2 font-bold ">
//             Welcome <span className="text-lg font-semibold">{username}</span>{" "}
//           </span>
//           <button
//             onClick={() => {
//               handleLogout();
//               toggleMenu();
//             }}
//             className="w-full px-2 py-1 text-left hover:bg-gray-700 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
//               />
//             </svg>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem(`uploadedFiles_${username}`);
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">
          <Link to="/">File Manager</Link>
        </h1>
        <div className="hidden md:flex space-x-4 items-center">
          <span className="text-white font-sans text-xl">
            Welcome <span className="text-lg">{username}</span>
          </span>
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-300 focus:outline-none"
            title="Log Out"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-5 flex flex-col items-start px-2 py-2 bg-gray-800 text-white right-0">
          <span className="block text-xl mb-2 font-bold">
            Welcome <span className="text-lg font-semibold">{username}</span>
          </span>
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="w-full px-2 py-1 text-left hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
