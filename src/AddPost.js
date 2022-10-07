import { useState } from 'react';
import './App.css';

function AddPost({posts, setPosts, modalActiveAdd, setModalAdd}) {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const Add = () => {
        let nextId = posts.length + 1;
        let newObject = {
            "userId": 1,
            "id": nextId,
            "title": text1,
            "body": text2
        };
        setPosts([...posts, newObject]);

        setText1("");
        setText2("");
    }

    return(
        <div className={modalActiveAdd ? "modal active" : "modal"} onClick={() => setModalAdd(false)}>
            <div className={modalActiveAdd ? "modal_cont active" : "modal_cont"} onClick={e => e.stopPropagation()}>
                <h4>New Post</h4>
                <label>Title</label>
                <input type="text" value={text1} onChange={(e) => setText1(e.target.value)}/>
                <label>Text</label>
                <input type="text" value={text2} onChange={(e) => setText2(e.target.value)}/>
                <button onClick ={() => {Add(); setModalAdd(false);}} className="modal_button">done</button>
            </div>
        </div>
    )

}
export default AddPost;