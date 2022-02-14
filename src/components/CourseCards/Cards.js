import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import styles from "../../styles/Cards.module.css";

const Cards = () => {
  let dummyData = {
    src: "https://images.unsplash.com/photo-1643662372195-49a2b4ab6278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Create Cinematic Music Video",
    author: "John Doe",
    videos: 15,
    materials: 3,
    description:
      "Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...",
    category: "Art & Humanity",
  };

  return (
    <div className={styles.cards}>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
      <Link to="/detail">
        <Card
          src={dummyData.src}
          title={dummyData.title}
          author={dummyData.author}
          videos={dummyData.videos}
          materials={dummyData.materials}
          description={dummyData.description}
          category={dummyData.category}
        />
      </Link>
    </div>
  );
};

export default Cards;
