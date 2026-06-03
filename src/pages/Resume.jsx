import React from 'react'

function Resume() {
  const skills=[
              "Python",
              "C",
              "C++",
              "Java",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "OpenCV",
              "YOLO",
              "Streamlit",
              "React",
              "MySQL",
              "MongoDB",
              "Git",
              "NLP",
              "Explainable AI (XAI)",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
            ]
  return (
    <section className='resume-page flex bg-black p-5'>
        <div className='resume-section bg-[#ffffff0a] '>
            <h1 className='text-4xl text-blue-400 my-8 font-bold'>📄 Resume</h1>
             <p className=' text-gray-400'>A quick glance at my journey.</p>
             <div className='flex bg-[#FFFFFF0D] p-5 rounded-lg mt-5 '>
              <div className='flex-1 '>
                <h1 className='text-2xl text-blue-400 my-4 font-bold'>👨‍💻 NAGENDRA S. SINGH </h1>
                <p className=' text-gray-400 mt-2 mb-2'>3rd Year BSC — Information Technology | KD College, Mumbai University</p>
                <p className=' text-gray-400 '>📍 Ulhasnagar, Thane, Maharashtra</p>
                <p className=' text-gray-400 mb-1'>✉️ nagendersingh954@gmail.com | 📞 +91 8999542059</p>
              </div>
              <div className='bg-linear-to-r from-[#00B4FF44] from-45% to-gray-950 flex-1 p-3 px-6 rounded-lg hover:scale-105 transition-all duration-100'>
                <h1 className='font-bold text-blue-400 '>Professional Summary:</h1>
                <span className='text-sm'>3rd-year BCS (IT) student passionate about Full Stack Development and problem-solving. Experienced with React, Node.js, JavaScript, HTML, CSS, and DSA. Dedicated to building scalable web applications and continuously improving technical skills through hands-on projects and coding challenges.</span>
              </div>
             </div>
             <div className=' bg-[#FFFFFF0D] p-5 rounded-lg mt-12 '>
              <h1 className='text-blue-400 font-bold text-xl'>🎓 Education</h1>
             <div className='mt-3'><p className='text-white'><span className='font-bold '>3rd Year BSC — Information Technology</span>  — KD College (Mumbai University), 2024–2027</p>
             <span className='text-gray-400'>GPA: 9.1</span></div> 
            <div className='mt-3'><p className='text-white'><span className='font-bold '>12th Board — R.K Talreja College </span>(Maharashtra Board, 2024)</p>
             <span className='text-gray-400'>Percentage: 86%</span></div> 
            <div className='mt-3'><p className='text-white'><span className='font-bold '>10th Board — K.S.P Jai Hind High School </span> (Maharashtra Board, 2022)</p>
             <span className='text-gray-400'>Percentage: 81%</span></div> 
             </div>
             <div className='mt-10'>
                <h1  className='text-blue-400 font-bold text-xl my-4'>💼 Projects</h1>
                <p>1️⃣ Coding Contest Web Application </p>
                <p>2️⃣ Blog App </p>
                <p>3️⃣ Indian Sign Language Interpreter (In Progress)</p>
                <p>4️⃣ Mental Health Analyzer</p>
             </div>
             <div className='mt-10 '>
              <h1  className='text-blue-400 font-bold text-xl my-4'>⚙️ Skills</h1>
              <div className='flex gap-3 flex-wrap'>
                {skills.map((skill,i)=>(
                    <div key={i} className='py-1 px-3  bg-[#FFFFFF0D] text-[14px] transition-discrete duration-200 text-gray-300 rounded-lg hover:scale-110 hover:bg-indigo-600'>{skill}</div>
                ))}
              </div>
             </div>
             <div className='flex w-full justify-center gap-4 mt-6 p-2'>
              <a href="https://leetcode.com/u/Nagender_singh/"  className='hover:scale-105'>🏆 LeetCode</a>
              <a href="https://github.com/NagenderSingh954" className='hover:scale-105'>💼 LinkedIn</a>
              <a href="" className='hover:scale-105'>💼 LinkedIn</a>
             </div>
             <div>
            <iframe src="/resume.pdf" frameborder="5" width="100%"
  height="700" className='mt-7 rounded-xl'></iframe>
        </div>
        <div className='my-10 '>
          <a href="/resume.pdf" className='bg-sky-400 inline-block transition-all duration-300  py-3 px-6 rounded-xl font-bold  hover:scale-105' download>⬇️ Download Resume</a>
        </div>
        </div>
       
        
    </section>
  )
}

export default Resume