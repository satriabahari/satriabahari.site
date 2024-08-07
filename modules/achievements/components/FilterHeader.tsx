import ComboBoxFilter from "./ComboBoxFilter";
import InputSearch from "./InputSearch";

interface FilterHeaderProps {
  totalData?: number;
}

const FilterHeader = ({ totalData }: FilterHeaderProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex w-full flex-col items-center justify-between space-y-4 md:flex-row">
        <InputSearch />
        <ComboBoxFilter />
      </div>
      <div className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">
        Total: {totalData}
      </div>
    </div>
  );
};

export default FilterHeader;
