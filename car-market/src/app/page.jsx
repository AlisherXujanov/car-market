import Link from "next/link";


function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa temporibus ullam at odio praesentium architecto, quod, vitae accusamus asperiores maiores atque modi ipsa perferendis ex! Optio excepturi molestiae aperiam perferendis.</p>
      <Link href="/about">About</Link>
    </>
  )
}
export default Home