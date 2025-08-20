import { ArrowUpRight, Bookmark, ChartNoAxesColumn, Heart, MousePointerClick } from "lucide-react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Joblists() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="max-w-4xl w-full flex flex-col">
                    <div className="flex flex-col border-x border-b p-2">
                        <div className="w-full  flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img src="https://cdn-1.webcatalog.io/catalog/lightdash/lightdash-icon-filled-256.webp?v=1714782931208" className="h-12 w-12 bg-black" />
                                <div className="flex flex-col justify-center">
                                    <div className="font-medium text-lg">LightDash</div>
                                    <div className="text-sm text-zinc-600">LightDash is making an AI company to reach a lot of users.</div>
                                </div>
                            </div>
                            <div className=" h-full text-xs text-zinc-600">
                                1w ago
                            </div>
                        </div>
                        <div className="flex justify-between pl-14">
                            <div className="flex gap-4 pt-2">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="flex gap-1 group  cursor-pointer">
                                            <ChartNoAxesColumn className="h-4 w-4 text-zinc-600 group-hover:text-sky-500 transition-all duration-200" />
                                            <div className="text-xs text-zinc-600 ">459</div>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Total Views</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="flex gap-1 group  cursor-pointer">
                                            <Heart className="h-4 w-4 text-zinc-600 group-hover:fill-pink-500 group-hover:text-pink-500 transition-all duration-200" />
                                            <div className="text-xs text-zinc-600 ">12</div>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Likes</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="flex gap-1 group transition-all duration-200 cursor-pointer">
                                            <MousePointerClick className="h-4 w-4 text-zinc-600 group-hover:text-emerald-500 transition-all duration-200" />
                                            <div className="text-xs text-zinc-600 ">46</div>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Applies</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="flex gap-1 text-zinc-600 group  cursor-pointer ">
                                            <Bookmark className="h-4 w-4 group-hover:fill-amber-500 group-hover:text-amber-500 transition-all duration-200" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Bookmark</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <Button className="rounded-none h-8">Apply</Button>
                        </div>
                    </div>

                    <div className="flex flex-col border-x border-b p-2">
                        <div className="w-full  flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img src="https://cdn-icons-png.freepik.com/512/5969/5969046.png" className="h-12 w-12" />
                                <div className="flex flex-col justify-center">
                                    <div className="font-medium text-lg">Apple</div>
                                    <div className="text-sm text-zinc-600">Searching for a ui/ux designer.</div>
                                </div>
                            </div>
                            <div className=" h-full">
                                <ArrowUpRight className="h-4 w-4 text-zinc-600" />
                            </div>
                        </div>
                        <div className="flex justify-between pl-14">
                            <div className="flex gap-4 pt-2">
                                <div className="flex gap-1 group  cursor-pointer">
                                    <ChartNoAxesColumn className="h-4 w-4 text-zinc-600 group-hover:text-sky-500 transition-all duration-200" />
                                    <div className="text-xs text-zinc-600 ">15k</div>
                                </div>
                                <div className="flex gap-1 group  cursor-pointer">
                                    <Heart className="h-4 w-4 text-zinc-600 group-hover:fill-pink-500 group-hover:text-pink-500 transition-all duration-200" />
                                    <div className="text-xs text-zinc-600 ">10k</div>
                                </div>
                                <div className="flex gap-1 group transition-all duration-200 cursor-pointer">
                                    <MousePointerClick className="h-4 w-4 text-zinc-600 group-hover:text-emerald-500 transition-all duration-200" />
                                    <div className="text-xs text-zinc-600 ">4k</div>
                                </div>
                                <div className="flex gap-1 text-zinc-600 group  cursor-pointer ">
                                    <Bookmark className="h-4 w-4 group-hover:fill-amber-500 group-hover:text-amber-500 transition-all duration-200" />
                                </div>
                            </div>
                            <Button className="rounded-none h-8">Apply</Button>
                        </div>
                    </div>

                </div >
            </div >
        </>
    )
}
