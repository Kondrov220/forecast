import styled from "styled-components";
import { useState } from "react";
const Up = styled.div`
border-radius: 25px;
width: 600px;
height: 534px;
background: #fff;
display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
        @media (max-width: 768px) {
border-radius: 25px;
max-width: 400px;
height: 440px;
}
    @media (max-width: 425px) {
border-radius: 25px;
max-width: 293px;
height: 454px;
  }
`

const Title = styled.h2`
font-family: var(--second-family);
font-weight: 500;
font-size: 28px;
color: #000;
      @media (max-width: 768px) {
font-size:20px;
}
`

const Text = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
color: #000;
      @media (max-width: 768px) {
font-size:12px;
}
`

const Input = styled.input`
border: 2px solid ${props => props.error ? "red" : "transparent"};
border-radius: 10px;
max-width: 440px;
height: 50px;
background: #e4e4e4;
margin-top:16px;
margin-bottom:30px;
      @media (max-width: 768px) {
border-radius: 10px;
max-width: 310px;
height: 40px;
}
    @media (max-width: 425px) {
border-radius: 10px;
max-width: 243px;
height: 40px;
  }
`

const Button = styled.button`
margin-top:35px;
border-radius: 10px;
padding: 10px 30px;
max-width: 114px;
height: 37px;
background: #ffb36c;
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
color: #000;
      @media (max-width: 768px) {
margin-top:0px;
}
`

const Texte = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
color: #000;
margin-top:15px;
`

const Span = styled.span`
text-decoration: underline;
text-decoration-skip-ink: none;
`

const Back = styled.div`
 display: ${props => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
position: fixed;
background: rgba(0, 0, 0, 0.48);
width:100%;
height:100%;
z-index: 3;
left:0;
top:0;
`

function Log({ open, setOpen, setIsLoginOpen, isLogin, setIsLogin }) {
    const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);




const handleLogin = async () => {
  try {
    const res = await fetch("https://699dc3e283e60a406a475fc5.mockapi.io/sing/sing");
    const users = await res.json();

    const foundUser = users.find(
      user =>
        user.email === emailValue &&
        user.password === passwordValue
    );

    if (!foundUser) {
      alert("Invalid email or password");
      return;
    }
    localStorage.setItem("user", JSON.stringify(foundUser));
    console.log(foundUser);

    setIsLogin(true);
    setOpen(false);

  } catch (error) {
    console.error(error);
  }
};
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";  
    }

  return (
    <Back open={open} onClick={() => setOpen(false)}>
    <Up onClick={(e) => e.stopPropagation()}>
      <Title>Log in</Title>
      <ul>
        <li>
            <Text>E-Mail</Text>
            <Input type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} error={errorEmail}/>
        </li>
        <li>
            <Text>Password</Text>
            <Input type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} error={errorPassword}/>
        </li>
      </ul>
      <Button onClick={handleLogin}>Log in</Button>
    </Up>
    </Back>
  );
}

export default Log;