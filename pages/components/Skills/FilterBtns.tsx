interface IFilterBtn {
  filterName: string;
  filterFunc: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

export default function FilterBtn(props: IFilterBtn) {
  const isAll = props.filterName === "All" ? "active" : "";
  return (
    <button
      className={`${isAll} filter-btn rounded-md px-2 py-1 transition-all duration-300 ease-in-out hover:bg-gray-500 focus-visible:outline-none`}
      onClick={props.filterFunc}
    >
      {props.filterName}
    </button>
  );
}
