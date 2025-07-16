import React, { useState, useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import SearchBar from "../components/SearchBar";
import MediaCard from "../components/MediaCard";
import { CircularProgress, Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = data.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, data]);

  return (
    <div className="main">
      <div className="main__header">
        <h1>Social Media For Travellers</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="main__content">
        {loading ? (
          <CircularProgress sx={{ color: "#f15a24" }} />
        ) : error ? (
          <Typography color="error">Error: {error}</Typography>
        ) : filteredPosts.length === 0 ? (
          <Typography>No posts found</Typography>
        ) : (
          filteredPosts.map((post) => (
            <MediaCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.body}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
