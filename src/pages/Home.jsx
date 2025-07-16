import React, {useState, useEffect} from 'react';
import "./Home.css";
import { useDispatch} from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import SearchBar from '../components/SearchBar';
import MediaCard from '../components/MediaCard';
import { CircularProgress } from '@mui/material';

const Home = () => {
    const dispatch = useDispatch();
    // const { data: posts, loading, error } = useSelector((state) => state.posts);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // const filteredPosts = posts.filter((post) =>
    // post.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

  return (<>
       <div className='main'>
            <div className='main__heading'>
                <h1>Social Media For Travellers</h1>
            </div>
            <div className='main__searchbar'>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
            {/* {loading ? <CircularProgress color='blue'/> : 
                <div>
                    Posts
                </div>
            } */}
            <MediaCard/>
       </div>

    </>
  )
}

export default Home