import styled from "styled-components";
import { useState, useEffect } from "react";
const Up = styled.div`
border-radius: 25px;
max-width: 600px;
width:100%;
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
width:100%;
height: 50px;
background: #e4e4e4;
margin-top:16px;
margin-bottom:30px;
      @media (max-width: 768px) {
border-radius: 10px;
height: 40px;
}
    @media (max-width: 425px) {
border-radius: 10px;
height: 40px;
  }
`

const Button = styled.button`
  &:hover {
       transform: scale(110%);
  }
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
cursor: pointer;
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

const Li = styled.li`
max-width: 440px;
width:100%;
      @media (max-width: 768px) {
max-width: 310px;
width:100%;
}
    @media (max-width: 425px) {
max-width: 243px;
width:100%;
  }
`

const Ul = styled.ul`
max-width: 440px;
width:100%;
      @media (max-width: 768px) {
max-width: 310px;
width:100%;
}
    @media (max-width: 425px) {
max-width: 243px;
width:100%;
  }`




function Sing({ open, setOpen, isLogin, setIsLogin, setIsLoginOpen  }) {
    const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);




 const handleSignUp = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    setErrorEmail(true);
    alert("Invalid email format");
    return;
  } else {
    setErrorEmail(false);
  }

  if (passwordValue.length < 6) {
    setErrorPassword(true);
    alert("Password must be at least 6 characters");
    return;
  } else {
    setErrorPassword(false);
  }

  const newUser = {
    email: emailValue,
    name: nameValue,
    password: passwordValue,
    city: []
  };
  localStorage.setItem("newUser", JSON.stringify(newUser));

  try {
    const res = await fetch("https://699dc3e283e60a406a475fc5.mockapi.io/sing/sing");
    const users = await res.json();

 
    const emailExists = users.some(user => user.email === emailValue);

    if (emailExists) {
      alert("User with this email already exists");
      return;
    }

    const postRes = await fetch(
      "https://699dc3e283e60a406a475fc5.mockapi.io/sing/sing",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      }
    );

    
    const data = await postRes.json();
    console.log("User added:", data);
    setOpen(false);
    setIsLogin(true);

  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  return (
    <Back open={open} onClick={() => setOpen(false)}>
    <Up onClick={(e) => e.stopPropagation()}>
      <Title>Sign up</Title>
      <Ul>
        <Li>
            <Text>Username</Text>
            <Input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}/>
        </Li>
        <Li>
            <Text>E-Mail</Text>
            <Input type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} error={errorEmail}/>
        </Li>
        <Li>
            <Text>Password</Text>
            <Input type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} error={errorPassword}/>
        </Li>
      </Ul>
      <Button onClick={handleSignUp}>Sign up</Button>
      <Texte>Already have an account? <Span     onClick={() => {
      setOpen(false);      
      setIsLoginOpen(true);   
    }}> Log In</Span></Texte>
    </Up>
    </Back>
  );
}

export default Sing;