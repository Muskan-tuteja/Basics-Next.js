export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "post 1",
      body: "post 1 body",
    },
    {
      id: 2,
      title: "post 2",
      body: "post 2 body",
    },
  ];
  return (
    <div>
      <h1>blog post</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <a href={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
