import Image from "next/image";
import React from "react";
// @ts-ignore
import Social from "../public/assets/projects/SocialNetwork.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const socialnetwork = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={Social}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Social Network</h2>
                    <h3>React JS / Javascript</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p className="uppercase text-teal-500">Project</p>
                    <h2>Overview</h2>
                    <p className="my-4">
                        This social media project is a basic social network app
                        that allows users to log in, reset their passwords,
                        search for other users, send and accept friendship
                        requests, view their friends list and chat with other
                        users.
                    </p>
                    <button className="px-8 py-2 mt-4">Github</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> ReactJS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                PostgresSQL
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> SocketIO
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Redux
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default socialnetwork;
