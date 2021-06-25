import React, { useState } from 'react'

import emailjs from 'emailjs-com';

import { useHistory } from 'react-router-dom';
import Alert from './Alert';
import { useForm } from 'react-hook-form';



export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);

    // const onSubmit = data => console.log(data);


    const history = useHistory();


    const [data, setstate] = useState({
        fullName: '',
        subject: '',
        email: '',
        message: ''
    })
    // const InputEvent = (event) => {
    //     const { name, value } = event.target;
    //     setstate((preValue) => {
    //         return {
    //             ...preValue,
    //             [name]: value
    //         }
    //     })
    // }
    const fomrSubmit = (data,e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_bflnsot', e.target, 'user_dgFBYTYYSQIbnWdlPniCO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        // <Alert/>
        // history.push('/');
        // alert(`${data.fullName}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={handleSubmit(fomrSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">FullName</label>
                                <input type="text" className="form-control"
                                    id="exampleFormControlInput1" name="fullName"
                                    
                                    placeholder="Enter your name"
                                    {...register('fullname', {
                                        required: true
                                    })} />
                                <small className=" form-text text-danger">
                                    {errors.fullname?.type === "required" && 'This field is required!'}
                                </small>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="nymber" className="form-control"
                                    id="exampleFormControlInput1" name="subject"
                                    
                                    placeholder="Subject"  {...register('subject', {
                                        required: true
                                    })} />
                                <small className=" form-text text-danger">
                                    {errors.subject?.type === "required" && 'This field is required!'}
                                </small>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control" id="exampleFormControlInput1"
                                    name="email" 
                                    placeholder="name@example.com"
                                    {...register('email', {
                                        required: true
                                    })} />
                                <small className=" form-text text-danger">
                                    {errors.email?.type === "required" && 'This field is required!'}
                                </small>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1"
                                    name="message" 
                                     rows="3"
                                    {...register('message', {
                                        required: true
                                    })} />
                                <small className=" form-text text-danger">
                                    {errors.fullname?.type === "required" && 'This field is required!'}
                                </small>

                            </div>

                            <div className="col-auto mt-3">
                                <button type="submit"  className="btn-send">Send</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;