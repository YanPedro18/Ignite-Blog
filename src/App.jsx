import Header from "./components/Header";
import styles from "./App.module.css";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar/Sidebar";


// eslint-disable-next-line no-unused-vars
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/yanpedro18.png",
      name: 'Yan Pedro',
      role: 'Estagiario '
    },
    content: [
      {type: 'paragrafo', content: 'Fala galeraa! 👋'},
      {type: 'paragrafo', content: 'Hoje Aprendi a manipular arrays de objetos, utilizando props com eles.'},
      {type: 'paragrafo', content: '👉 YanPedro18'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2023-06-30 11:30:10'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/yanpedro18.png",
      name: 'Joao Junior',
      role: 'Estagiario Infra '
    },
    content: [
      {type: 'paragrafo', content: 'Fala galeraa! 👋'},
      {type: 'paragrafo', content: 'Hoje Aprendi a manipular arrays de objetos, utilizando props com eles.'},
      {type: 'paragrafo', content: '👉 YanPedro18'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2023-06-28 20:00:00'),
  },
]
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map((post) => {
           return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
           )
         })}
        </main>

      </div>
    </>
  );
}

export default App;
