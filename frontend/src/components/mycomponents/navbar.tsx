import { useState } from "react"
import { Button } from "../ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    const [isAuth, setIsAuth] = useState(true)
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-4xl p-2 fixed border-x border-b flex justify-between items-center">
                    <div className="w-20 ">
                        <div className="flex items-center justify-center h-8 w-8 bg-black text-white">MA</div>
                    </div>
                    <div className="flex gap-3">
                        <a href="" className="hover:underline">Jobs</a>
                        <a href="" className="hover:underline">For You</a>
                        <a href="" className="hover:underline">Updates</a>
                    </div>
                    <div className="w-20 flex justify-end">
                        {isAuth ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className="h-8 w-8 bg-black hover:cursor-pointer"></div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Profile
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Billing
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Support Me</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Log out
                                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Button className="h-8 rounded-none">Sign In</Button>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}
