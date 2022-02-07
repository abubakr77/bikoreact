import styled from "styled-components";
export const SocialSection = styled.div`
  height: auto;
  overflow: hidden;
`;
export const SocialS = styled.div` width: 33.33%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background:${(props) => (props.item === 1 ? "#3b5998" : "")}
background:${(props) => (props.item === 2 ? "#498cbf" : "")}
background:${(props) => (props.item === 3 ? "#cc2127" : "")} `;
// export const SocialFace=styled.div` background: #3b5998;`;
export const Sicon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
`;
export const SocilP = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;
export const SpSpinfo = styled.span`
  display: block;
  margin-bottom: 8px;
`;
export const SinfoTwo = styled.span`
  font-weight: normal;
`;
// .social-media {

// }

// .social-media .social {

// }

// .social-media .social.face {

// }

// .social-media .social.twitter {
//   background: ;
// }

// .social-media .social.pin {
//   background: ;
// }

// .social-media .social .icon {

// }

// .social-media .social p {

// }

// .social-media .social p span {

// }

// .social-media .social p span.info2 {

// }
