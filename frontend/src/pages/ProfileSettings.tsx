import BasicInfos from "@/components/mycomponents/basicInfos";
import CoverLetters from "@/components/mycomponents/coverLetters";
import Navbar from "@/components/mycomponents/navbar";
import UploadCV from "@/components/mycomponents/uploadCV";


export default function ProfileSettings() {
    return (
        <>
            <Navbar />
            <BasicInfos />
            <UploadCV />
            <CoverLetters />
        </>
    )
}
