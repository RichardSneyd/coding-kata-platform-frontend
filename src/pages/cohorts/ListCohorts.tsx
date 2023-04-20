import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/AppContext";
import FilterTable, { ITableFields } from "../../components/global/FilterTable";

const ListCohorts = () => {
  const { cohorts } = useContext(AppContext) as IAppContext;

  const tableFields: ITableFields[] = [
    { label: "ID", field: "id", type: "string" },
    { label: "Name", field: "name", type: "string" },
    { label: "Start Date", field: "startDate", type: "date" },
    { label: "# Members", field: "members", type: "count" },
  ];

  return (
    <FilterTable
      title="👨‍🎓 Cohorts"
      viewLink={"/cohorts/"}
      rows={cohorts}
      fields={tableFields}
      createLink={`/cohorts/new`}
    />
  );
};

export default ListCohorts;
