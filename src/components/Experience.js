import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink} target={"_blank"} className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 '>
                {time} | {address}
            </span>
                <ul className="list-disc pl-5 mt-2 font-medium w-full">
                    {work.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
        </motion.div>
    </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
                position="Software Engineer Intern"
                company="Echo AI"
                companyLink="https://www.withecho.ai/"
                time="July 2024 - August 2024"
                address="London Area, UK"
                work={[
                    "Worked on Chrome extension backend and documentation, using tools like Deepgram, Twilio, ChatGPT API, and Swagger API.",
                    "Developed a website using Next.js, React, and Firestore.",
                    "Gained experience in customer outreach through cold emailing and cold calling."
                ]}
            />

            <Details
                position="iOS Developer Intern"
                company="Pause Parenting"
                companyLink="https://www.mypause.org/"
                time="Dec 2023 - Jan 2024"
                address="Coventry, UK"
                work={[
                    "Worked on parenting application PAUSE.",
                    "Learned how to use SwiftUI to design the UI of the application.",
                    "Gained experience in working a Scrum software development methodology"
                ]}
            />

            <Details
                position="Undergraduate Research Internship in ML (URSS)"
                company="Warwick University DCS"
                companyLink="https://warwick.ac.uk/fac/sci/dcs/"
                time="July 2023 - Sept 2023"
                address="Coventry, UK"
                work={[
                    "Explored various types of Continuous Learning methods applied to Vision Transformers(ViT).",
                    "Applied Adaptive-Distillation-of-Adapters(ADA) to HuggingFace pre-trained ViT for image classification.",
                    "The approach improved the ViT prediction accuracy by 20% on 20 tasks trained sequentially."
                ]}
            />
            </ul>
        </div>
    </div>
}

export default Experience;