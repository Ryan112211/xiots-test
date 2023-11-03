import CustomTable from "@/components/table/Table";

async function getData(page = 1) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=4`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Posts({ searchParams }: any) {
  const data = await getData(searchParams?.page);
  console.log(searchParams);
  return (
    <main>
      <CustomTable postTitle="Posts" data={data} />
    </main>
  );
}
