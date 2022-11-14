import React from "react";
import Story from "../story";
import { SectionHead, SiteWrap } from "./styles";

const Stories = ({ stories, section }) => {
  return (
    //  <div className="site-wrap">
    <SiteWrap>
      {/* <h2 className="section-head">{section}</h2> */}

      <SectionHead>
        {section}
        {/* {loading ? "" : <Loading />} */}
      </SectionHead>

      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
      {/* <pre>
        <code>{JSON.stringify(props.stories, null, 2)}</code>
      </pre> */}
    </SiteWrap>
    // </div>
  );
};

export default Stories;
