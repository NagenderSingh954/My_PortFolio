import React,{useRef} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import configureIds from '../config/config';



function Form() {
    const form =useRef()
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = ((data)=>{
        console.log(data)
        
        emailjs
        .send(configureIds.serviceId,configureIds.templateId,data,{
            publicKey:configureIds.publicKey,
        }).then(()=>{
            console.log('success')
        },(error)=>{
            console.log('Error in sending email:',error.text)
        })
        reset()
    });  
   
    return (
        <div className='w-120' ref={form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Your Name' className='w-full p-3 bg-[#ffffff14] rounded-lg mt-3' {...register('name', { required: true })} />
                <input type="text" placeholder='Your Email' className='w-full p-3 bg-[#ffffff14] rounded-lg mt-3' {...register('email', { required: true, validate:{
                            matchPattern:(value)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || "Invalid email address",
                        }})} />
                <input type="text" placeholder='Subject' className='w-full p-3 bg-[#ffffff14] rounded-lg mt-3' {...register('subject')} />
                <textarea name="message" {...register('message',{})} placeholder='Your Message...' cols='19' className='mt-3 p-3 bg-[#ffffff14] w-full rounded-lg resize-none h-35'></textarea>
                <button type='submit' className='w-full  py-2.5 rounded-lg mt-4 text-center bg-linear-to-r/srgb from-indigo-400 to-teal-400' >🚀 Send Message</button>
            </form>
        </div>
    )
}

export default Form