import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyState from "../../components/EmptyState";
import Loading from "../../components/global/Loading";
import { ICohort } from "../../interfaces/cohort";
import authService from "../../services/authService";
import cohortServices from "../../services/cohortService";

export interface Member {
  id: number;
  username: string;
  email: string;
  roles: string[];
  score: number;
  joinDate: Date;
  solutions: any[];
  completedProblems: any[];
}

const ListCohorts = () => {
  const [cohorts, setCohorts] = useState<ICohort[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const tableFields = ["ID", "Name", "Start Date", "# Members"];

  const navigate = useNavigate();

  useEffect(() => {
    const token = authService.getAccessToken();

    if (token) {
      if (cohorts.length === 0) {
        setError("");
        setLoading(true);
        cohortServices
          .getAll(token)
          .then((result) => {
            setCohorts(result);
            setLoading(false);
          })
          .catch((err) => {
            console.log("Error getting cohorts", err);
            setError("Error fetching data");
            setLoading(false);
          });
      }
    } else {
      setError("Authentication error, please log in again");
      setLoading(false);
    }
  }, [cohorts.length]);

  if (loading) return <Loading />;
  if (error) return <EmptyState message={error} />;
  return (
    <>
      <Typography variant="h1">Cohorts</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableFields.map((cell, index) => (
                <TableCell key={`${index}-${cell}`}>{cell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cohorts.map((row) => (
              <TableRow
                key={`${row.id}-${row.name}`}
                hover
                onClick={() => navigate(`/cohorts/${row.id}`)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.members.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListCohorts;
