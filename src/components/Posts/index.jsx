import { PostCards } from "../PostCards";
import './styles.css'

export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <PostCards
                key={post.id}
                title={post.title}
                cover={post.cover}
                id={post.id}
                body={post.body}
            />
        ))}
    </div>
);