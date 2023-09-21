import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import "./RegisterPage.css"

function RegisterPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()

    function OnChangeEventHandlerUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function OnChangeEventHandlerPassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function Register(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/user/register", {username, password})
            .then(() => nav("/"))
            .catch((error) => console.log(error))
    }

    return (
        <div className={"div1_registerpage"}>
            <h1>Registration</h1>
            <form onSubmit={Register}>
                <div className={"inputfield1"}>
                    <input className={"inputfield"} type="text" id="username" placeholder="please enter your username" required={true}
                           onChange={OnChangeEventHandlerUsername}></input>
                </div>
                <div className={"inputfield2"}>
                    <input className={"inputfield"} type="password" id="password" placeholder="please enter your password" required={true}
                           onChange={OnChangeEventHandlerPassword}></input>
                </div>
                <div className={"button_div"}>
                    <Button type={"submit"} variant={"btn btn-success"}>Register</Button>
                </div>
            </form>
        </div>
    )

}

export default RegisterPage;