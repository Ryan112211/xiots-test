import CustomTable from "@/components/table/Table";

async function getData(page = 1) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=4`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Posts({ searchParams }: any) {
  const data = await getData(searchParams?.page);

  return (
    <main>
      <CustomTable postTitle="Posts" data={data} />
    </main>
  );
}
