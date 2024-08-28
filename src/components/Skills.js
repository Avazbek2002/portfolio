import React from 'react';

import {
    SiPython,
    SiNodedotjs,
    SiNextdotjs,
    SiIos,
    SiSwift,
    SiFirebase,
    SiPostgresql,
    SiJavascript,
    SiTypescript,
    SiPandas,
    SiNumpy,
    SiPytorch,
    SiScikitlearn
} from 'react-icons/si';

import {
    FaJava,
    FaReact
} from 'react-icons/fa';

import {motion} from 'framer-motion';


const skills = {
    title: "My skills",

    languageList : [ 
        {
            icon: <FaJava className='w-35 h-35'/>,
            name: "Java"
        },
        {
            icon: <SiPython/>,
            name: "Python"
        },
        {
            icon: <SiSwift/>,
            name: "Swift"
        },
        {
            icon: <SiJavascript/>,
            name: "JavaScript"
        },
        {
            icon: <SiTypescript/>,
            name: "TypeScript"
        }
    ],

    frameworkList: [
        {
            icon: <SiNodedotjs/>,
            name: "Nodejs"
        },
        {
            icon: <SiNextdotjs/>,
            name: "Nextjs"
        },
        {
            icon: <SiIos/>,
            name: "iOS Dev"
        },
        {
            icon: <SiFirebase/>,
            name: "Firebase"
        },
        {
            icon: <SiPostgresql/>,
            name: "PostgreSQL"
        },
        {
            icon: <FaReact/>,
            name: "ReactJS"
        }
    ],
    libraryList: [
        {
            icon: <SiPandas/>,
            name: "Pandas"
        },
        {
            icon: <SiNumpy/>,
            name: "NumPy"
        },
        {
            icon: <SiPytorch/>,
            name: "PyTorch"
        },
        {
            icon: <SiScikitlearn/>,
            name: "ScikitLearn"
        }
    ]
}

const SkillGrid = ({list}) => {
    return (
      <div className="grid grid-cols-6 gap-4 mx-auto items-center justify-center">
        {list.map((skill, index) => (
          <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center p-4">
            <motion.div 
                className="w-full h-full rounded-2xl border-2 border-solid border-dark bg-light flex flex-col items-center justify-center"
                whileHover={{scale:1.1}}
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                {React.cloneElement(skill.icon, { className: "w-20 h-20 mb-2" })}
                <p className="text-center mt-2">{skill.name}</p>
            </motion.div>
          </div>
        ))}
      </div>
    );
  };

const Skills = () => {
    return (
        <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <h3 className='font-bold text-4xl mt-8 ml-5 w-full text-start'>Languages</h3>
            <SkillGrid list={skills.languageList}/>
        <h3 className='font-bold text-4xl mt-8 ml-5 w-full text-start'>Frameworks</h3>
            <SkillGrid list={skills.frameworkList}/>
        <h3 className='font-bold text-4xl mt-8 ml-5 w-full text-start'>Libraries</h3>
            <SkillGrid list={skills.libraryList}/>
        </>
    )
}

export default Skills;