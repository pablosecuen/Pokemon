import styled from "styled-components";
import img from "../../Assets/Arrow/arrowRight.png";
import img1 from "../../Assets/Arrow/arrowLeft.png";

export const PaginatorContainer = styled.div`
  display: block;
  height: auto;
  width: auto;
`;

export const ArrowR = styled.img`
  background-image: url(${img});
`;
export const ArrowL = styled.img`
  background-image: url(${img1});
`;
