import { useState } from "react";

export default function Comments({comments}) {
  const [showComments , setShowComments] = useState(true);
  function toggleComments() {
    setShowComments(showComments => !showComments);
  }

  function displayComments() {
    return comments.map(comment => {
      return (
        <div key={comment.id}>
          <h1>{comment.user}</h1>
          <h3>{comment.comment}</h3>
        </div>
      )
    })
  }
  return (
    <div>
      <button onClick={toggleComments}>Hide Comments</button>
      <hr></hr>
      {showComments ? displayComments() : <></>}
    </div>
  )
}