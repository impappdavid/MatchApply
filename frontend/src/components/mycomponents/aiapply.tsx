import React, { useState } from 'react'
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from '../ui/button'

const frameworks = [
    { label: "Papp_David_EN.pdf", value: "pappdaviden" },
    { label: "Papp_David_HU.pdf", value: "pappdavidhu" },
]

const letters = [
    { label: "Kind", value: "kind" },
    { label: "Interesting", value: "interesting" },
]


export default function Aiapply() {
    return (
        <>
            <div className="w-full  flex justify-center mt-12">
                <div className="max-w-6xl border-x  w-full border-b">
                    <div className="p-2 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <div className="text-xl font-medium">Automatic Apply</div>
                            <div className="text-sm text-zinc-600">You can modify the filter's that which way you want to apply.</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <div className="font-medium">Do you want to personalize your CV to match the job apply?</div>
                                <ToggleGroup variant="outline" type="single" className='w-full'>
                                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                                        No
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                                        Yes
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>


                            <div className="flex flex-col gap-1 w-full">
                                <div className="font-medium">Select your CV you want to use for the apply.</div>
                                {frameworks.map((cv, index) => (
                                    <div key={index} className='w-full border  border-black p-2 text-sm cursor-pointer hover:bg-black/10'>
                                        {cv.label}
                                    </div>
                                ))}

                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <div className="font-medium">Select your Cover Letter you want to send.</div>
                                <Tabs defaultValue="letters">
                                    <TabsList>
                                        <TabsTrigger value="letters">Letters</TabsTrigger>
                                        <TabsTrigger value="random">Randomize</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="letters">
                                        <div className="flex flex-col gap-1 w-full">
                                            {letters.map((letter, index) => (
                                                <div key={index} className='w-full border flex justify-between items-center  border-black p-2 text-sm '>
                                                    {letter.label}
                                                    <div className="flex gap-2">
                                                        <Button className='rounded-none h-7 cursor-pointer bg-transparent border border-black text-black hover:bg-black/10'>Preview</Button>
                                                        <Button className='rounded-none h-7 cursor-pointer'>Select</Button>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </TabsContent>
                                    <TabsContent value="random">

                                    </TabsContent>
                                </Tabs>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
