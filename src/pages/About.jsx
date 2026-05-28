import React from 'react' //more work on this file

function About() {
  return (
    <>
    <section className='about-page flex items-center bg-black p-5'>
        <div className='about-section bg-[#ffffff0a] p-5'>
            <h1 className='text-4xl text-cyan-500 my-5 font-bold'>About Me</h1>
            <span className='text-lg leading-2 font-[1.1rem]'>
                Hi, I’m <strong>Kunj Desai</strong>  — an aspiring Artificial Intelligence Engineer and Machine Learning enthusiast who loves turning ideas into intelligent systems. I’m deeply fascinated by how data and algorithms can shape the future of healthcare, automation, and creativity in technology.<br/>
    <br />
Beyond code, I enjoy exploring design, experimenting with motion and interaction, and blending artistic creativity with technical precision. My goal is to build solutions that not only perform — but also inspire.<br/>
<br />
4th-year B.Tech AI Engineering student with hands-on experience in ML & DL Projects. Proficient in Python, scikit-learn, PyTorch, TensorFlow and data preprocessing. Seeking internship opportunities to contribute to impactful AI solutions.<br/>
            </span>


            
                <h1 className='text-3xl mt-15 text-cyan-500 my-5 font-bold'>Education</h1>
                <div className='flex py-17 px-10 justify-center'>
                    <i class="fa-solid fa-building-columns"></i>
                    <div className='flex flex-col text-[#0fff]'>
                        <h1 className='text-2xl mt-15 text-cyan-500 my-5 font-bold' >B.Tech in Artificial Intelligence and Data Science</h1>
                        <p className='text-white'><span className='font-bold'>S.C.E.T (Sarvajanik University)</span>  — Surat, Gujarat</p>
                        <span>4th Year (Pursuing) | GPA: 9.0</span>
                        <span>2022 – 2026</span>
                    </div>
                </div>
            
        </div>
    </section>
    </>
  )
}

export default About
