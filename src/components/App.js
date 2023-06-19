import video from "../data/video.js";
import Details from "./Details.js";
import Comments from "./Comments.js";
import Votes from "./Votes.js";
import { useState } from "react";


function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  console.log("Here's your data:", video);
  console.log(upvotes, downvotes);
  function changeVotes(vote) {
    if (vote === 'up') {setUpvotes(upvotes+ 1)}
    else {setDownvotes(downvotes + 1)}
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details title={video.title} views={video.views} uploaded={video.createdAt}/>
      <Votes upvotes={upvotes} downvotes={downvotes} changeVotes={changeVotes}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
