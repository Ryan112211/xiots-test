import SinglePost from "@/components/posts/SinglePost";

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Posts({ params }: any) {
  const data = await getData(params?.id);
  console.log(params);
  return (
    <main>
      <SinglePost data={data} />
    </main>
  );
}
