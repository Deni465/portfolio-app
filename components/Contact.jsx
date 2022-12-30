import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../public/assets/contact.jpg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export const Contact = () => {
    return (
        <div className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-teal-500">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/*left*/}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <Image
                                className="rounded-xl hover:scale-105 ease-in duration-300"
                                src={ContactImg}
                                alt="/"
                            />
                            <div>
                                <h2 className="py-4">Denise Bamberg</h2>
                                <p>Junior Full Stack Developer</p>
                                <p className="py-4">
                                    I am available for full-time positions.
                                    Contact me and let&#39;s talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase py-8">
                                    Connect With Me
                                </p>
                                <div className="flex items-center justify-between py-4">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*right*/}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Name
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Phone Number
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        E-Mail
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300"
                                        rows={10}
                                    ></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send
                                </button>
                            </form>
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