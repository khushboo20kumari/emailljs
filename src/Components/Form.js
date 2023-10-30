import { Button, TextField, Typography } from "@mui/material";
import { useState} from "react";
import { useRef } from "react";

import emailjs from '@emailjs/browser';

function Form() {

    const [userdata, setUserData] = useState([])
    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [massege, setMassege] = useState("")

    const [phone, setPhone] = useState("")

    const useUserRef=useRef('')

    const HandlerName = (e) => {
        setName(e.target.value)
    }

    const HanlderPhone = (e) => {
        setPhone(e.target.value)
    }

    const HanldeEmail = (e) => {
        setEmail(e.target.value)
    }

    const HandlerMassge=(e)=>{
        setMassege(e.target.value)
    }

    const HandlerSave=(e)=>{

        e.preventDefault()
        setEmail('')
        setMassege('')
        setName("")
        setPhone("")
        useUserRef.current.focus()
        setUserData([...userdata,{name,phone,email,massege}])
        emailjs.send("service_bf0svzw","template_m6bcxbm", data,"4d5i6ZOR1ZcvEGMxD")
        


    }
    
    console.log(userdata,"data")
     
    return (
        <>
        <Typography>Gmaill Information</Typography>
            <TextField name="name" ref={useUserRef} label="Name...." onChange={HandlerName} value={name}></TextField><br></br>

            <TextField name="emaill" ref={useUserRef} label="Emaill...." onChange={HanldeEmail} value={email}></TextField><br></br>

            <TextField ref={useUserRef} label="phone...." onChange={HanlderPhone} value={phone}></TextField><br></br>

            <TextField
          
                ref={useUserRef}
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                onChange={HandlerMassge}
                value={massege}

            /><br></br>

            <Button onClick={HandlerSave} variant="contained">save</Button><br></br>

        </>
    )
}
export default Form;