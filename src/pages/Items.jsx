import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GradientButton from "../components/GradientButton";
import './Items.css'
import MediaCard from "../components/MediaCard";

const Items = () => {
	const { id } = useParams();
  const navigate = useNavigate();
	const { data } = useSelector((state) => state.posts);
	const [postData, setPostData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState("details");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const scrollRef = useRef(null);

	useEffect(() => {
		const found = data.find((p) => p.id == id);
		setPostData(found);
    const otherPosts = data.filter((p) => p.id != id);
    setFilteredPosts(otherPosts);
		setLoading(false);
	}, [data, id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id]);
  

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
    <div className="post_details_page" ref={scrollRef}>
      <div className="item_container">
        <div className="header_container">
          <div className="back_button" onClick={() => navigate('/')}>
            <ArrowBackIcon fontSize="small" />
          </div>
          <div className="post_number">
            <h1>{`Post Number ${id}`}</h1>
          </div>
        </div>
        <div className="post_container">
          <div
            className="post_card"
            style={{
              backgroundImage: `url(https://picsum.photos/200?random=${id})`,
            }}
          >
            <h3>{postData.title.split(" ").slice(0, 3).join(" ")}</h3>
            <div className="card_icons">
              <ShareIcon />
              <FavoriteBorderIcon />
            </div>
          </div>
          <div className="post_info">
            <div className="post_info_buttons">
              <GradientButton
                active={activeTab === "details"}
                onClick={() => setActiveTab("details")}
              >
                Details
              </GradientButton>
              <GradientButton
                active={activeTab === "user"}
                onClick={() => setActiveTab("user")}
              >
                User Info
              </GradientButton>
            </div>
            <div className="post_details">
                {
                  activeTab === "user" ? (
                    <span>{`Post was posted by ${postData.userId}`}</span>
                  ) : 
                  (
                    <span>{postData.body}</span>
                  )
                }
            </div>
          </div>
        </div>
      </div>

      <div className="other_posts_container">
        <div className="more_deails">
          <h1>More Posts</h1>
        </div>
        <div className="otherPosts">
                {
                  filteredPosts.map((post) => (
                    <MediaCard
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      description={post.body}
                    />
                  ))
                }
        </div>
      </div>
    </div>
	);
};


export default Items;
