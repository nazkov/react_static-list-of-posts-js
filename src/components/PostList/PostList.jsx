import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
        user={users.find(user => user.id === post.userId)}
        comments={comments.filter(comment => comment.postId === post.id)}
      />
    ))}
  </div>
);
