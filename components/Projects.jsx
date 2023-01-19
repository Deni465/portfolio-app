import React from "react";
import ProjectItem from "./Projectitem.jsx";
// @ts-ignore
import Social from "../public/assets/projects/SocialNetwork.png";
// @ts-ignore
import Imageboard from "../public/assets/projects/imageboard.png";
// @ts-ignore
import Recipe from "../public/assets/projects/recipeapp.png";
// @ts-ignore
import Petition from "../public/assets/projects/petition.png";

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
                        title="RecipeApp"
                        backgroundImg={Recipe}
                        projectUrl="/recipeapp"
                    />
                    <ProjectItem
                        title="SocialNetwork"
                        backgroundImg={Social}
                        projectUrl="/socialnetwork"
                    />
                    <ProjectItem
                        title="Imageboard"
                        backgroundImg={Imageboard}
                        projectUrl="/imageboard"
                    />
                    <ProjectItem
                        title="Petition"
                        backgroundImg={Petition}
                        projectUrl="/petition"
                    />
                </div>
            </div>
        </div>
    );
}
