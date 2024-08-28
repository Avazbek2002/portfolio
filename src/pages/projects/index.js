import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/animatedText';
import Layout from '@/components/layout';
import { GithubIcon } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import riskManagement from '../../../public/images/projects/risk_management.jpeg';
import caliALogo from '../../../public/images/projects/CaliALogoDarkMode.png';
import football from '../../../public/images/projects/football.jpeg';
import transformer from '../../../public/images/projects/transformer_architecture.png';

const FeaturedProject = ({type, title, summary, image, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>

            <div className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={image} alt={title} className="w-full h-auto"/>
            </div>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <div className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </div>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center '>
                    {   github &&
                        <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
                    }
                    { link && link.startsWith('http') &&
                        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit the project</Link>
                    }
                    { link &&
                        <Link href={link} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Details</Link>
                    }
                </div>
            </div>
            
        </article>
    )
}

const Project = ({title, type, image, link, github}) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative '>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>

            <div className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={image} alt={title} className="w-full h-auto"/>
            </div>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <div className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </div>
                <div className='w-full mt-2 flex items-center justify-between'>
                    { link && link.startsWith('http') &&
                        <Link href={link} target="_blank" className='text-lg font-semibold'>Visit</Link>
                    }
                    { github &&
                        <Link href={github} target="_blank" className='w-8'><GithubIcon/></Link>
                    }
                </div>
            </div> 
        </article>
    )
}

const projects = () => {

    return (
        <>
            <Head>
                <title>Avazbek Isroilov | Projects Page</title>
                <meta name="Page describes the projects I have worked on"/>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="No Risk, No Story!" className='mb-16'/>

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Risk Management Software"
                                summary="Worked in a group of 6 students to develop a web application that can track and predict the likelihood of Software project failure based on its features during its development. Undertook feature engineering using the NumPy Python library, and developed a logistic regression model using the scikit-learn Python library to predict the outcome of a software project. 
                                Used Flask API to integrate the ML model with the Node.js and PostgreSQL server.
                                Final project achieved the 2nd highest grade in the cohort."
                                link={null}
                                type="Featured project"
                                image={riskManagement}
                                github="https://github.com/Spectre0911/Risk-Management-Tool"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Personal Calisthenics Mobile Application"
                                link={null}
                                type="Personal project"
                                image={caliALogo}
                                github="https://github.com/Avazbek2002/Personal-Calisthenics-Assistant-Mobile-Application"
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="How AI is changing the world of Football"
                                link="https://medium.com/warwick-artificial-intelligence/the-end-of-the-star-player-how-ai-is-changing-the-world-of-football-b4ffe23b753b"
                                type="Article"
                                image={football}
                                github={null}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Continual Learning in Transformers"
                                summary="Explored various types of Continuous Learning methods applied to Vision Transformers(ViT).
                                Applied Adaptive-Distillation-of-Adapters(ADA) to HuggingFace pre-trained ViT for image classification.
                                The approach improved the ViT prediction accuracy by 20% on 20 tasks trained sequentially."
                                link="/projects/continualLearning"
                                type="Research Project | In Progress"
                                image={transformer}
                                github={null}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects;