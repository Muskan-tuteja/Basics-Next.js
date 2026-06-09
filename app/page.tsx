import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return( <div>
    <nav className="flex gap-4 red">
      <Link href="/">Logo</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </nav>
    <h1>Welcome to Next JS Blog app</h1>
  </div>
  )
    
}
