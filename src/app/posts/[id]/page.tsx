import SinglePost from "@/components/posts/SinglePost";

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Posts({ params }: any) {
  const data = await getData(params?.id);

  return (
    <main>
      <SinglePost data={data} />
    </main>
  );
}
