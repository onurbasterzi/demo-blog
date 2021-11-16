import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const history=useHistory()



  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    axios.post("http://localhost:8000/blogs",blog).then(()=>{
      console.log("new blog added");
      setIsPending(false);
      //history.go(-1)
      history.push('/')
    })
        
    

    // fetch("http://localhost:8000/blogs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    //   console.log("new blog added");
    //   setIsPending(false);
    //   //history.go(-1)
    //   history.push('/')
    // });
  };

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          required
          defaultValue={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          defaultValue={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Addding ...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
