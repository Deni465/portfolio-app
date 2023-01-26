import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import Tealit from "../public/assets/tealit.jpg";

export default function About() {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-teal-500">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-4 text-gray-600">
                        As an experienced office manager, I have had the
                        privilege of working for a diverse range of companies
                        across various industries such as job advertisement,
                        3D-printing, co-working space, and media company /
                        agency. In addition to my primary role, I have also
                        taken on side jobs in retail, grocery store and club
                        settings. This experience has given me a unique
                        perspective and the ability to adapt to new environments
                        quickly. My interest in understanding the inner workings
                        of a business has led me to seek out opportunities to
                        gain hands-on experience.
                    </p>
                    <p className="py-4 text-gray-600">
                        I have decided to take on the challenge of learning
                        coding through a bootcamp. I am excited to bring my
                        diverse background and passion for learning to this new
                        challenge and look forward to the opportunities it will
                        bring. I am determined to succeed in this new field and
                        am eager to apply my skills in a professional setting.
                    </p>
                    <Link href="/#projects">
                        <p className="py-4 text-gray-600 underline cursor-pointer">
                            Check Out My Latest Projects
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl" src={Tealit} alt="/" />
                </div>
            </div>
        </div>
    );
}
