import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { IUser } from "../../interfaces/user";

type IStyledRowProps = {
  active: number;
};

const StyledRow = styled(TableRow)`
  background-color: ${(props: IStyledRowProps) =>
    props.active ? orange[100] : "inherit"};
`;

const leaderboardFields = ["Rank", "User", "Score"];

const CohortLeaderoard = ({
  leaderboard,
  userId,
}: {
  leaderboard: IUser[] | undefined;
  userId: number;
}) => {
  /* const classes = useStyles(); */
  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="Solutions table">
        <TableHead>
          <TableRow>
            {leaderboardFields.map((cell, index) => (
              <TableCell key={`${index}-${cell}`}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboard?.map((u: IUser, index: number) => (
            <StyledRow key={index} active={u.id === userId ? 1 : 0}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{u.username}</TableCell>
              <TableCell>{u.score}</TableCell>
            </StyledRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CohortLeaderoard;
