import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const Container = styled.div`

  padding: 0px 30px;
  margin: 30px 0px;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const WrapperImages = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperImageCover = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 70px;
  background-color: white;
`;
export const ImageCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
`;

//slider image mini start css
export const WrapperMiniImages = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
`;
export const WrapperMiniImagesScroll = styled.div`
  position: absolute;
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar{
    width: 0;
  }

`;
export const ImageMini = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
  
`;
export const WrapperIconsScroller = styled.div`
  position: absolute;
 
  top:0;
  left:${props => props.location === "left"? "-25px" : ""}; 
  right:${props => props.location === "right"? "-25px" : ""}; 
  width: 25px;
  height: 100%;
  background-color: rgba(169, 172, 172, 0.1);
  display: flex;
  align-items: center;
  transition: .4s ease;
&:hover{
  background-color: rgba(169, 172, 172, 0.5);
  transition: .4s ease;
}
`;

export const WrapperMiniImage = styled.div`
  min-width: 100px;
  height: 100px;
  margin: 0 10px;
  border: 1px solid ${({theme}) => theme.TEXTCOLOR1};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .4s ease;
  cursor: pointer;
  &:hover {
    border-color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
  }
`;

// slider image end css

export const WrapperInfo = styled.div`
  width: 50%;
  padding: 70px;
`;
//detaile info style

export const Title = styled.p`
  font-size: 27px;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const WrapperRtaing = styled.div`
  display: flex;
  align-items: center;
`;
export const NumberReviews = styled.p`
  font-size: 14px;
  margin-left: 10px;
  color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const WrapperPrices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: 10px 0px;
`;
export const NewPrice = styled.div`
  font-weight: 600;
  color: ${({theme}) => theme.REDCOLOR};
  font-size: 18px;
`;
export const OldPrice = styled.del`
  color: ${({theme}) => theme.TEXTCOLOR1};
  font-size: 18px;
`;
export const Discount = styled.div`
  border: 1px solid ${({theme}) => theme.REDCOLOR};
  padding: 3px;
  font-size: 14px;
  
`;
export const Desc = styled.p`
  letter-spacing: 1px;
  color: ${({theme}) => theme.TEXTCOLOR1};
`;
export const WrapperFeatures = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;
export const WrapperFeaturesItem = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;
`;
export const FeaturesName = styled.div`
  font-weight: 600;
`;
export const FeaturesItem = styled.div`
  background-color: ${({theme}) => theme.GRAYCOLOR};
  padding: 5px;
  cursor: pointer;
  color: ${({theme}) => theme.TEXTCOLOR1};
  transition: 0.3s ease;
  margin: 0px 10px;
  &:hover {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.3s ease;
  }
`;
export const WrapperButton = styled.div`
display:flex;
justify-content: space-between;
width: 70%;

margin: 20px 0;

`;
export const AddCartButton = styled.div`
background-color: ${({theme}) => theme.TEXTCOLOR1};
color: ${({theme}) => theme.WHITECOLOR};
padding: 10px 25px;
font-size: 18px;
transition: .4s ease;
&:hover{
    background-color: ${({theme}) => theme.REDCOLOR};
    transition: .4s ease;
}
`;

export const FeaturesColor = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.TEXTCOLOR2};
  background-color: ${(props) => (props.color ? props.color : "black")};
  margin: 0px 10px;
`;

export const FeaturesCat = styled.span`
  color: ${({theme}) => theme.TEXTCOLOR1};
`;


export const ButtonInc = styled(AddIcon)`
  transition: 0.3s ease;
  &:hover {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.3s ease;
  }
`;
export const ButtonDec = styled(RemoveIcon)`
  transition: 0.3s ease;
  &:hover {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.3s ease;
  }
`;
export const WrapperCounterCart = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;
export const LabelCounter = styled.div`
background-color: ${({theme}) => theme.GRAYCOLOR};
padding: 10px 17px;
margin: 0px 10px;
width: 50px;
display: flex;

align-items: center;
justify-content: center;
`;
