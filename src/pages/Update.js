import axios from "axios";
import { useState, useRef } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Update = () => {
  const { id } = useParams();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const titleRef = useRef();
  const authorRef = useRef();
  const bodyRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value,
    };

    setIsLoading(true);

    axios.put("http://localhost:8000/blogs/" + id, { ...blog }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      //history.go(-1)
      history.push("/");
    });

    // fetch("http://localhost:8000/blogs/"+id, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    //   console.log("new blog added");
    //   setIsLoading(false);
    //   //history.go(-1)
    //   history.push('/')
    // });
  };

  return (
    <div className="create">
      {blog && (
        <div>
          <h2>Update Post</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
              type="text"
              defaultValue={blog.title}
              ref={titleRef}
              required
            />
            <label>Blog Body:</label>
            <textarea
              required
              defaultValue={blog.body}
              ref={bodyRef}
            ></textarea>
            <label>Blog Title:</label>
            <select defaultValue={blog.author} ref={authorRef}>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
            </select>

            {!isLoading && <button>Update Blog</button>}
            {isLoading && <button disabled>Updating ...</button>}
          </form>
        </div>
      )}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Update;
