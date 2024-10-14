import { createContext, useContext, useEffect, useState } from "react";
import apiFetch from "../services/apiFetch";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const posts = await apiFetch("posts");
        setPosts(posts);
        setIsLoading(false);
      }catch(error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  const changePostLike = (postId, action) => {
    const post = posts.find(post => post.id === postId);
    post.likes = action === "sum" ? post.likes + 1 : post.likes - 1; 
    const index = posts.findIndex(post => post.id === postId);
    const newPosts = posts;
    posts[index] = post;
    setPosts([...newPosts]);
  }

  return (
    <DataContext.Provider
      value={{
        posts,
        error,
        isLoading,
        setError,
        setIsLoading,
        setPosts,
        changePostLike
      }}
    >
      { children }
    </DataContext.Provider>
  );
}

const useData = () => useContext(DataContext);

export { useData, DataProvider };
