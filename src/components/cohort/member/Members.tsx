import { Delete, Edit } from "@mui/icons-material";
import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import dayjs from "dayjs";
import { IUser } from "../../../interfaces/user";

interface IMemberProps {
  members: IUser[];
  displayScore: boolean;
  displayEmptyCell?: boolean;
  setMemberEditIndex?: (index: number) => void;
  deleteMember?: (index: number) => void;
}

const Members = ({
  members,
  displayScore,
  displayEmptyCell = false,
  setMemberEditIndex,
  deleteMember,
}: IMemberProps) => {
  const tableFields = ["Name", "Email", "Start Date"];

  if (displayScore) tableFields.push("Score");
  return (
    <div>
      <Typography variant="h2">Members</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {members.length > 0 &&
                tableFields.map((cell, index) => (
                  <TableCell key={`${index}-${cell}`}>{cell}</TableCell>
                ))}
              {(displayEmptyCell || members.length === 0) && (
                <TableCell></TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {members.length === 0 ? (
              <TableRow>
                <TableCell>No members added yet</TableCell>
              </TableRow>
            ) : (
              members.map((row, index) => (
                <RenderTableRow
                  key={`${row.id ? row.id : index}-${row.username}`}
                  row={row}
                  index={index}
                  setMemberEditIndex={setMemberEditIndex}
                  deleteMember={deleteMember}
                  displayScore={displayScore}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

interface IRenderTableRowProps {
  row: IUser;
  index: number;
  displayScore: boolean;
  setMemberEditIndex?: (index: number) => void;
  deleteMember?: (index: number) => void;
}

const RenderTableRow = ({
  row,
  index,
  displayScore,
  setMemberEditIndex,
  deleteMember,
}: IRenderTableRowProps) => {
  return (
    <TableRow>
      <TableCell>{row.username}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell>{dayjs(row.joinDate).format("MMM D, YYYY")}</TableCell>
      {displayScore && <TableCell>{row.score}</TableCell>}
      {setMemberEditIndex && deleteMember && (
        <>
          <TableCell>
            <IconButton onClick={() => setMemberEditIndex(index)}>
              <Edit />
            </IconButton>

            <IconButton onClick={() => deleteMember(index)}>
              <Delete />
            </IconButton>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

// interface IRenderEditTableRowProps extends IRenderTableRowProps {
//   setMemberEditIndex: (index: number) => void;
// }

// const RenderEditTableRow = ({
//   row,
//   index,
//   setMemberEditIndex,
//   displayScore,
// }: IRenderEditTableRowProps) => {
//   return (
//     <TableRow key={`${row.id ? row.id : index}-${row.username}`}>
//       <TableCell>{row.username}</TableCell>
//       <TableCell>{row.email}</TableCell>
//       <TableCell>{row.joinDate}</TableCell>
//       {displayScore && <TableCell>{row.score}</TableCell>}
//       {setMemberEditIndex && (
//         <TableCell>
//           <IconButton onClick={() => setMemberEditIndex(index)}>
//             <Edit />
//           </IconButton>
//         </TableCell>
//       )}
//     </TableRow>
//   );
// };

export default Members;
