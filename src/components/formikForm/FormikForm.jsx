import { useFormik } from "formik"
import PostData from "../api/PostData";
import { useState } from "react";
let sendData = {};

const FormikForm = () => {
    const [isSend, setIsSend] = useState(false);

    // Submit Handler FUnction
    const submitHandler = (formData) => {
        setIsSend(false);
        // console.log(formData);
        sendData = { ...formData };
        setIsSend(true);

    }

    // Form Validator and Error Checking Method
    const formValidator = (fromDataV) => {
        let err = {};

        // fullName
        if (fromDataV.fullname.length < 5) {
            // Send Error Message to the err Object
            err.fullname = "Minimun 5 Characters Required"
        }

        // Email
        if (fromDataV.email.length < 10) {
            err.email = "Minimum 10 Characters Required"
        }

        // Password
        if (fromDataV.pwd.length < 5) {
            err.pwd = "Minimun 5 Characters Required"
        }

        // Return the Obj with error Message
        return err;
    }

    // Create Formik Form
    let formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            pwd: '',
            img: {}
        },
        // onSubmit: (formData) => {
        //     console.log(formData);
        // }
        onSubmit: submitHandler,

        validate: formValidator
    });


    return (
        <div className="container d-flex flex-center">
            <form
                className="form form-froup bg-dark text-white m-3 p-2"
                onSubmit={formik.handleSubmit}
            >

                <label htmlFor="fullname">Name</label>
                <input
                    type="text"
                    name="fullname"
                    className="form-control my-2"
                    required
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    // OnBlur and .touched are used accordingly
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.fullname && formik.errors.fullname ?
                        <p className="text-danger text-end">{formik.errors.fullname}</p>
                        :
                        ""
                }

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control my-2"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                />
                {
                    formik.touched.email && formik.errors.email ?
                        <p className="text-danger text-end">{formik.errors.email}</p>
                        :
                        ""
                }

                <label htmlFor="pwd">Password</label>
                <input
                    type="password"
                    name="pwd"
                    className="form-control my-2"
                    required
                    value={formik.values.pwd}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.pwd && formik.errors.pwd ?
                        <p className="text-danger text-end">{formik.errors.pwd}</p>
                        :
                        ""
                }

                <label htmlFor="img">Image</label>
                <input
                    type="file"
                    name="img"
                    className="form-control my-2"
                    onChange={(e) => formik.setFieldValue("img", e.target.files[0])}
                />

                <button
                    type="submit"
                    className="btn btn-outline-success"
                    // Dirty means all fields are not empty and isValid checks the fields validity
                    disabled={!(formik.dirty && formik.isValid)}
                >
                    Submit
                </button>
            </form>

            {
                isSend?<PostData sendData={sendData} />:''
            }
            
        </div>
    )
}

export default FormikForm