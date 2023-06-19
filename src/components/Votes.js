export default function Votes({ upvotes, downvotes, changeVotes }) {

  function handleUpvote() {
    changeVotes('up');
  }

  function handleDownvote() {
    changeVotes('down');
  }

  return (
    <div>
      <div>
        <button onClick={handleUpvote}>{upvotes} 👍</button>
        <button onClick={handleDownvote}>{downvotes} 👎</button>
      </div>
    </div>
  )
}