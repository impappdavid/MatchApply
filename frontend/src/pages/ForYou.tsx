import Joblists from '@/components/mycomponents/joblists'
import Navbar from '@/components/mycomponents/navbar'

export default function ForYou() {
    return (
        <>

            <Navbar />
            <div className="mt-12">
                <Joblists />
            </div>
        </>
    )
}
