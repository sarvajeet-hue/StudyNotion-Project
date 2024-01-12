import React from 'react'
import {useForm} from "react-hook-form";


const LoginForm = () => {

    const {register , formState : {errors} , handleSubmit} = useForm();

    function onSubmitForm(data){
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
            

    </form>
  )
}

export default LoginForm
