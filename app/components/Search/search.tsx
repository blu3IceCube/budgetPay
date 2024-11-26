import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="flex felx-row items-center w-[80%]">
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-2 w-full rounded-3xl outline-none"
      />
      <Search className="absolute right-9" />
    </div>
  );
};

export default SearchBox;
