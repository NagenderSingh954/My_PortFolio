import React from 'react'
import { useState, useEffect } from 'react'

function Textanimation() {
    const texts = [
        "Frontend Developer",
        "React Developer",
        "JavaScript Lover",
        "UI Designer"
    ];
    const [textIndex, setTextIndex] = useState(0)
    const [display, setDisplay] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentText = texts[textIndex]
        let timeout;
        
        if (!isDeleting) {
            if (display.length < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplay(currentText.substring(0, display.length + 1))


                }, 200)


            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true)
                },200)
            }
        } else {
            if (display.length === 0) {
                setIsDeleting(false)
                setTextIndex(prev =>
                    prev === texts.length - 1 ? 0 : prev + 1
                );
                
            } else {
                timeout = setTimeout(() => {
                    setDisplay(currentText.substring(0, display.length - 1))

                }, 50)
            }
          

        }
        // setTextIndex(pre=>pre+1)
        return () => clearTimeout(timeout)
    }, [textIndex, display, isDeleting])
    return (
        <>
            <div className='words absolute inline ml-2 text-2xl text-blue-500 font-medium'>{display}</div>
        </>
    )
}

export default Textanimation