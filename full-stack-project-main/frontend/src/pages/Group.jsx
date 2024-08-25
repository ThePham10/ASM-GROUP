import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PostingArea from '../components/PostingArea';
import UserPosts from '../components/UserPosts';
import { membersPosts } from '../model/memberPost';
import GroupHeaderBox from '../components/GroupHeaderBox';

const Group = ({ groupID }) => {
  // Function to add posts
  const [posts, setPosts] = useState(membersPosts);

  // Function to add a new post
  const DisplayPost = (content) => {
    const newPost = {
      id: posts.length + 1, // Auto-incrementing ID
      content: content,
      author: "Current User", // Replace with actual user info
      timestamp: new Date().toLocaleString(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div style={{ background: '#B9D9DC' }}>
      <NavBar />
      <GroupHeaderBox groupID={groupID} /> {/* Assigning the id prop to GroupHeaderBox */}
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-3"></div>
        <div className="col-span-6">
          <div className="mb-4"></div>
          <PostingArea addPost={DisplayPost} />
          <UserPosts posts={posts} />
        </div>
        <div className="col-span-3"> </div>
      </div>
    </div>
  );
};

export default Group;
