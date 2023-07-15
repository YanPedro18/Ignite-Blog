/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import {} from "date-fns/locale/pt-BR";
import Avatar from "../Avatar";
import Comments from "../Comments";
import styles from "./Post.module.css";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Post({ author, content, publishedAt }) {
  const [newComments, setNewComments] = useState("");
  const [comments, setComments] = useState([
    {
      author: {
        user: "Weuler Morais",
      },
      time: "Cerca de 2h",
      content: "Muito bom Yan, parabéns!! 👏👏",
    },
    {
      author: {
        user: "Testa Otario",
      },
      time: "Cerca de 1h",
      content: "Muito bom Yan, pra cima!! 👏",
    },
    {
      author: {
        user: "Caio VillaFraca",
      },
      time: "Cerca de 5h",
      content: "Top em mano, paraéns!",
    },
  ]);

  function valueInput(e) {
    e.preventDefault();

    const newUserComment = {
      author: {
        user: "Anonimous",
      },
      time: "Cerca de 1m",
      content: newComments,
    };

    setComments([...comments, newUserComment]);

    setNewComments("");
  }

  function removeValue() {
    //imutabilidade as variaveis nao sofrem mutação, não alteramos na memoria.
    //nos criamos um novovalor um novo espaço na memoria.
    const updatedComments = [...comments];
    updatedComments.pop();
    setComments(updatedComments);
  }

  const pubDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const pubNewDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
  });

  function invalidComent() {
    //isso muda o texto do required de textarea
    event.target.setCustomValidity('Preencha o Campo!')

    event.target.setCustomValidity('')
  }
  return (
    <article className={styles.posts}>
      <header className={styles.headerAuth}>
        <div className={styles.author}>
          <Avatar hesBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={pubDateFormat} dateTime="">
          {pubNewDate}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((c) => {
          if (c.type == "paragrafo") {
            return <div key={c.content}>{c.content}</div>;
          } else if (c.type == "link") {
            return (
              <p key={c.content}>
                {" "}
                <a href="#">{c.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={valueInput} action="" className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          required
          value={newComments}
          onChange={(e) => setNewComments(e.target.value)}
          placeholder="Deixe um comentário"
          onInvalid={invalidComent}

        />
        <footer>
          <button type="submit" disabled={newComments ? false : true}>Publicar</button>
        </footer>
      </form>
      {comments.map((comments) => {
        return (
          <Comments
            key={comments.content}
            author={comments.author}
            time={comments.time}
            content={comments.content}
            removeValue={removeValue}
          />
        );
      })}
    </article>
  );
}

export default Post;
