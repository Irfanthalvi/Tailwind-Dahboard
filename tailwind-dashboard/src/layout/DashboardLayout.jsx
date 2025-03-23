import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Info, Briefcase, Mail } from "lucide-react";
import { User } from "lucide-react"; //
import { IoMoonOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { LuMessagesSquare } from "react-icons/lu";

const DashboardLayout = ({ children }) => {
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

    const toggleHomeDropdown = () => {
        setIsHomeDropdownOpen((prev) => !prev);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    // Sidebar state: open or closed
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // Track if the current viewport is mobile (<768px)
    const [isMobile, setIsMobile] = useState(true);

    // Set the initial sidebar state based on screen width and update on resize.
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobile(false);
                setIsSidebarOpen(true); // On laptop/desktop, open by default.
            } else {
                setIsMobile(true);
                setIsSidebarOpen(false); // On mobile, closed by default.
            }
        };

        // Initial check
        handleResize();
        // Update on resize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Toggle the sidebar open/closed
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        // <div className="rounded-lg border border-gray-300">
        <div className="h-screen flex ">
            {/* Overlay: Only on mobile when the sidebar is open */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}
            {/* Sidebar */}
            <div
                className={`fixed left-0 z-50 p-4 border-r bg-white border-r-gray-300 transition-transform duration-300 ease-in-out h-screen overflow-y-auto ${isSidebarOpen ? "translate-x-0 w-[300px]" : "-translate-x-full w-[300px]"} scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
                style={{
                    scrollbarWidth: "thin", // For Firefox
                    scrollbarColor: "rgba(0, 0, 0, 0.1) transparent", // For Firefox
                }}
            >
                <h2 className="text-xl font-bold flex items-center gap-2 py-4 pr-4">
                    <HiOutlineSquare3Stack3D
                        size={35}
                        className="p-2 bg-blue-500 text-white rounded-lg"
                    />
                    <span className="text-blue-500">My Dashboard</span>
                </h2>
                {/* <div className="w-full border-b border-gray-300"></div> */}
                <ul className="space-y-3 pt-4">
                    <p>Home</p>
                    <ul className="max-h-[100px] overflow-y-auto border-l border-black rounded-md relative backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <li>
                            <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition ${isActive ? "text-blue-500" : ""}`}>
                                <Mail size={20} />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition ${isActive ? "text-blue-500" : ""}`}>
                                <Mail size={20} />
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition ${isActive ? "text-blue-500" : ""}`}>
                                <Mail size={20} />
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition ${isActive ? "text-blue-500" : ""}`}>
                                <Mail size={20} />
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <p>Page</p>
                    <li className="relative">
                        {/* Main NavLink (Clickable & Navigates) */}
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `flex items-center justify-between py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition w-full 
            ${isActive ? "text-blue-500" : ""}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <Home size={20} />
                                <span>Service</span>
                            </div>

                            <button onClick={toggleDropdown}>
                                {isDropdownOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                            </button>
                        </NavLink>

                        {/* Dropdown Menu with Smooth Animation */}
                        <ul
                            className={`pl-6 mt-1 overflow-hidden transition-all duration-300 ease-in-out transform 
        ${isDropdownOpen ? "max-h-[200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
                        >
                            <li>
                                <NavLink to="/" className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 rounded-md transition">
                                    Child 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 rounded-md transition">
                                    Child 2
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="relative">
                        {/* Main NavLink (Navigates Properly) */}
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `flex items-center justify-between py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition w-full 
            ${isActive ? "text-blue-500" : ""}`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <LuMessagesSquare size={20} />
                                <span>Contact</span>
                            </div>

                            <button onClick={toggleHomeDropdown}>
                                {isHomeDropdownOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                            </button>
                        </NavLink>

                        {/* Dropdown Menu with Smooth Animation */}
                        <ul
                            className={`pl-6 mt-1 overflow-hidden transition-all duration-300 ease-in-out transform 
        ${isHomeDropdownOpen ? "max-h-[200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
                        >
                            <li>
                                <NavLink to="/" className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 rounded-md transition">
                                    Child 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 rounded-md transition">
                                    Child 2
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <p>Element</p>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition ${isActive ? "text-blue-500" : ""}`}
                        >
                            <Info size={20} />
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/services"
                            className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition ${isActive ? "text-blue-500" : ""}`}
                        >
                            <Briefcase size={20} />
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition ${isActive ? "text-blue-500" : ""}`}
                        >
                            <Mail size={20} />
                            Contact
                        </NavLink>
                    </li>

                </ul>



                {/* (Additional sidebar items go here) */}
            </div>
            {/* Main Content Area */}
            <div className={`flex flex-col flex-1 transition-all duration-300 ${!isMobile && isSidebarOpen ? "ml-[300px]" : "ml-0"}`}>
                {/* Navbar */}
                <div className="flex-1 flex flex-col h-screen">
                    {/* <div className="fixed top-0 left-0 right-0 h-[75px] w-full flex items-center justify-between bg-white border-b border-gray-300 px-4 z-50"> */}
                    <div className="flex items-center justify-between border-b border-b-gray-200 h-[75px] px-4 flex-row-reverse">
                        <div className="flex space-x-4 flex-wrap">
                            <Link
                                to="/"
                                className="w-10 h-10 flex items-center justify-center bg-gray-200 text-black rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                            >
                                <IoMoonOutline size={20} />
                            </Link>
                            <Link
                                to="/"
                                className="w-10 h-10 flex items-center justify-center bg-gray-200 text-black rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                            >
                                <LuBell size={20} />
                            </Link>
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-auto h-10 flex items-center space-x-2 text-black px-4 rounded-full transition-all duration-300 transform hover:scale-110 "
                                >
                                    <div className="bg-gray-200 p-2 rounded-full">
                                        <User size={30} />
                                    </div>
                                    <span className="text-sm font-medium flex items-center">
                                        IRFAN ALI
                                        <FaChevronDown className={`ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                                    </span>

                                </button>

                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                                        <Link to="/" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                                            <CgProfile size={20} />
                                            <span>Profile</span>
                                        </Link>
                                        <Link to="/" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                                            <IoSettingsOutline size={20} />
                                            <span>Settings</span>
                                        </Link>
                                        <hr className="border-gray-200" />
                                        <Link to="/login" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                                            <HiArrowLeftStartOnRectangle size={20} />
                                            <span>Logout</span>
                                        </Link>
                                    </div>

                                )}
                            </div>

                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleSidebar}
                                className="w-12 h-12 text-2xl border-2 border-gray-300 py-2 px-3 rounded-lg transition duration-300 active:scale-95 flex items-center justify-center"
                            >
                                ☰
                            </button>
                            {/* <input
                                type="text"
                                placeholder="🔍     Search..."
                                className="w-30 h-12 border-2 border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            /> */}
                        </div>

                    </div>
                    <div className="flex-1 p-6 overflow-auto">
                        {children}
                    </div>
                </div>

            </div>
        </div>
        // </div>
    );
};

export default DashboardLayout;
