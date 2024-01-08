import { Formik } from 'formik'
import React, { useState } from 'react'

function Form1() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
  return (
    <div>
        <h2>Form Page</h2>
        <Formik initialValues={{name: "", email: '', age: ''}} validate={(values) => {}} onSubmit={(values, {setSubmitting}) => {setSubmitting(false)}}>
            
        <form onSubmit={() => {}}>
            <div>
                <label>Name:</label>
                <input type="text" placeholder='Enater your name' 
                onChange={(e) => setName(e.target.value) } value={name} />
            </div>

            <div>
                <label>Email:</label>
                <input type="text" placeholder='Enater your name' 
                onChange={(e) => setEmail(e.target.value) } value={email} />
            </div>

            <div>
                <label>Age:</label>
                <input type="text" placeholder='Enater your name' 
                onChange={(e) => setAge(e.target.value) } value={age} />
            </div>

        </form>
        </Formik>
    </div>
  )
}

export default Form1