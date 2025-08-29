import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function UploadCV() {

    return (
        <>
            <div className="w-full  flex justify-center">
                <div className="max-w-6xl border-x  w-full border-b">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full "
                        defaultValue="item-1"

                    >
                        <AccordionItem value="item-1" className="w-full">
                            <AccordionTrigger className="w-full px-2 cursor-pointer">CV Upload</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4  text-balance">
                                <div className="w-full p-2 flex flex-col gap-2">
                                    
                                    <div className="">
                                        <Input className="border-black rounded-none" type="file" />
                                    </div>
                                    
                                    <div className="w-full">
                                        <Button className="rounded-none cursor-pointer w-full">Upload</Button>
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
