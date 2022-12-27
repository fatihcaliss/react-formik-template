import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const YoutubeFormYup = () => {

    const initialValues = {
        name: "",
        email: "",
        channel: ""
    }

    const onSubmit = values => {
        console.log("form data", values)
    }

    const validate = values => {
        //values.name values.email values.channel
        //errors.name errors.email errors.channel
        //errors.name = 'This gield is required'
        let errors = {}

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
            errors.email = 'invalid email format'
        }

        if (!values.channel) {
            errors.channel = 'Required'
        }

        return errors
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('required!!'),
        email:Yup.string().email('invalid email format').required('required!!'),
        channel: Yup.string().required('required!')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    // console.log("form values:", formik.values);
    // console.log("form errors:", formik.errors);
    // console.log("form fields:", formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id='channel'
                        name='channel'
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? ( <div className='error'>{formik.errors.channel}</div>) : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeFormYup