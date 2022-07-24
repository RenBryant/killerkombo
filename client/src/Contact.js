import React from 'react'

function Contact() {
  return (
    <div>
        <h2 className=""></h2>
    <form action="" className="flex-col justify-center rounded bg-white shadow-md">
    <div className="px-8 pt-6 pb-8 mb-4">
        <div> 
            <label className="block text-gray font-bold">Name</label>
            <input type="text" className="contact__input"/> 
        </div>
        <div> 
            <label className="block text-gray font-bold">Email</label>
            <input type="email" className="contact__input"/> 
        </div>
    </div>
    <div> 
        <label className="block text-gray font-bold">Message</label>
        <textarea name="" id="" rows="0" className="contact__input"></textarea>
    </div>

    <div>
        <a href="/" className="button button--flex">
            Send Message
            <i className="button"></i>
        </a>
    </div>
</form>

</div>
  )
}

export default Contact