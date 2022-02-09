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
  margin-left: ${(props) => (props.first === 1 ? "0" : "1")};
  @media (max-width: 575px) {
    
        width: 100%;
        float: none;
        margin-left: 0;
        
    
  }
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

@media (max-width: 575px) {
  .work .part {
      width: 100%;
      float: none;
      margin-left: 0
      
  }
}

@media (min-width: 576px )and (max-width:768px) {
  .work .part {
      width: 47%;
  }
  
  .work .last {
      margin-left: 0
  }
}