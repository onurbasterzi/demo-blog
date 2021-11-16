import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BlogList = (/*props*/ { blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title=props.title

  const [reload, setReload] = useState(false);

  const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/blogs/" + id).then(() => {
      blogs.splice(blogs.findIndex((blog) => blog.id === id),1);
      !reload ? setReload(true) : setReload(false);
    });

    // fetch('http://localhost:8000/blogs/' +id,{
    //       method:'DELETE'
    //   }).then(()=>{
    //         blogs.splice(blogs.findIndex((blog)=>blog.id===id),1)
    //         !reload ? setReload(true):setReload(false)
    //   })
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((data) => (
        <div key={data.id} className="blog-preview">
          <Link to={`/blogs/${data.id}`}>
            <h2>{data.title}</h2>
            <p>Written bye {data.author}</p>
          </Link>

          <button
            className="deleteButton"
            onClick={() => deleteHandler(data.id)}
          >
            Delete
          </button>
          <Link className="updateButton" to={`/blogs/update/${data.id}`}>
            Update
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
