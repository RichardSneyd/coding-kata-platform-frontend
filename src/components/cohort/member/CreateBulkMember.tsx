import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
} from "@mui/material";
import { useState, useContext } from "react";
import { IUser } from "../../../interfaces/user";
import { useSnackbar } from "notistack";
import { ICreateBulkMember } from "./CreateMemberWrapper";
import styled from "@emotion/styled";
import { Check } from "@mui/icons-material";
import { AppContext, IAppContext } from "../../../context/AppContext";

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const CreateBulkMember = ({
  members,
  setMembers,
  startDate,
}: ICreateBulkMember) => {
  const { members: existingGlobalMembers } = useContext(
    AppContext
  ) as IAppContext;

  const [values, setValues] = useState("");
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const checkIfValueIsUnique = (name: string, value: string) => {
    const existingMemberIndex = members.findIndex(
      (member) => member[name] === value
    );
    const existingGlobalMembersIndex = existingGlobalMembers.findIndex(
      (member) => member[name] === value
    );

    return existingMemberIndex === -1 && existingGlobalMembersIndex === -1;
  };

  const submit = () => {
    if (values === "") {
      enqueueSnackbar(`Please enter at least one email`, {
        variant: "error",
      });
      return;
    }
    setLoading(true);
    let newMembers: IUser[] = [];
    const emails = values.split("\n");
    emails.forEach((email) => {
      if (email === "") return;
      if (!email.includes("@") || !email.includes(".")) {
        enqueueSnackbar(`${email} is not a valid email`, {
          variant: "error",
        });
      }
      // const existingMemberIndex = members.findIndex(
      //   (member) => member.email === email
      // );
      // const existingGlobalMembersIndex = existingGlobalMembers.findIndex(
      //   (member) => member.email === email
      // );
      const isGloballyUnique = checkIfValueIsUnique("email", email);
      const newMemberIndex = newMembers.findIndex(
        (member) => member.email === email
      );
      if (!isGloballyUnique || newMemberIndex !== -1) {
        enqueueSnackbar(`Member with ${email} already exists`, {
          variant: "error",
        });
        return;
      }
      //@TODO FIX THIS!!
      let username = email.split("@")[0];
      // const isUnique = isGloballyUnique('username', username);
      if (!checkIfValueIsUnique("username", username)) {
        username = username + Math.floor(1000 + Math.random() * 9000);
      }
      const newMember = {
        username,
        email: email,
        joinDate: startDate?.format("YYYY-MM-DD"),
      };
      newMembers.push(newMember);
    });

    setMembers([...members, ...newMembers]);
    setLoading(false);
    setValues("");
  };

  return (
    <>
      <CardHeader subheader="Add in an email on each line or you can paste directly from Google sheets (without seperators or commas). A username will be automatically generated for each email." />
      <StyledCardContent>
        <TextField
          label="Add or paste multiple emails"
          variant="standard"
          autoFocus={true}
          rows={8}
          multiline
          placeholder="john@email.com&#10;andrew@gmail.com&#10;dwight@dundermifflin.com"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
      </StyledCardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={submit}
          disabled={loading}
          endIcon={loading ? <CircularProgress size={18} /> : <Check />}
        >
          Add
        </Button>
      </CardActions>
    </>
  );
};

export default CreateBulkMember;
