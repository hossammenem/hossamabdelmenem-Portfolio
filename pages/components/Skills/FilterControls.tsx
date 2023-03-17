import useFilters from "./filters";
import FilterBtn from "./FilterBtns";

export default function FilterContolrs() {
  const { filterAll, filterFrontend, filterBackend } = useFilters();

  return (
    <div className="mx-auto flex gap-4 rounded-md border-[1px] border-gray-500 bg-anotherBlack px-4 py-2">
      <FilterBtn filterName="All" filterFunc={filterAll} />
      <FilterBtn filterName="Front-end" filterFunc={filterFrontend} />
      <FilterBtn filterName="Back-end" filterFunc={filterBackend} />
    </div>
  );
}
