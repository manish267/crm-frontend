import React ,{useState} from "react";
import { Jumbotron } from "react-bootstrap";
import "./entry.style.css";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad,setFrmLoad]=useState('login');

    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        if(name==="email") setEmail(value);
        if(name==="password") setPassword(value);
    }

    const handleOnSubmit=e=>{
        e.preventDefault();

        if(!email || !password){
           return alert("Fill up all the form");
        }

        // TODO: call api to submit form

        console.log(email,password);
    }

    const formSwitcher=frmType=>{
        setFrmLoad(frmType);
    }

    const handleOnResetSubmit=(e)=>{
        e.preventDefault();

        if(!email){
           return alert("Please Enter the email");
        }
        console.log(email)

    }

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
      {frmLoad==='login' && <LoginForm handleOnChange={handleOnChange} email={email} pass={password} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher} /> }
        
      {frmLoad==='reset' &&<ResetPassword  handleOnChange={handleOnChange} email={email} handleOnResetSubmit={handleOnResetSubmit}  formSwitcher={formSwitcher}/> }
      </Jumbotron>
    </div>
  );
};
