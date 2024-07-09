import useSort from "../hooks/useSort";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";
function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, handleClick } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig}></Table>;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp></GoArrowSmallUp>
        <GoArrowSmallDown></GoArrowSmallDown>
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp></GoArrowSmallUp>
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown></GoArrowSmallDown>
      </div>
    );
  }
}

export default SortableTable;
