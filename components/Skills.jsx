import Image from "next/legacy/image";
import React from "react";

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
                                    src="/../public/assets/skills/css.png"
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
                                    src="/../public/assets/skills/html.png"
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
                                    src="/../public/assets/skills/javascript.png"
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
                                    src="/../public/assets/skills/react.png"
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
                                    src="/../public/assets/skills/vuejs.png"
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
                                    src="/../public/assets/skills/next.png"
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
                                    src="/../public/assets/skills/nodejs.png"
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
                                    src="/../public/assets/skills/postgres.png"
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
                                    src="/../public/assets/skills/tailwind.png"
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
                                    src="/../public/assets/skills/vscode.png"
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
                                    src="/../public/assets/skills/tableplus.png"
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
