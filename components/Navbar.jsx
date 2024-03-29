import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
// @ts-ignore
import Dbwhite from "../public/assets/dbwhite.png";
// @ts-ignore
import Db from "../public/assets/db.png";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [src, setSrc] = useState(Db);
    const [linkColor, setLinkColor] = useState("#1f2937");
    const router = useRouter();

    useEffect(() => {
        if (
            router.asPath === "/socialnetwork" ||
            router.asPath === "/imageboard" ||
            router.asPath === "/recipeapp" ||
            router.asPath === "/petition"
        ) {
            setSrc(Dbwhite);
            setLinkColor("#ecf0f3");
        } else {
            setSrc(Db);
            setLinkColor("#1f2937");
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div
            className={
                shadow
                    ? "backdrop-blur fixed w-full h-20 shadow-xl z-[100]"
                    : "backdrop-blur fixed w-full h-20 z-[100]"
            }
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image
                        src={src}
                        alt="/"
                        width="100"
                        height="50"
                        priority={true}
                    />
                </Link>

                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className="hidden md:flex"
                    >
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-b-teal-500">
                                Home
                            </li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-b-teal-500">
                                About
                            </li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-b-teal-500">
                                Skills
                            </li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-b-teal-500">
                                Projects
                            </li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b hover:border-b-teal-500">
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div
                        onClick={handleNav}
                        className="md:hidden cursor-pointer"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                <Image
                                    src={src}
                                    width="70"
                                    height="35"
                                    alt="/"
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&#39;s build something great together
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm"
                                >
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-teal-500">
                                Let&#39;s connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a
                                    href="https://www.linkedin.com/in/denise-bamberg-b07b42161/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/Deni465"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                </a>
                                <a href="mailto:denise.bamberg@web.de">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                </a>
                                <a href="assets/DeniseBambergCV.pdf" download>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
