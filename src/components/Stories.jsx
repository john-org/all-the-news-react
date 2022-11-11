import React from "react";
import Story from "./story";

const Stories = ({ stories, section }) => {
  return (
    <div className="site-wrap">
      <h2 className="section-head">{section}</h2>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
      {/* <pre>
        <code>{JSON.stringify(props.stories, null, 2)}</code>
      </pre> */}
    </div>
  );
};

export default Stories;
