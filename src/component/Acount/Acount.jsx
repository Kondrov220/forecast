import styled from "styled-components";
import { useEffect, useState } from "react";
const Up = styled.div`
border-radius: 25px;
width: 300px;
height: 234px;
background: #fff;
display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:80px;
  right: 50px;
        @media (max-width: 768px) {
border-radius: 25px;
max-width: 250px;
height: 200px;
}
`

const Title = styled.h2`
font-family: var(--second-family);
font-weight: 500;
font-size: 28px;
color: #000;
margin-bottom: 20px;
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

const Texte = styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
color: #000;
margin-top:15px;
text-decoration: underline;
text-decoration-skip-ink: none;
cursor: pointer;
margin-top: 10px;
`


const Back = styled.div`
position:relative;
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

const Button = styled.button`
  &:hover {
       transform: scale(110%);
  }
display: ${props => (props.isLogin ? "none" : "flex")};
max-width: 89px;
height: 35px;
border-radius: 10px;
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;
gap: 10px;
background: #FFB36C;
margin: 10px;
  @media (max-width: 768px) {
border-radius: 10px;
padding: 8px 16px;
max-width: 73px;
height: 28px;
font-size: 10px;
  }
font-family: var(--second-family);
font-weight: 500;
font-size: 12px;
color: #000;`

function Acount({ openA, setOpenA, isLogin, setIsLogin, open, setOpen }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (openA) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openA]);

  return (
    <Back open={openA} onClick={() => setOpenA(false)}>
      <Up onClick={(e) => e.stopPropagation()}>
        {isLogin ?

          (<> <Title>{user?.name || "name"}
          </Title>
            <Text>{user?.email || "email"}</Text>
            <Text>{user?.city.join(", ") || "City"}</Text>
            <Texte onClick={() => {
              localStorage.removeItem("user");
              setIsLogin(false);
              setOpenA(false);
            }}>
              Log out
            </Texte>
            <Texte>Delete account</Texte> </>) :
          (<Button isLogin={isLogin} onClick={() => setOpen(true)}>Sing Up</Button>
          )}


      </Up>
    </Back>
  );
}

export default Acount;