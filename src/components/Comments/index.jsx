/* eslint-disable react/prop-types */


import { useState } from "react";
import Avatar from "../Avatar";
import styles from "./Comments.module.css";
import { Trash, ThumbsUp } from "phosphor-react";



// eslint-disable-next-line react/prop-types
function Comments({ author, time, content,  removeValue}) {
  const [count, setCount] = useState(0)



function contador (e) {
  e.preventDefault();

  setCount((state) => {
    return state + 1
  })
}
  return (
    <article className={styles.comments}>
      <header className={styles.headerAuthors}>
        <div className={styles.authors}>
        <Avatar hesBorder={false} src="https://github.com/yanpedro18.png" />
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <strong>
              {author.user} <span>(você)</span>
            </strong>
            <time>{time}</time>
            <div className={styles.message}>
              <p>{content}</p>
            </div>
          </div>

          <div onClick={removeValue} className={styles.icon}>
            <Trash  size={24} weight="bold" />
          </div>
        </div>
      </header>
      <div className={styles.liked}>
        <ThumbsUp className={count ? styles.animation : " "} size={20} weight="bold" />
        <strong onClick={contador}>Aplaudir • {count}</strong>
      </div>
    </article>
  );
}

export default Comments;
