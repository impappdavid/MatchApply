import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Star } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-4xl p-2 fixed border-x border-b flex justify-between items-center backdrop-blur-2xl">
                    <div className="w-20 ">
                        <img src="/logo.png" className="flex items-center justify-center h-8 w-8 cursor-pointer" onClick={() => navigate("/")} />
                    </div>
                    <div className="flex gap-3">
                        <Link to={"/"} className="hover:underline">Jobs</Link>
                        <a href="" className="hover:underline">For You</a>
                        <a href="" className="hover:underline">AI Apply</a>
                    </div>
                    <div className="w-20 flex justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <img src="/profile.jpg" className="flex items-center justify-center h-8 w-8 cursor-pointer" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => navigate("/profilesettings")}>
                                        Profile Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate("/profilesettings")}>
                                        Applied
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Bookmarks
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>

                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="flex gap-1">
                                    <Star className="text-yellow-500 fill-yellow-500" />
                                    GitHub
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

            </div>
        </>
    )
}
