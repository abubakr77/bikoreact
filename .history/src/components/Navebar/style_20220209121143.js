import styled from "styled-components";
export const NavbarSection = styled.div`
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 30%;
  float: left;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;
export const Labell = styled.label`
  position: absolute;
  top: 13px;
  right: 25px;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;
export const Inputt = styled.input`
  position: absolute;
  top: 13px;
  right: 25px;
  display: none;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;
export const Logoc = styled.div`
  width: 30%;
  float: left;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;
export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  // @media (min-width: 992px) {
  //   display: none;
  //
`;
export const LogoList = styled.ul`
  width: 60%;
  float: right;
  list-style: none;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
    margin-top: 20px;
    display: none;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  @media (max-width: 991px) {
    display: block;
    text-align: center;
  }
`;
export const Anchor = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;
// @media (min-width : 992px) {
//   .navbar label {
//       display: none
//   }

// @media (max-width : 991px) {
//   .navbar .logo {
//       width: 100%;
//       float: none;
// //   }

//   .navbar .ul-list {
//       width: 100%;
//       float:  none;
//       margin-top: 20px;
//       display: none
//   }

//   .navbar .ul-list .list-item {
//       display: block;
//       text-align: center;
//   }
// }
// .navbar .logo {
//   width: 40%;
//   float: left;
// }

// .navbar .logo .logo-text {
//   font-size: 30px;
//   font-weight: bold;
// }

// .navbar .ul-list {
//   width: 60%;
//   float: left;
//   list-style: none;
// }

// .navbar .ul-list .list-item {
//   display: inline-block;
// }

// .navbar .ul-list .list-item a {
//   display: block;
//   color: #222;
//   text-decoration: none;
//   padding: 10px 15px;
//   font-weight: bold;
// }

// .navbar .ul-list .list-item a:hover {
//   color: #eb5424;
// }
