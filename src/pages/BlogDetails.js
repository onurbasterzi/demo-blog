import axios from "axios";
import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";


const BlogDetails = () => {
  const { id } = useParams();
  const {data:blog,error,isPending}=useFetch('http://localhost:8000/blogs/'+id)
  const history=useHistory()

  const handleDelete=()=>{
      // fetch('http://localhost:8000/blogs/' +id,{
      //     method:'DELETE'
      // }).then(()=>{
      //       history.push('/')
      // })

      axios.delete('http://localhost:8000/blogs/' +id).then(()=>{
        history.push('/')
      })
  }

  return (
    <div className="blog-details">
     {isPending && <div>Loading...</div>}
     {error&& <div>{error}</div>}
     {blog && (
         <article>
             <h2>{blog.title}</h2>
             <p>writtten by {blog.author}</p>
             <div>{blog.body}</div>
             <button onClick={handleDelete}>Delete</button>
         </article>
          
        
     )}
    </div>
  );
};

export default BlogDetails;
