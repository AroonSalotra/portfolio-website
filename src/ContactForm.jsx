const ContactForm = () => {
    return (
        <div className="contact-form">
            <h2>Contact Me</h2>
            {/* <p>* Required</p> */}
            <form action="" className="form-elem" >
                <label htmlFor=""> Name
                    <input type="text" name="" id="" />
                </label>

                <label htmlFor=""> Email
                    <input type="email" name="" id="" />
                </label>

                <label htmlFor=""> Comment
                    <textarea name="" id="" cols="30" rows="10" />
                </label>


            </form>
        </div>
    );
}

export default ContactForm;