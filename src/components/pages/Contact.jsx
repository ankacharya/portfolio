import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Contact ME' />
          <div className='content flexsb'>
            <div className='right'>
              <form
              action="mailto:ankit.acharya014@gmail.com"
              method="post"
              enctype="text/plain"
              >            
                <div className='flex'>
                <input type='text' name='name' placeholder='Name' data-aos='flip-left' />
                  <input type='email' name='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='text' name='subject' placeholder='Subject' data-aos='flip-up' />
                <textarea name='message' cols='30' rows='10' placeholder='Message' data-aos='flip-down'></textarea>
                <button type='submit' data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                 <div className='box' data-aos='zoom-in' key={item.id}>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
