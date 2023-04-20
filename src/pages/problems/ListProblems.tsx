import { useEffect, useState } from "react";

import authService from "../../services/authService";
import ProblemService from "../../services/problemService";
import Loading from "../../components/global/Loading";
import EmptyState from "../../components/global/EmptyState";

import { IProblem } from "../../interfaces/problemSet";
import FilterTable, { ITableFields } from "../../components/global/FilterTable";

const ListProblems = () => {
  const [problems, setProblems] = useState<IProblem[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = authService.getAccessToken();

    if (token) {
      if (problems.length === 0) {
        setError("");
        setLoading(true);
        ProblemService.getAll(token)
          .then((result) => {
            setProblems(result);
            setLoading(false);
          })
          .catch((err) => {
            console.log("Error getting problems", err);
            setError("Error fetching data");
            setLoading(false);
          });
      }
    } else {
      setError("Authentication error, please log in again");
      setLoading(false);
    }
  }, [problems.length]);

  const tableFields: ITableFields[] = [
    { label: "ID", field: "id", type: "string" },
    { label: "Title", field: "title", type: "string" },
    { label: "Difficulty", field: "difficulty", type: "difficulty" },
    { label: "Tags", field: "tags", type: "tags" },
  ];

  if (loading) return <Loading />;
  if (error) return <EmptyState message={error} />;
  return (
    <FilterTable
      title="🤔 Problems"
      rows={problems}
      fields={tableFields}
      createLink={`/problems/new`}
      viewLink={`/problems/`}
    />
  );
};

export default ListProblems;
