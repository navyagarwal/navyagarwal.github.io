import { Link } from 'react-router';

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
};

export function Blog() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'First Blog Post Title',
      date: '2024-03-15',
      excerpt: 'A short excerpt or introduction to what this post is about. Something interesting that makes people want to read more.',
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'Another Interesting Post',
      date: '2024-02-28',
      excerpt: 'More thoughts on something. Could be technical, creative, or personal. Whatever you want to share.',
      readTime: '3 min read',
    },
    {
      id: '3',
      title: 'Thoughts on Something',
      date: '2024-01-10',
      excerpt: 'Writing about experiences, learnings, or just random musings.',
      readTime: '4 min read',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.id}`} className="block">
              <div className="border-l-2 border-pink-200 pl-6 hover:border-primary transition-colors">
                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <time>{formatDate(post.date)}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
