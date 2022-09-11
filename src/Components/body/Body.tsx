import React, {useState, MouseEvent, FormEvent, ChangeEvent} from "react";
import Image from 'next/image'
import image from "../../public/Image.png";
import google from "../../public/google.svg";
import facebook from "../../public/facebook.svg";
import line from "../../public/line.png";


export const Body: React.FC = () => {
    const [firstnamedata, setFNameData] = useState<{value: string, error: string}>({value: '', error: ''})
    const [lastnamedata, setLNameData] = useState<{value: string, error: string}>({value: '', error: ''})
    const [emaildata, setEmailData] = useState<{value: string, error: string}>({value: '', error: ''})
    const [passdata, setPassData] = useState<{value: string, error: string}>({value: '', error: ''})

    console.log(firstnamedata, "Firstname")
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        let isError = false
        if(!firstnamedata.value) {
           setFNameData({value: "", error: "First Name is required"})
           isError = true     
        }
        if(!lastnamedata.value) {
           setLNameData({value: "", error: "Last Name is required"})
           isError = true
        }
        if(!/\S+@\S+\.\S+/.test(emaildata.value)){
           setEmailData((current) => ({value: current.value, error: "Wrong Email"}) )
        }
        if(!emaildata.value){
           setEmailData({value: "", error: "Email is required"})
           isError = true
        }
        if(!passdata.value) {
           setPassData({value: "", error:"Password is required"})
           isError = true
        }
        if(!isError){
            setFNameData({value:"", error:""}),
            setLNameData({value:"", error:""}),
            setEmailData({value:"", error:""}),
            setPassData({value:"", error:""})
        }
    }

    const handleChangeFName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFNameData({value: event.target.value, error: ""})
    }
    const handleChangeLName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLNameData({value: event.target.value, error: ""})
    }
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailData({value: event.target.value, error: ""})
    }
    const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassData({value: event.target.value, error: ""})
    }
    
    return(
        <div className="container">
            <div>
                <Image src={image} className="body-poster"/>
                <div>
                    <h1>Sign Up as</h1>
                    <div className="links">
                        <a href="#">Individual</a>
                        <a href="#">Organization</a>
                        <a href="#">Temple</a>
                    </div>
                        
                    <div>
                        <label>First Name</label>
                        <input placeholder="Jacob"
                                value={firstnamedata.value}
                                onChange={handleChangeFName}
                        /> <span>{firstnamedata.error ? firstnamedata.error : null}</span>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input placeholder="McKinney"
                                value={lastnamedata.value}
                                onChange={handleChangeLName}
                        /><span>{lastnamedata.error ? lastnamedata.error : null}</span>
                    </div>
                    <div>
                        <label>Email</label>
                        <input placeholder="youremail@mail.com"
                               value={emaildata.value}
                               onChange={handleChangeEmail}
                        /><span>{emaildata.error ? emaildata.error : null}</span>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                                value={passdata.value}
                                onChange={handleChangePass}
                        /><span>{passdata.error ? passdata.error : null}</span>
                    </div>
                    <button type="submit" onClick={handleSubmit}><p>Sign Up</p></button>
                    <div className="note">
                        <Image src={line}/>
                        <p>Or Sign Up with</p>
                        <Image src={line}/>
                    </div>
                    <div className="social-logo">
                        <Image src={google} className="logo-img"/>
                        <Image src={facebook}/>
                    </div>
                    
                    <div className="privacy-policy">
                        <a href="#">Terms & conditions/</a>
                        <a href="#"> Privacy policy</a>
                    </div>

                </div>
            </div>
        </div>
    )
}