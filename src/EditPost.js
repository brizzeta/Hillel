import { useState } from 'react';
import './App.css';

function EditPost({change, posts, setPosts, modalActiveEdit, setModalEdit}) {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const Edit = () => {
        setPosts(posts.map(post => {
            if (post.id === change) {
                post.title = text1;
                post.body = text2;
            }
            return post;
        }))
        setText1("");
        setText2("");
    }

    return(
        <div className={modalActiveEdit ? "modal active" : "modal"} onClick={() => setModalEdit(false)}>
            <div className={modalActiveEdit ? "modal_cont active" : "modal_cont"} onClick={e => e.stopPropagation()}>
                <h4>Edit Post</h4>
                <label>Title</label>
                <input type="text" value={text1} onChange={(e) => setText1(e.target.value)}/>
                <label>Text</label>
                <input type="text" value={text2} onChange={(e) => setText2(e.target.value)}/>
                <button onClick ={() => {Edit(); setModalEdit(false);}} className="modal_button">done</button>
            </div>
        </div>
    )
}
export default EditPost;