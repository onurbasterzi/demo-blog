import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";



const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  

  const title = "All Posts";

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title={title} />}
    </div>
  );
};

export default Home;
