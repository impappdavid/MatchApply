import { Dot } from "lucide-react";
import { Button } from "../ui/button";

export default function JobComponent() {
    return (
        <>
            <div className="w-full  flex justify-center mt-12">
                <div className="max-w-4xl border-x  w-full border-b">
                    <div className="flex flex-col">
                        <div className="w-full bg-black max-h-36 flex justify-center py-2">
                            <img src="https://cdn-icons-png.freepik.com/512/5969/5969046.png" alt="" className="max-h-34" />
                        </div>
                        <div className="px-2 pt-2 flex justify-between">
                            <div className="">
                                <div className="text-2xl font-medium">Apple</div>
                                <div className="flex items-center">
                                    <div className="text-lg font-normal">Junior Frontend developer</div>
                                    <Dot className="w-5 h-5 text-zinc-600" />
                                    <div className="text-xs h-fit font-medium px-2 py-1 border w-fit border-black">Remote</div>
                                </div>

                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <Button className="rounded-none cursor-pointer">Apply</Button>
                                <div className="text-xs h-fit font-medium px-2 py-1 border w-fit border-black">Senior</div>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center pt-1 px-2 pb-2">
                            <div className="px-2 py-1 bg-black text-white text-sm">Java</div>
                            <div className="px-2 py-1 bg-black text-white text-sm">Swift</div>
                            <div className="px-2 py-1 bg-black text-white text-sm">AWS</div>
                        </div>
                        <div className=" px-2 pb-2 text-zinc-600">
                            We are looking for a Senior Software Engineer with 5+ years of experience in backend development.
                        </div>
                        <div className="px-2 pb-2">
                            <div className="px-2 py-1 text-xs w-fit bg-emerald-600 text-white h-fit">$120.000 - $150.000 per year</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
