import { ArrowUpRight, Book, Bookmark, BookMarked, ChartNoAxesColumn, Dot, Heart, MousePointerClick } from "lucide-react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const jobs = [
    {
        img: "https://cdn-1.webcatalog.io/catalog/lightdash/lightdash-icon-filled-256.webp?v=1714782931208",
        title: "Senior Software Engineer",
        company: "LightDash",
        location: "Europe",
        desc: "We are looking for a Senior Software Engineer with 5+ years of experience in backend development.",
        jobType: "Full-time",
        salary: "$120,000 - $150,000 per year",
        reqSkills: ["Java", "Spring", "AWS"],
        indrusty: "Information Technology",
        experienceLevel: "Senior",
        remote: "Remote",
        url: "",
        date: "1w ago",
        bookmarked: true,
    },
    {
        img: "https://cdn-icons-png.freepik.com/512/5969/5969046.png",
        title: "Junior Frontend developer",
        company: "Apple",
        location: "USA",
        desc: "We are looking for a Senior Software Engineer with 5+ years of experience in backend development.",
        jobType: "Full-time",
        salary: "$50",
        reqSkills: ["React", "Swift"],
        indrusty: "Information Technology",
        experienceLevel: "Junior",
        remote: "Hybrid",
        url: "",
        date: "2w ago",
        bookmarked: false,
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
        title: "Senior Data analyzer",
        company: "Google",
        location: "USA",
        desc: "We are looking for a Senior Software Engineer with 5+ years of experience in backend development.",
        jobType: "Part-time",
        salary: "",
        reqSkills: ["React", "Swift"],
        indrusty: "Information Technology",
        experienceLevel: "Junior",
        remote: "On-site",
        url: "",
        date: "2w ago",
        bookmarked: false,
    },
]

export default function Joblists() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="max-w-6xl w-full grid grid-cols-3">
                    {jobs.map((job, index) => (
                        <div key={index} className="flex flex-col gap-2 border-x border-b p-2">
                            <div className="flex justify-between px-1">
                                <img src={job.img} alt="" className="w-8 h-8" />
                                <div className="text-emerald-600 group h-fit cursor-pointer transition-all duration-200">
                                    <Bookmark className="w-4 h-4 group-hover:fill-emerald-600  transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-0">
                                <div className="text-sm text-zinc-600 pt-0.5 px-1">{job.company}</div>
                                <div className="text-lg font-medium px-1">{job.title}</div>
                                <div className="flex flex-wrap pt-0.5 px-0.5 gap-1">
                                    {job.reqSkills.map((skill, index) => (
                                        <div key={index} className="px-2 py-1 bg-zinc-300/60 w-fit text-xs rounded-md text-zinc-800">{skill}</div>
                                    ))}
                                </div>
                                <div className="flex gap-1 pt-1.5 px-0.5">
                                    <div className="px-2 py-1 border border-zinc-400/50 w-fit text-xs rounded-md text-zinc-600">{job.jobType}</div>
                                    <div className="px-2 py-1 border border-zinc-400/50 w-fit text-xs rounded-md text-zinc-600">{job.remote}</div>
                                </div>

                                <div className="text-xs px-1 text-zinc-700 pt-2">{job.desc}</div>
                                <div className="flex justify-between px-1 pt-2">
                                    {job.salary.length > 0 ? (
                                        <>
                                            {job.salary.length > 5 ? (
                                                <div className="font-medium">
                                                    {job.salary}
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <div className="font-medium">{job.salary}</div>
                                                    <div className="text-xs text-zinc-600">/hr</div>
                                                </div>
                                            )}

                                        </>
                                    ) : (
                                        <div className="text-xs flex items-center text-zinc-600">Not Found</div>
                                    )}
                                    <Button className="h-7 rounded-none cursor-pointer transition-all duration-200 ">Apply</Button>
                                </div>
                            </div>
                        </div>
                    ))}




                </div >
            </div >
        </>
    )
}
