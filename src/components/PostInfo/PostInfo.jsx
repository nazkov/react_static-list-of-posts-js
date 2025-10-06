import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post, user, comments = [] }) => {
  const { title, body } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <p>
            {' Posted by '}
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
