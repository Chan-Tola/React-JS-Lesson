import React from "react";
import Card from "./Card";
import "./PosterStyle.css";
const Post = () => {
  return (
    <>
      <div className="Container">
        <Card
          src="/public/Images/p1.jpg"
          name="ren chantola"
          texting="hello my name is ren chantola"
        >
          {/* this are tags that we want to add more into the Card components */}
          <label>This is me</label>
          <button>Click me</button>
        </Card>
        <Card
          src="/public/Images/p2.jpg"
          name="run sokbuma"
          texting="hello my name is ren chantola"
        />
        <Card
          src="/public/Images/p3.jpg"
          name="rong chanrith"
          texting="hello my name is ren chantola"
        />
      </div>
    </>
  );
};

export default Post;
