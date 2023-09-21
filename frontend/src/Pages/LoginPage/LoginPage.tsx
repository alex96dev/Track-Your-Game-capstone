import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import "./LoginPage.css"
import {Button} from "react-bootstrap";

type Props = {
    setUser: (user: string) => void
}

function LoginPage(LoginPageProbs: Props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()

    function OnChangeEventHandlerUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function OnChangeEventHandlerPassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function Login(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/user/login", undefined, {auth: {username, password}})
            .then((response) => LoginPageProbs.setUser(response.data))
            .then(() => nav("/Homepage_Dropdown"))
            .catch((error) => console.log(error))
    }

    return (
        <div className={"div1_loginpage"}>
            <h1>Login</h1>
            <form onSubmit={Login}>
                <div className="inputfield1">
                    <input className={"inputfield"} type="text" id="username" placeholder="please enter your username"
                           required={true}
                           onChange={OnChangeEventHandlerUsername}></input>
                </div>
                <div className="inputfield2">
                    <input className={"inputfield"} type="password" id="password"
                           placeholder="please enter your password" required={true}
                           onChange={OnChangeEventHandlerPassword}></input>
                </div>
                <div className="button_div">
                    <Button type={"submit"} variant={"btn btn-success"}>Login</Button>
                </div>
                <div className={"registerlink"}>
                    <Link to={"/register"}>Not registered yet? Click here!</Link>
                </div>
            </form>
        </div>
    )

}

export default LoginPage;