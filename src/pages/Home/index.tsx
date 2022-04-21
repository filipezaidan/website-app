import { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import InfoSection from '../../components/InfoSection'
import Navbar from '../../components/Navbar'
import Services from '../../components/Services'
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
            <Services />
        </>
    )
}

export default Home