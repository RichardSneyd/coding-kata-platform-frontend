import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { IUser } from "../../../interfaces/user";

import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Check } from "@mui/icons-material";
import styled from "@emotion/styled";

interface IEditMemberProps {
  memberIndex: number;
  members: IUser[];
  editMember: (member: IUser) => void;
  startDate: Dayjs | null;
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const EditMember = ({
  memberIndex,
  members,
  editMember,
  startDate,
}: IEditMemberProps) => {
  const [username, setUsername] = useState(members[memberIndex].username);
  const [email, setEmail] = useState(members[memberIndex].email);

  const [customJoinDate, setCustomJoinDate] = useState(true);
  const [joinDate, setStartDate] = useState<Dayjs | null>(
    dayjs(members[memberIndex].joinDate)
  );

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleValidation = () => {
    let passed = true;

    if (username === "") {
      setUsernameError("Name cannot be blank");
      passed = false;
    } else setUsernameError("");

    if (username.length < 3) {
      setUsernameError("Username must be at least 3 characters");
      passed = false;
    } else setUsernameError("");

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Not a valid email");
      passed = false;
    } else setEmailError("");

    // Some start date validation? Maybe not necessary

    return passed;
  };

  const submit = () => {
    if (handleValidation()) {
      setLoading(true);
      const newMember = {
        username,
        email,
        joinDate: customJoinDate
          ? startDate?.format("YYYY-MM-DD")
          : dayjs(joinDate).format("YYYY-MM-DD"),
        roles: ["USER"],
      };

      editMember(newMember);
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader title="Edit a member" />
      <StyledCardContent>
        <TextField
          variant="standard"
          name="username"
          label="Username"
          autoFocus={true}
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          error={usernameError !== ""}
          helperText={usernameError}
        />
        <br />

        <TextField
          variant="standard"
          name="email"
          label="Email"
          autoFocus={true}
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          error={emailError !== ""}
          helperText={emailError}
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Start Date"
            inputFormat="DD/MM/YYYY"
            value={customJoinDate ? startDate : joinDate}
            disabled={customJoinDate}
            onChange={(e: Dayjs | null) => setStartDate(e)}
            renderInput={(params) => (
              <TextField variant="standard" {...params} />
            )}
          />
        </LocalizationProvider>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            onChange={() => setCustomJoinDate(!customJoinDate)}
            value={customJoinDate}
            label="Same start date as Cohort"
          />
        </FormGroup>
      </StyledCardContent>
      <CardActions>
        <Button
          color="secondary"
          variant="contained"
          onClick={submit}
          disabled={loading}
          endIcon={loading ? <CircularProgress size={18} /> : <Check />}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
export default EditMember;
