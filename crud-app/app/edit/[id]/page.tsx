export default function EDitPage() {
    return (
      <div>
        <h2 className="text-2xl font-bold my-8">Edit Topic</h2>
        <form className="flex gap-3 flex-col">
          <input
            type="text"
            name="topic"
            placeholder="Topic"
            className="px-4 py-1 border rounded-md"
          />
          <textarea
            name="content"
            rows={4}
            placeholder="Content"
            className="px-4 py-1 border rounded-md resize-none"
          />
          <button className="bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer">
            Update Topic
          </button>
        </form>
      </div>
    );
  }
  