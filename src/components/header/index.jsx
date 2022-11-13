import React from "react";
import { NewsHeader, NewsHeaderTitle } from "./styles";

// Style in the same component instead of importing
// const NewsHeader = styled.header`
//   header {
//     height: 320px;
//     background: url(../img/img.jpg) center no-repeat;
//     background-size: cover;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   header h1 {
//     font-family: "Lobster", cursive;
//     font-weight: normal;
//   }
// `;

const Header = ({ siteTitle }) => {
  return (
    <NewsHeader>
      <NewsHeaderTitle>{siteTitle}</NewsHeaderTitle>
    </NewsHeader>
  );
};

export default Header;
