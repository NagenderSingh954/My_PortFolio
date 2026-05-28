import React from 'react'
import Form from '../component/Form'

function Contact() {
    return (
        <>
            <section className='home-section h-[100vh] contact flex flex-col  items-center'>
                <h1 className='mt-12 p-2 contact-title font-bold  text-5xl '>Let’s Connect & Collaborate 🤝</h1>
                <span className='p-2 mt-4 max-w-[700px]  text-xl text-center'>Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!</span>

                <div className='flex gap-4 p-5'>
                    <div className='icons contact-icons p-2 bg-black rounded-full text-4xl '>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div className='icons contact-icons p-2 bg-black rounded-full text-4xl'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className='icons contact-icons p-2 bg-black rounded-full text-4xl '>
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className='icons contact-icons p-2 bg-black rounded-full text-4xl '>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className='icons contact-icons p-2 bg-black rounded-full text-4xl '>
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>

                    <div className='icons contact-icons p-2 bg-black rounded-full text-4xl '>
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
                <Form/>
            </section>

        </>
    )
}

export default Contact