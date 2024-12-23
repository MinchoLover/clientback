import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Component: link 스타일
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 18px;
  &:hover {
    color: #ffa500; 
  }
`;

//네비게이션 바 메뉴 컨테이너 (아이콘 누르면 오른쪽에 나옴)
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-200px")};
  width: 200px;
  height: 100%;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: right 0.3s ease-in-out;
`;

//네비게이션 아이콘
const NavIcon = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1000;
  font-size: 24px;
`;

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavIcon onClick={toggleNavbar}>☰</NavIcon>
      {/* 네비게이션 메뉴 */}
      <NavbarContainer isOpen={isOpen}>
        <StyledLink to="/" onClick={toggleNavbar}>
          메인 페이지
        </StyledLink>
        <StyledLink to="/mypage" onClick={toggleNavbar}>
          마이 페이지
        </StyledLink>
        <StyledLink to="/businesscard" onClick={toggleNavbar}>
          명함 페이지
        </StyledLink>
      </NavbarContainer>
    </>
  );
};

export default NavigationBar;