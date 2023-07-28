import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const CommentDetail = (props) => {
  return (
    <div className="ui container comments">
      <Stack direction="row" spacing={2}>
        <div className="ui comments">
          <h3 className="ui dividing header">Comments</h3>
          <div className="comment">
            <a href="/" className="avatar">
              <Avatar src="/broken-image.jpg" />
            </a>
            <div className="content">
              <a href="/" className="author">
                {props.author}
              </a>
              <div className="metadata">
                <span className="date">{props.time}</span>
              </div>
              <div className="text">{props.comment}</div>
              <div className="actions">
                <a href="/" className="reply">
                  Reply
                </a>
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default CommentDetail;
