import { ArrowUpRight, Bookmark, ChartNoAxesColumn, Dot, Heart, MousePointerClick } from "lucide-react";
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
        salary: "$100,000 - $120,000 per year",
        reqSkills: ["React", "Swift"],
        indrusty: "Information Technology",
        experienceLevel: "Junior",
        remote: "Hybrid",
        url: "",
        date: "2w ago",
        bookmarked: false,
    },
]

export default function Joblists() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="max-w-4xl w-full flex flex-col">
                    {jobs.map((job, index) => (
                        <div key={index} className="flex flex-col border-x border-b p-2">
                            <div className="w-full  flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="h-full">
                                        <img src={job.img} className="h-12 w-12 bg-black " />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center">
                                            <div className="font-medium text-lg">{job.title}</div>
                                            <Dot className="w-5 h-5 text-zinc-600" />
                                            <div className="text-sm text-zinc-800">{job.company}</div>
                                        </div>
                                        <div className="flex gap-1 items-center pt-1">
                                            {job.reqSkills.map((skill, index) => (
                                                <div key={index} className="px-2 py-1 bg-black text-white text-xs">{skill}</div>
                                            ))}

                                        </div>

                                        <div className="text-sm text-zinc-600 pt-1">{job.desc}</div>
                                    </div>
                                </div>
                                <div className=" h-full flex gap-2 text-xs text-zinc-600">
                                <div className="text-xs h-fit font-medium px-2 py-1 border border-black">{job.experienceLevel}</div>
                                        
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            {job.bookmarked ? (
                                                <div className="flex gap-1 h-fit text-zinc-600 group  cursor-pointer p-1">
                                                    <Bookmark className="h-4 w-4 fill-amber-500 text-amber-500 transition-all duration-200" />
                                                </div>
                                            ) : (
                                                <div className="flex gap-1 h-fit text-zinc-600 group  cursor-pointer p-1">
                                                    <Bookmark className="h-4 w-4 group-hover:fill-amber-500 group-hover:text-amber-500 transition-all duration-200" />
                                                </div>
                                            )}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {job.bookmarked ? (
                                                <p>Bookmarked</p>
                                            ) : (
                                                <p>Bookmark</p>
                                            )}
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="flex justify-between pl-14 items-center">
                                <div className="flex items-center">
                                    <div className="px-2 py-1 text-xs bg-emerald-600 text-white h-fit">{job.salary}</div>
                                    <Dot className="w-5 h-5 text-zinc-600" />
                                    <div className="text-xs">{job.remote}</div>
                                </div>
                                <Button className="rounded-none h-8">Apply</Button>
                            </div>
                        </div>
                    ))}




                </div >
            </div >
        </>
    )
}
