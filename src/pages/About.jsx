
import React from 'react'
import Education from '../component/Education'

function About() {
  return (
    <>
    <section className='about-page flex items-center bg-black p-5'>
        <div className='about-section bg-[#ffffff0a] p-5'>
            <h1 className='text-4xl text-cyan-500 my-5 font-bold'>About Me</h1>
         <span className='text-lg leading-2 font-[1.1rem]'>
  Hi, I’m <strong>Nagendra Singh</strong> — a passionate Full Stack Developer who enjoys building modern, responsive web applications and transforming ideas into impactful digital experiences. I’m deeply interested in web technologies, software development, and solving real-world problems through clean and efficient code.
  <br />
  <br />

  Beyond coding, I enjoy practicing Data Structures & Algorithms, exploring new technologies, and experimenting with UI/UX design and interactive user experiences. I believe that great software should not only work efficiently but also provide an intuitive and enjoyable experience for users.
  <br />
   <br />

  3rd-year BCS (Information Technology) student with hands-on experience in Full Stack Web Development. Proficient in JavaScript, React, Node.js, HTML, CSS, MongoDB, MySQL, Git, Python, C, C++, and Java. Continuously strengthening problem-solving skills through DSA practice and personal projects. Seeking opportunities to contribute to real-world software development projects and grow as a software engineer.
  <br />
</span>


            
                <h1 className='text-3xl mt-15 text-blue-400 my-5 font-bold'>Education</h1>
                <div>
               <Education course={'3rd Year BSC — Information Technology'}
               school={'KD College (Mumbai University)'}
               score={'3rd Year (Pursuing) | GPA: 9.1'}
               year={'2024 – 2027'}
               city={' Thane, Maharashtra'}
               logo={<i class="fa-solid fa-building-columns"></i>}/>
               <Education course={'Higher Secondary Education (12th)'}
               school={'R.K Talreja College'}
               score={'Percentage: 86%'}
               year={'Completed in 2024'}
               city={'Thane, Maharashtra'}
               logo={<i class="fa-sharp fa-solid fa-user-graduate"></i>}/>
               <Education course={'Secondary Education (10th)'}
               school={'K.S.P Jai Hind High School'}
               score={'Percentage: 81%'}
               year={'Completed in 2022'}
               city={'Thane, Maharashtra'}
               logo={<i class="fa-solid fa-school"></i>}/>
                </div>
        </div>
    </section>
    </>
  )
}

export default About
