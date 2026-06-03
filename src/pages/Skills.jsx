import React from 'react'
import { useState, useEffect, useRef } from 'react'
const SKILLS = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
];

const ROWS = [
    [
        { title: "Programming Languages", items: ["Python", "C", "C++", "Java"] },
        { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React"] },
        { title: "Databases & Tools", items: ["MySQL", "MongoDB", "Git"] },
        { title: "Frameworks & Libraries", items: ["TensorFlow", "PyTorch", "OpenCV"] },
    ],
    [
        {
            title: "Core Concepts",
            items: [
                "Data Structures & Algorithms",
                "Machine Learning",
                "Deep Learning",
                "YOLO Object Detection",
                "Explainable AI (XAI)",
            ],
        },
        {
            title: "Soft Skills",
            items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
        },
    ],
]

function Skills() {
    // const bubbles = Array.from({ length: 15 })
    const stageRef = useRef()
    useEffect(() => {
        const stage = stageRef.current
        if (!stage) return;
        const circle = Array.from(stage.querySelectorAll('.skill-item'))
        const rect = stage.getBoundingClientRect();

        const placed = []
        const isOverlapping = (x, y, size) => {
            return placed.some((p) => {
                const dx = p.x - x
                const dy = p.y - y
                const distace = Math.sqrt(dx * dx + dy * dy)
                return distace < p.size / 2 + size / 2 + 30

            })


        }
        circle.forEach((e) => {
            const size = e.offsetWidth;
            let x, y, tries = 0
            do {
                x = Math.random() * (rect.width - size)
                y = Math.random() * (rect.height - size)
                tries++
            } while (isOverlapping(x, y, size) && tries < 150)
            placed.push({ x, y, size });
            const dx = (Math.random() - 0.5) * 100;
            const dy = (Math.random() - 0.5) * 100;
            e.style.left = `${x}px`;
            e.style.top = `${y}px`;
            e.animate(
                [
                    { transform: "translate(0, 0) " },
                    { transform: `translate(${dx}px, ${dy}px) ` }
                ],
                {
                    duration: 5000,
                    iterations: Infinity,
                    direction: "alternate",
                }
            );
        })

    }, [])


    return (
        <>
            <section className='w-full  bg-black p-7 px-15 max-md:px-3'>
                <h1 className='text-emerald-400 my-2 font-bold text-2xl'>MY Skills</h1>
                <p className='text-gray-400'>✨ Technical expertise blended with creativity — explore my core competencies below.</p>
                <div className=' skills-container relative mt-9 scale-container-animation max-md:w-[90%]' ref={stageRef}>
                    {SKILLS.map((item) => (

                        <div key={item.name}
                            className='skill-item flex flex-col bg-transparent backdrop-blur-lg justify-center items-center bg-red-400 absolute animate-float rounded-full p-6.5'
                            style={{
                                width: '100px',
                                height: '100px',

                                animationDuration: `9s`,
                                // animationDelay: `${Math.random() * 5}s`,
                                // animationName:'animate-float'

                            }}
                        >

                            <img src={item.logo} alt={item.name} className='skill-img' />
                            <span>{item.name}</span>

                        </div>
                    ))}
                    {/* <div className='bg-blue-800 w-22 h-22 m-6'></div> */}
                </div>
                <div className='flex flex-wrap   justify-center gap-8  '>
                    {ROWS[0].map((item,i)=>(
                        <div className='bg-mist-950 px-6 py-2 rounded-xl w-75 hover:scale-107 transition-all duration-500'  style={{border:'1px solid rgba(8, 201, 239, 0.20)'}}>
                            <h1 className='text-white font-bold mt-5  text-xl py-2'>{item.title}</h1>
                            <ul className='py-4 px-10 list-disc '>
                                {item.items.map((e)=>(
                                    <li className='text-white hover:ml-2 hover:text-emerald-400'>{e}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                 <div className='flex flex-wrap   justify-center gap-8 mt-9 '>
                    {ROWS[1].map((item,i)=>(
                        <div className='bg-mist-950 px-6 py-2 rounded-xl w-75 hover:scale-107 transition-all duration-500'  style={{border:'1px solid rgba(8, 201, 239, 0.20)'}}>
                            <h1 className='text-white font-bold mt-5  text-xl py-2'>{item.title}</h1>
                            <ul className='py-4 px-10 list-disc '>
                                {item.items.map((e)=>(
                                    <li className='text-white font-medium hover:ml-2 hover:text-emerald-400'>{e}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Skills