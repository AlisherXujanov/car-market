import Link from "next/link";
import Heading from "./components/Heading";


function Home() {
  return (
    <>
      <Heading title="Hello world"></Heading>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa temporibus ullam at odio praesentium architecto, quod, vitae accusamus asperiores maiores atque modi ipsa perferendis ex! Optio excepturi molestiae aperiam perferendis.</p>
      <Link href="/about">About</Link>
    </>
  )
}
export default Home