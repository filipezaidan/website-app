import { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import InfoSection from '../../components/InfoSection'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { InfoData } from '../../mock/InfoData'



function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            {InfoData.map((item, index) => (
                <InfoSection data={item} />
            ))}
        </>
    )
}

export default Home