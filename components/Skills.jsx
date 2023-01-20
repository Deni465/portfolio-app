import Image from "next/image";
import React from "react";
// @ts-ignore
import CSS from "../public/assets/skills/css.png";
// @ts-ignore
import HTML from "../public/assets/skills/html.png";
// @ts-ignore
import javascript from "../public/assets/skills/javascript.png";
// @ts-ignore
import Next from "../public/assets/skills/next.png";
// @ts-ignore
import Nodejs from "../public/assets/skills/nodejs.png";
// @ts-ignore
import Postgres from "../public/assets/skills/postgres.png";
// @ts-ignore
import react from "../public/assets/skills/react.png";
// @ts-ignore
import Tableplus from "../public/assets/skills/tableplus.png";
// @ts-ignore
import Tailwind from "../public/assets/skills/tailwind.png";
// @ts-ignore
import Vscode from "../public/assets/skills/vscode.png";
// @ts-ignore
import Vuejs from "../public/assets/skills/vuejs.png";

export default function Skills() {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-teal-500">
                    Skills
                </p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={CSS}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={HTML}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={javascript}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={react}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>ReactJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Vuejs}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>VueJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Next}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Nodejs}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NodeJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Postgres}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PostgresSQL</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Tailwind}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Vscode}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Visual Studio Code</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={Tableplus}
                                    width="64"
                                    height="64"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TablePlus</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
