import React from 'react'

function Contact() {
  return (
    <div>
        <h2 className=""></h2>
    <form action="" className="contact__form">
    <div className="contact__input">
        <div className="contact__content"> 
            <label for="" className="contact__label">Name</label>
            <input type="text" className="contact__input"/> 
        </div>
        <div className="contact__content"> 
            <label for="" className="contact__label">Email</label>
            <input type="email" className="contact__input"/> 
        </div>
    </div>
    <div className="contact__content"> 
        <label for="" className="contact__label">Message</label>
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