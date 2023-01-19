import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// @ts-ignore
import ContactImg from "../public/assets/contact.jpg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-teal-500">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div>
                    <div className=" lg: w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <Image
                                className="rounded-xl hover:scale-105 ease-in duration-300"
                                src={ContactImg}
                                alt="/"
                            />
                            <div>
                                <h2 className="py-4">Denise Bamberg</h2>
                                <p>
                                    Junior Full Stack Developer based in Berlin
                                </p>
                                <p className="py-4">
                                    I am available for full-time positions.
                                    Contact me and let&#39;s talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase py-8 text-teal-500">
                                    Connect With Me
                                </p>
                                <div className="flex items-center justify-between py-4">
                                    <a
                                        href="http://"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/Deni465"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <a href="mailto:denise.bamberg@web.de">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <AiOutlineMail />
                                        </div>
                                    </a>
                                    <a
                                        href="assets/DeniseBambergCV.pdf"
                                        download
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp
                                className="text-teal-500"
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
