import Image from "next/image";
import React from "react";
import Tealit from "../public/assets/tealit.jpg";

export default function About() {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-teal-500">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-4 text-gray-600">
                        I recently graduated from Spiced Academy, as a Fullstack
                        Developer. In several projects (Petition, Imageboard,
                        Social Network) we prove, what we&#39;ve learned so far.
                    </p>
                    <p className="py-4 text-gray-600">
                        Now I want to show the world my new skills, sharpen and
                        improve the ones I have, learn some new ones and
                        contribute to the companies.
                    </p>
                    <p className="py-4 text-gray-600 underline cursor-pointer">
                        Check Out My Latest Projects
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl" src={Tealit} alt="/" />
                </div>
            </div>
        </div>
    );
}
