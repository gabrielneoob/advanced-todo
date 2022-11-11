import React from "react";

const Header = ({ color }) => {
  const headerStyle = {
    color: color,
    textAlign: 'center',
    borderBottom: '1.5px solid #e6e6e6',
    padding: '15px 0'
  }


  return <h1 className="title" style={headerStyle}>Todo Avançado</h1>
}

export default Header;