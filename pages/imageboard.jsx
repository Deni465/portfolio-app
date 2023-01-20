import Image from "next/image";
import React from "react";
// @ts-ignore
import Imageboard from "../public/assets/projects/imageboard.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const imageboard = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
                <Image
                    // priority={true}
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={Imageboard}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Imageboard</h2>
                    <h3>React JS / Javascript</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p className="uppercase text-teal-500">Project</p>
                    <h2>Overview</h2>
                    <p className="my-4">
                        This imageboard project is a platform where users can
                        upload images, which will be prominently displayed. When
                        an image is clicked, a pop-up window opens, displaying
                        the title and description of the image, as well as
                        allowing users to view and leave comments. The platform
                        allows for easy interaction and discussion about the
                        shared images.
                    </p>
                    <Link
                        href={"https://github.com/Deni465/imageboard"}
                        target={"_blank"}
                    >
                        <button className="px-8 py-2 mt-4">Github</button>
                    </Link>
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
                                <RiRadioButtonFill className="pr-1" /> AWS-S3
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

export default imageboard;
