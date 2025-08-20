import { useState } from "react"
import { Button } from "../ui/button"

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
                            <div className="h-8 w-8 bg-black"></div>
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
