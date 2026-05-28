import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);   //TODO handel this data to send the email
    return (
        <div className='w-120'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Your Name' className='w-full p-3 bg-[#ffffff14] rounded-lg mt-3' {...register('name', { required: true })} />
                <input type="text" placeholder='Your Email' className='w-full p-3 bg-[#ffffff14] rounded-lg mt-3' {...register('email', { required: true, validate:{
                            matchPattern:(value)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || "Invalid email address",
                        }})} />
                <input type="text" placeholder='Subject' className='w-full p-3 bg-[#ffffff14] rounded-lg mt-3' {...register('subject')} />
                <textarea name="message" {...register('message',{})} placeholder='Your Message...' cols='19' className='mt-3 p-3 bg-[#ffffff14] w-full rounded-lg resize-none h-35'></textarea>
                <button type='submit' className='w-full  py-2.5 rounded-lg mt-4 text-center bg-linear-to-r/srgb from-indigo-400 to-teal-400'>🚀 Send Message</button>
            </form>
        </div>
    )
}

export default Form