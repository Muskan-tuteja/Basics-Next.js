import Link from "next/link";

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
      <nav className="flex gap-4 red">
        <Link href="/">Logo</Link>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>

      <h1>blog post</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
