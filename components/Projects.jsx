import React from "react";
import ProjectItem from "./Projectitem.jsx";
import Social from "../public/assets/projects/SocialNetwork.png";

export default function Projects() {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="uppercase text-xl tracking-widest text-teal-500">
                    Projects
                </p>
                <h2 className="py-4">What I&#39;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="SocialNetwork"
                        backgroundImg={Social}
                        projectUrl="/socialnetwork"
                    />
                    <ProjectItem
                        title="SocialNetwork"
                        backgroundImg={Social}
                        projectUrl="/socialnetwork"
                    />
                    <ProjectItem
                        title="SocialNetwork"
                        backgroundImg={Social}
                        projectUrl="/socialnetwork"
                    />
                    <ProjectItem
                        title="SocialNetwork"
                        backgroundImg={Social}
                        projectUrl="/socialnetwork"
                    />
                </div>
            </div>
        </div>
    );
}
