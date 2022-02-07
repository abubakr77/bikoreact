import styled from "styled-components";
export const HomeS = styled.div`
  height: 500px;
  /* background: url("../images/Home/home-bg.jpg"); */
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`;
export const HomeInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const HomeTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #5e5e5e;
`;
export const HomeInf = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;
`;
export const HomeDesc = styled.p`font-size: 20px;
line-height: 1.5;
color: #888;
margin-bottom: 20px;
}`;
export const Hspan = styled.div`
  color: #000;
`;
export const Hbtn = styled.div`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #fff;
    color: #eb5424;
  }
`;

// .home {
//   height: 500px;
//   /* background: url("../images/Home/home-bg.jpg"); */
//   background-size: cover;
//   background-position: center;
//   text-align: center;
//   position: relative;
// }

// .home .home-information {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// .home .home-information .home-title {
//   font-size: 60px;
//   font-weight: bold;
//   color: #5e5e5e;
// }

// .home .home-information .home-info {
//   font-size: 35px;
//   color: #eb5424;
//   margin-bottom: 20px;
// }

// .home .home-information .home-desc {
//   font-size: 20px;
//   line-height: 1.5;
//   color: #888;
//   margin-bottom: 20px;
// }

// .home .home-information .home-desc span {
//   color: #000;
// }

// .home .home-information .home-btn {
//   background: #eb5424;
//   color: #fff;
//   font-size: 18px;
//   width: 150px;
//   border: 0;
//   padding: 15px;
//   cursor: pointer;
//   font-weight: bold;
// }

// .home .home-information .home-btn:hover {
//   background: #fff;
//   color: #eb5424;
// }
