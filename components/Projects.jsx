import Image from "next/image";
import Link from "next/link";
import React from "react";
import Social from "../public/assets/projects/SocialNetwork.png";

export default function Projects() {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="uppercase text-xl tracking-widest text-teal-500">
                    Projects
                </p>
                <h2 className="py-4">What I&#39;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-700 to-teal-400 ">
                        <Image
                            className="rounded-xl group-hover:opacity-10"
                            src={Social}
                            alt="/"
                        />
                        <div className="">
                            <h3>Social Network</h3>
                            <p>React JS</p>
                            <Link href="/">
                                <p>More</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
