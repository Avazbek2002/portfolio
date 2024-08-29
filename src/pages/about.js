import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/animatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/option2.jpeg';
import { motion, spring, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Link from 'next/link';
import profile_pic from '../../public/images/profile/real_picture.jpg';

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
       if (isInView) {
        motionValue.set(value);
       }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span> 
}

const about = () => {
    return (
        <>
            <Head>
                <title>Avazbek Isroilov | About Page</title>
                <meta name="description" content="My experience in Tech"/>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About me</h2>
                            <p className='font-medium'>
                                As a Warwick graduate and passionate software engineer with two years of experience, I thrive on building robust and elegant software solutions. 
                                My journey in tech has been marked by continuous learning and a drive to innovate, particularly in web development, iOS applications, and AI integration.
 
                            </p>
                            <p className='my-4 font-medium'>
                                My professional path has been marked by immersive experiences in multiple tech startups, 
                                fueling my enthusiasm for the fast-paced, innovative startup ecosystem. 
                                This exposure has honed my ability to wear multiple hats, adapt quickly, and contribute meaningfully to rapidly evolving projects.

                            </p>
                            <p className="font-medium">
                                Beyond the world of code, I&apos;m an accomplished calisthenics athlete. 
                                Mastering advanced skills like the front lever, human flag, and muscle-ups has instilled in me a sense of discipline and commitment to a healthy lifestyle. 
                                This passion even influenced my final year dissertation project: <Link className="underline" href="https://github.com/Avazbek2002/Personal-Calisthenics-Assistant-Mobile-Application">Personal Calisthenics Mobile Application</Link>.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                            <Image
                                src={profile_pic} alt="my profile picture" className='w-full h-auto rounded-2-xl'
                            >
                            </Image>
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={5}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                            </div>
                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </Layout>
            </main>
        </>
    );
}

export default about;