import { motion } from "framer-motion"
import { fadeIn } from "../utils/animation.ts"
import { IconGitMerge } from "@tabler/icons-react"

const Projects = () => {

    const projects = [
        {
            title: "Sabin UI",
            description: "A UI library for React & vanilla JavaScript",
            sourceCode: "https://github.com/maybesabin/SabinUI",
            livePreview: "https://sabinui.vercel.app/"
        },
        {
            title: "Organic Karnali",
            description: "e-commerce site with cart & checkout functionality",
            sourceCode: "https://github.com/E-pravidi-Web-Dev/organickarnali_frontend",
            livePreview: "https://organickarnalifrontend.web.app/"
        },
        {
            title: "SwiftOps",
            description: "An AI SaaS-themed landing page",
            sourceCode: "https://github.com/maybesabin/SwiftOps",
            livePreview: "https://swiftops.vercel.app/"
        },
        {
            title: "Crypto Landing Page",
            description: "A crypto app landing page",
            sourceCode: "https://github.com/maybesabin/Crypto-Website",
            livePreview: "https://crypto-website-sabin.vercel.app/"
        },
        {
            title: "Trendora",
            description: "An e-commerce website",
            sourceCode: "https://github.com/maybesabin/Trendora-Ecommerce",
            livePreview: "https://trendora-shop.vercel.app/"
        },
        {
            title: "Apple Academy",
            description: "A website for a local Montessori school",
            sourceCode: "https://github.com/maybesabin/Apple-Academy",
            livePreview: "https://apple-academy-iota.vercel.app/"
        },
        {
            title: "Old Portfolio",
            description: "my old portfolio website",
            sourceCode: "https://github.com/maybesabin/Portfolio-Latest",
            livePreview: "https://sxbin.netlify.app/"
        }
    ];


    return (
        <div className="w-full flex flex-col items-start gap-3 mt-4">
            <motion.h2
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.17 }}
                className="md:text-xl text-base font-semibold">Projects
            </motion.h2>

            <div className="flex flex-col gap-3 w-full">
                {projects.map((project, index) => (
                    <motion.div
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={{ ...fadeIn.transition, delay: 0.17 * (index + 1) }}
                        key={index}
                        className="w-full flex justify-between md:items-start items-center gap-2"
                    >
                        <div className="flex md:flex-row flex-col gap-1">
                            <a href={project.livePreview} target="_blank" className="md:text-sm text-xs transition-all">
                                {index + 1}.&nbsp; <span className="hover:text-yellow-400 transition-all underline cursor-pointer">{project.title}&nbsp;</span>
                            </a>
                            <p className="md:text-sm text-xs text-neutral-400 lowercase">{project.description}</p>
                        </div>
                        <a href={project.sourceCode} target="_blank">
                            <IconGitMerge className="md:size-4 size-3 cursor-pointer hover:text-yellow-400 transition-all" title="Source Code" />
                        </a>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects