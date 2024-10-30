import "./Comments.css";
import CommentApi from "./CommentApi.json";

interface Comment {
  author: string;
  rating: number;
  text: string;
}

const Comments = () => {
  return (
    <>
      <div className="comments-container">
        <div className="text-comments-top">
          <h2>Comments of others</h2>
          <a href="#" className="see-more">
            See More
          </a>
        </div>
        <div className="comments-grid">
          {CommentApi.map((comment, index) => (
            <div className="comment-card" key={index}>
              <div className="comment-header">
                <span>{comment.author}.</span>
                <span className="rating">⭐ {comment.rating}</span>
              </div>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
