import { Search } from "lucide-react";

export default function SearchComponent() {
  return (
    <form className="bg-zinc-100 max-w-fit flex items-center space-x-4 py-2 px-4 rounded-md" action="/">
      <input type="search" name="search" className="bg-transparent outline-none" placeholder="TypeScript" />
      <button type="submit">
        <Search size={20} />
      </button>
    </form>
  );
}
