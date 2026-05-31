import React from 'react'
import Tilt from 'react-parallax-tilt'


function Card() {
    const techstack = ['TensorFlow', 'keras', 'OpenCvv', 'YOLOv8']
    return (
        <>
            <Tilt className="background-stripes parallax-effect-glare-scale w-86"
                perspective={1500}
                tiltReverse
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.10}
                scale={1.02}>
                <div className='project-card flex flex-col p-4 w-86 rounded-2xl inner-element [transform-style:preserve-3d]'>
                   
                    <div className='rounded-2xl h-45 overflow-hidden '>
                        <img src='https://kunj-desai.vercel.app/mamo.png' alt='' className='w-full h-full object-cover ' />
                    </div>
                    <h1 className='text-blue-400 font-bold mt-6 text-xl' style={{ transform: "translateZ(200px)" }}>
                        🩺 Mammogram Malignancy Detector
                    </h1>
                    <span className='text-sm mt-4'>
                        Hybrid CNN + YOLOv8 ensemble for full-image breast cancer detection with ROI preprocessing and sliding-window inference.
                    </span>
                    <div className='flex gap-2 mt-5'>
                        {techstack.map((items) => (
                            <div key={items} className='px-2 py-0 border border-0.5 rounded-md  text-[#aaf] bg-[#00ffff0d] text-[13px] '>
                                {items}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-end gap-4 mt-3  '>
                        <button className='text-cyan-400 bg-gray-800 hover:bg-slate-700 cursor-pointer flex border-[0.5px] rounded-lg py-[5px] px-[10px] text-[13px] gap-1 items-center'>
                            <i class="fa-brands fa-github"></i>
                            <span >Code</span>
                        </button>
                        <button className='bg-cyan-400 flex text-white p-1 items-center cursor-pointer rounded-lg py-[6px] px-[12px] gap-1 hover:bg-sky-600 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link inline" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                            <a href="#">Live</a>
                        </button>
                    </div>
                </div>
            </Tilt>
        </>
    )
}

export default Card