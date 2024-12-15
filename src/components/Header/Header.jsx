// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Header = () => {
//     return (
//         <div>
//             <nav
//                 className="relative bg-[#F3E5F5] py-4"
//                 style={{
//                     border: "5px solid",
//                     borderImage: "linear-gradient(to right, silver, lightgray) 1",
//                 }}
//             >
//                 <div className="mx-auto md:w-3/4 flex justify-between items-center px-2">
//                     {/* <h2 className='font-bold text-2xl md:w-40 w-20'>React Router</h2> */}
//                     <img className='font-bold text-2xl md:w-40 w-20' src="logo.png" alt="" />
//                     <ul className='flex gap-4 font-bold items-center'>
//                         <li className='cursor-pointer hover:underline'>
//                             <NavLink to="" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className='cursor-pointer hover:underline'>
//                             <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Personal Loan
//                             </NavLink>
//                         </li>
//                         <li className='cursor-pointer hover:underline'>
//                             <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 One Card
//                             </NavLink>
//                         </li>
//                         <li className='cursor-pointer hover:underline'>
//                             <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Saving
//                             </NavLink>
//                         </li>
//                         <li className='cursor-pointer hover:underline'>
//                             <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Checking
//                             </NavLink>
//                         </li>
//                         <li>
//                             <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black'>
//                                 <NavLink to="/github" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                     Contact Us
//                                 </NavLink>
//                             </button>
//                         </li>
//                     </ul>

//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Header





// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div>
//             <nav
//                 className="relative py-4"
//                 style={{
//                     background: "linear-gradient(to right, #7f8185, #c3c6c9)",
//                     border: "5px solid",
//                     borderImage: "linear-gradient(to right, #7f8185, #c3c6c9) 1",
//                 }}
//             >
//                 <div className="mx-auto md:w-3/4 flex justify-between items-center px-2">
//                     <img
//                         className="md:w-60 w-40"
//                         src="logo.png"
//                         alt="Logo"
//                     />
//                     <ul className="flex gap-4 font-bold items-center">
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Personal Loan
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 One Card
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Saving
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Checking
//                             </NavLink>
//                         </li>
//                         <li>
//                             <button className="bg-white hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black">
//                                 <NavLink to="/github" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                     Contact Us
//                                 </NavLink>
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Header;










// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div>
//             <nav
//                 className="relative py-4"
//                 style={{
//                     background: "linear-gradient(to right, #111827, #586fa1)",
//                     border: "5px solid",
//                     borderImage: "linear-gradient(to right, #111827, #586fa1) 1",
//                 }}
//             >
//                 <div className="mx-auto md:w-3/4 flex justify-between items-center px-2">
//                     <img
//                         className="md:w-60 w-40"
//                         src="logo.png"
//                         alt="Logo"
//                     />
//                     {/* Desktop Menu */}
//                     <ul className="hidden md:flex gap-4 font-bold items-center">
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Personal Loan
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 One Card
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Saving
//                             </NavLink>
//                         </li>
//                         <li className="cursor-pointer hover:underline">
//                             <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Checking
//                             </NavLink>
//                         </li>
//                         <li>
//                             <button className="bg-white hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black">
//                                 <NavLink to="/github" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                     Contact Us
//                                 </NavLink>
//                             </button>
//                         </li>
//                     </ul>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden flex items-center">
//                         <button onClick={toggleMenu}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Mobile Menu (Slide In from Left) */}
//             <div
//                 className={`fixed top-0 left-0 w-2/3 h-full bg-white p-4 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300 md:hidden`}
//             >
//                 <ul className="flex flex-col gap-4 font-bold">
//                     <li className="cursor-pointer hover:underline">
//                         <NavLink  onClick={toggleMenu} to="" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                             Home
//                         </NavLink>
//                     </li>
//                     <li className="cursor-pointer hover:underline">
//                         <NavLink onClick={toggleMenu} to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                             Personal Loan
//                         </NavLink>
//                     </li>
//                     <li className="cursor-pointer hover:underline">
//                         <NavLink onClick={toggleMenu} to="/about" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                             One Card
//                         </NavLink>
//                     </li>
//                     <li className="cursor-pointer hover:underline">
//                         <NavLink onClick={toggleMenu} to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                             Saving
//                         </NavLink>
//                     </li>
//                     <li className="cursor-pointer hover:underline">
//                         <NavLink onClick={toggleMenu} to="/contact" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                             Checking
//                         </NavLink>
//                     </li>
//                     <li>
//                         <button className="bg-white hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black">
//                             <NavLink onClick={toggleMenu} to="/github" className={({ isActive }) => isActive ? "text-purple-900" : "text-black"}>
//                                 Contact Us
//                             </NavLink>
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Header;







import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const menuList = [
        {
            value: '/',
            name: 'Home'
        },
        {
            name: 'Personal Loan',
            value: '/about',
        },
        {
            name: 'One Card',
            value: '/user/',
        },
        {
            name: 'Saving',
            value: '/about',
        },
        {
            name: 'Checking',
            value: '',
        }
    ]

    return (
        <div>
            <nav
                className="relative py-4"
                style={{
                    background: "linear-gradient(to right, #111827, #3c4e75)",
                    border: "5px solid",
                    borderImage: "linear-gradient(to right, #111827, #3c4e75) 1",
                }}
            >
                <div className="mx-auto md:w-3/4 flex justify-between items-center px-2">
                    <img
                        className="md:w-60 w-40"
                        src="logo.png"
                        alt="Logo"
                    />
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-4 font-bold items-center">
                        {menuList.map((item, index) => (
                            <li key={index} className="cursor-pointer hover:underline">
                                <NavLink
                                    to={item.value}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
                                            : "text-yellow-400 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"

                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <button
                                className="bg-transparent hover:bg-[transparent] py-1 px-2 rounded-lg font-bold"
                                style={{
                                    borderRadius: 50,
                                    border: "4px solid transparent",
                                    borderImage: "linear-gradient(to right, #9b59b6, #e91e63, #ffeb3b) 1",
                                }}
                            >
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
                                            : "text-yellow-400 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </button>


                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu (Slide In from Left) */}
            <div
                className={`fixed top-0 left-0 w-2/3 h-full bg-gray-900 p-4 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform ease-in-out duration-300 md:hidden`}
            >
                <ul className="flex flex-col gap-4 font-bold">
                    {['Home', 'Personal Loan', 'One Card', 'Saving', 'Checking'].map((item, index) => (
                        <li key={index} className="cursor-pointer hover:underline">
                            <NavLink
                                onClick={toggleMenu}
                                to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
                                        : "text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"
                                }
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <button className="bg-white hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black">
                            <NavLink
                                onClick={toggleMenu}
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
                                        : "text-black hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"
                                }
                            >
                                Contact Us
                            </NavLink>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
