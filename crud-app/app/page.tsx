import Link from "next/link";
import { Topic, getTopics } from "./getTopics";

export default async function Home() {
  const topics: Topic[] = await getTopics();

  return (
    <div>
      {topics.map((topic: Topic) => (
        <div key={topic.id} className="p-4 my-2 rounded-md border-b leading-8">
          <div className="font-bold">{topic.title}</div>
          <div>{topic.content}</div>
          <div className="flex gap-4 mt-4 justify-end">
            <Link
              className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest"
              href={`/edit/${topic.id}`}
            >
              Edit
            </Link>
            <button className="bg-red-400 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
