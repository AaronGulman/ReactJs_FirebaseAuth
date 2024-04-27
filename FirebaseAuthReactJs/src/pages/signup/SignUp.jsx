import { useState } from "react";
import Input from "../../components/shared/Input";

const SignUp = () => {
    const [inputValue, setInputValue] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();  
    }
  
    const handleChange = (e) => {
        const componentName = e.target.name; 
        const value = e.target.value; 
        setInputValue({...inputValue, [name]: value}); 
    };
  return (
    <div>
        <form onSubmit={handleSubmit} style={form}>
            <Input 
                type="text"
                name="username"
                handleChange={handleChange} 
                value={inputValue.username} 
                label='username' /> 
            <Input
                 type="password" 
                 name="password"
                 handleChange={handleChange} 
                 value={inputValue.password}
                 label='password'/> 
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

const form = {
    display: "flex", 
    justifyContent: "center", 
    flexDirection: "column", 
    gap: "10px"
}

export default SignUp
