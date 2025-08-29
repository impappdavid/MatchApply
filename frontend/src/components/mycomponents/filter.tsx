import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "../ui/input"
import { MultiSelect, type Option } from "@/components/ui/multi-select"
import { useState } from "react"
import { Button } from "../ui/button"

const frameworks: Option[] = [
    { label: "Any Time", value: "anytime" },
    { label: "Past moth", value: "pastmonth" },
    { label: "Past week", value: "pastweek" },
    { label: "Past 24 hours", value: "pastday" },
]

const experience: Option[] = [
    { label: "Internship", value: "internship" },
    { label: "Entry level", value: "entrylevel" },
    { label: "Mid level", value: "midlevel" },
    { label: "Senior level", value: "seniorlevel" },
    { label: "Director", value: "director" },
    { label: "Executive", value: "executive" },
]

const remote: Option[] = [
    { label: "On-site", value: "onsite" },
    { label: "Hybrid", value: "hybrid" },
    { label: "Remote", value: "remote" },
]


export default function Filter() {
    const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([])
    const [selectedExperience, setSelectedExperiences] = useState<string[]>([])
    const [selectedRemote, setSelectedRemote] = useState<string[]>([])

    return (
        <>
            <div className="w-full  flex justify-center mt-12">
                <div className="max-w-6xl border-x  w-full border-b">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full "
                        defaultValue="item-1"
                        
                    >
                        <AccordionItem value="item-1" className="w-full">
                            <AccordionTrigger className="w-full px-2 cursor-pointer">Filter</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4  text-balance">
                                <div className="w-full p-2 flex flex-col gap-2">
                                    <Input className="border-black rounded-none" placeholder="Title, Skill or Company" />
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        <MultiSelect
                                            options={frameworks}
                                            selected={selectedFrameworks}
                                            onChange={setSelectedFrameworks}
                                            placeholder="Date posted"
                                            className="rounded-none bg-transparent border-black"
                                        />

                                        <MultiSelect
                                            options={experience}
                                            selected={selectedExperience}
                                            onChange={setSelectedExperiences}
                                            placeholder="Experience level"
                                            className="rounded-none bg-transparent border-black"
                                        />

                                        <MultiSelect
                                            options={remote}
                                            selected={selectedRemote}
                                            onChange={setSelectedRemote}
                                            placeholder="Remote"
                                            className="rounded-none bg-transparent border-black col-span-2 md:col-span-1"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button className="rounded-none bg-transparent border border-black text-black hover:bg-black/10 transition-all duration-200 cursor-pointer">Advanced Filter</Button>
                                        <Button className="rounded-none cursor-pointer">Show results</Button>
                                    </div>

                                </div>
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>
            </div>
        </>
    )
}
