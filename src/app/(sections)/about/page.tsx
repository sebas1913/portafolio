import React from 'react'
import ProfileCard from '@/components/profile-card/profile-card';
import AboutMe from '@/components/about-me/about-me';
import Experience from '@/components/experience/experience';
import Technologies from '@/components/technologies/technologies';
export default function About() {
    return (

        <>
            <ProfileCard />
            <Experience />
            <Technologies />
            <AboutMe />
        </>
    )
}
