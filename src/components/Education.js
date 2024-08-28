import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';
import Link from 'next/link';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:100}}
        whileInView={{y:0}}
        transition={{duration:1, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 '>
                {time} | {place}
            </span>
                <ul className="list-disc pl-5 mt-2 font-medium w-full">
                    {info.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
        </motion.div>
    </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                    type="BSc In Computer Science"
                    time="Oct 2021 - Jun 2024"
                    place="Warwick University"
                    info={
                        [
                            "Dissertation topic: Personal Calisthenics Mobile Application in iOS",
                            "Societies: Warwick Calisthenics Society, Warwick AI Society",
                            "Relevant modules: Software Engineering Project (77%), Logic and Verification (72%), Computational Physics (80%), Mathematics for Computer Scientists (75%), Database Systems (65%)"
                        ]
                    }
                />
                <Details
                    type="Deep learning and Neural Networks Certification"
                    time="Aug 2022 - Sept 2022"
                    place="deeplearning.ai"
                    info={
                        [
                            "Studied how neural networks work and build it from scratch",
                            <Link href="https://www.coursera.org/account/accomplishments/certificate/8LUND2W7PTFS" className="underline">Link to the certificate: Coursera</Link>
                        ]
                    }
                />
                <Details
                    type="GCE A-levels in Double Maths, Physics and Computer Science"
                    time="Jan 2020 - Jun 2021"
                    place="Bellerbys College"
                    info={
                        [
                            "Subjects:  A*A*A*A*",
                            "Final year project: Handwritten Text Classification Software",
                        ]
                    }
                />
                
            </ul>
        </div>
    </div>
}

export default Education;