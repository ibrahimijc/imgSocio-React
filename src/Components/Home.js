import React from 'react';

function Home() {
  return (
    <div className="Feed section container">
      <div className="POST">
        <img
          src="https://images.unsplash.com/photo-1555813456-a7f1fed567c5?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cVBZc0R6dkpPWWN8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <p>the images description here</p>
        <input type="text" placeholder="add comment.." />
      </div>

      <div className="POST">
        <img
          src="https://images.unsplash.com/photo-1607596403761-2383e8a15ed2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <p>the images description here</p>
        <input type="text" placeholder="add comment.." />
      </div>

      <div className="POST">
        <img
          src="https://images.unsplash.com/photo-1597423243887-0a1fb9f13d70?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHFQWXNEenZKT1ljfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="post"
        />
        <p>the images description here</p>
        <input type="text" placeholder="add comment.." />
      </div>
    </div>
  );
}

export default Home;
