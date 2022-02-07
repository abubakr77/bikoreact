import styled from "styled-components";
export const WorkSec = styled.div` height: auto;
padding: 50px 0;
overflow: hidden;
background: #fff;
}`;
export const WorkTitle = styled.h2`
  font-size: 60px;
`;
export const WorkSpan = styled.span`
  font-weight: normal;
`;
export const WorkPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  margin-left: ${(props) => (props === "1" ? "0" : "1")};
`;
export const PartTitle = styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`;
export const Line = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;
export const PartDesc = styled.div`
  font-size: 14px;
  color: #888;
  padding: 20px;
`;
export const First = styled.div`
  margin-left: 0;
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  // margin-left: 5%;
`;
export const Last = styled.div`
  margin-left: 0;
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
`;

// .work {
//   height: auto;
//   padding: 50px 0;
//   overflow: hidden;
//   background: #fff;
// }

// .work .work-title {
//   font-size: 60px;
// }

// .work .work-title span {
//   font-weight: normal;
// }

// .work .part {
//   margin-top: 20px;
//   width: 30%;
//   float: left;
//   height: auto;
//   padding: 100px 0;
//   border: 1px solid #888;
//   box-sizing: border-box;
//   text-align: center;
//   margin-left: 5%;
// }

// .work .first {
//   margin-left: 0;
// }

// .work .part .icon {
//   color: #888;
//   margin-bottom: 20px;
// }

// .work .part .part-title {
//   font-size: 25px;
//   color: #eb5424;
//   margin-bottom: 20px;
// }

// .work .part .line {
//   width: 60%;
//   margin: auto;
//   margin-bottom: 20px;
// }

// .work .part .part-desc {
//   font-size: 14px;
//   color: #888;
//   padding: 20px;
// }
