import {useEffect, useState} from 'react';
import AddPost from './AddPost';
import EditPost from './EditPost';

function App() {
  const [posts, setPosts] = useState([]);
  const [modalActiveAdd, setModalAdd] = useState(false);
  const [modalActiveEdit, setModalEdit] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    })
  }, []);

  //ф-ция удаления постов
  const deletePost = (post) => {
    let id_post = post.id;
    setPosts(posts.map(post => {
      if(post.id >= id_post){
        post.id--;
      }
    }))
    setPosts(posts.filter(p => p !== post));
  };

  //сохраняем id поста для редактирования
  const [change, setChanges] = useState(-1);
  const post_edit = (post) => {
    setChanges(post.id);
  }

  return (
    <div className='App'>
        {posts.map(post => (
          <div className='Post' key={post.id}>
            <button onClick ={() => {deletePost(post)}}>delete</button>
            <button onClick ={() => setModalAdd(true)}>add</button>
            <button onClick ={() => {setModalEdit(true); post_edit(post)}}>edit</button>
            <p>User: {post.userId}</p>
            <p>{post.id}</p>
            <p className='title'>{post.title}</p>
            <p className='p_body'>{post.body}</p>
          </div>
        ))}
        <AddPost posts={posts} setPosts={setPosts} modalActiveAdd={modalActiveAdd} setModalAdd={setModalAdd}/>
        <EditPost change={change} posts={posts} setPosts={setPosts} modalActiveEdit={modalActiveEdit} setModalEdit={setModalEdit}/>
    </div>
  );
}
export default App;