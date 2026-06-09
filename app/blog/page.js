import Link from "next/link";

export default async function BlogPage() {

  //db call

   const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  // const posts = [
  //   {
  //     id: 1,
  //     title: "post 1",
  //     body: "post 1 body",
  //   },
  //   {
  //     id: 2,
  //     title: "post 2",
  //     body: "post 2 body",
  //   },
  // ];
  return (
    <div>
      

      <h1>blog post</h1>
      <div className="flex gap-8 flex-wrap">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border">
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-indigo-500">{post.title}</h2>
                <p>{post.body}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
