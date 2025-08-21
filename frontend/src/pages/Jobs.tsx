import Filter from '@/components/mycomponents/filter'
import Joblists from '@/components/mycomponents/joblists'
import Navbar from '@/components/mycomponents/navbar'

export default function Jobs() {
    return (
        <>
            <Navbar />
            <Filter />
            <Joblists />
        </>
    )
}
