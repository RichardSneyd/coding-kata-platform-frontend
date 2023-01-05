// import { ArrowBack, Check } from "@mui/icons-material";
// import {
//   TextField,
//   Typography,
//   Button,
//   CircularProgress,
//   Card,
//   CardHeader,
//   CardContent,
//   Grid,
// } from "@mui/material";

// import dayjs, { Dayjs } from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import authService from "../../services/authService";
// import problemSetServices from "../../services/problemSetService";
// import Members from "../../components/problemSet/member/Members";
// import { IProblemSet } from "../../interfaces/problemSet";
// import { IUser } from "../../interfaces/user";
// import styled from "@emotion/styled";
// import EditMember from "../../components/problemSet/member/UpdateMember";
// import CreateMemberWrapper from "../../components/problemSet/member/CreateMemberWrapper";
// import { useSnackbar } from "notistack";
// import { AppContext, IAppContext } from "../../context/AppContext";

// const StyledCardContent = styled(CardContent)`
//   display: flex;
//   flex-direction: column;
// `;

const CreateProblemSet = () => {
  //   const { problemSets, setNewProblemSets } = useContext(
  //     AppContext
  //   ) as IAppContext;

  //   const [name, setName] = useState("");
  //   const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());

  //   const [members, setMembers] = useState<IUser[]>([]);
  //   const [memberEditIndex, setMemberEditIndex] = useState(-1);

  //   const [nameError, setNameError] = useState("");

  //   const [loading, setLoading] = useState(false);

  //   const { enqueueSnackbar } = useSnackbar();
  //   const navigate = useNavigate();

  //   const handleValidation = () => {
  //     let passed = true;

  //     if (name === "") {
  //       setNameError("Name cannot be blank");
  //       passed = false;
  //     } else setNameError("");

  //     if (
  //       problemSets.findIndex((problemSet) => problemSet.name === name) !== -1
  //     ) {
  //       setNameError(`A problemSet with the name ${name} already exists`);
  //       passed = false;
  //     } else setNameError("");

  //     return passed;
  //   };

  //   const submit = async () => {
  //     const token = authService.getAccessToken();

  //     if (token) {
  //       if (handleValidation()) {
  //         const body: IProblemSet = {
  //           name,
  //           startDate: dayjs(startDate).format("YYYY-MM-DD"),
  //           members,
  //         };
  //         setLoading(true);
  //         try {
  //           const response = await problemSetServices.create(token, body);

  //           enqueueSnackbar(`ProblemSet created`, {
  //             variant: "success",
  //           });

  //           setNewProblemSets([...problemSets, response as IProblemSet]);
  //           navigate(`/problemSets/${response?.id}`);
  //         } catch (err: any) {
  //           enqueueSnackbar(err.message, {
  //             variant: "error",
  //           });

  //           setLoading(false);
  //         }
  //       }
  //     } else {
  //       enqueueSnackbar("Authentication error, please log in again", {
  //         variant: "error",
  //       });
  //       setLoading(false);
  //     }
  //   };

  //   const updateEditedMember = (newMember: IUser) => {
  //     console.log(newMember.username);

  //     setMembers(
  //       members.map((member, index) => {
  //         if (index === memberEditIndex) {
  //           return newMember;
  //         }
  //         return member;
  //       })
  //     );
  //     setMemberEditIndex(-1);
  //   };

  //   const deleteMember = (memberIndex: number) => {
  //     setMembers(members.filter((member, index) => index !== memberIndex));
  //   };

  return <></>;
};
//       <Button
//         color="info"
//         component={Link}
//         to="/problemSets"
//         startIcon={<ArrowBack />}
//       >
//         Back
//       </Button>
//       <Typography variant="h1">Create a ProblemSet</Typography>
//       <Grid container spacing={5}>
//         <Grid item sm={12} md={6} xs={12}>
//           <Card>
//             <CardHeader title="ProblemSet details" />
//             <StyledCardContent>
//               <TextField
//                 variant="standard"
//                 name="name"
//                 label="Name"
//                 autoFocus={true}
//                 margin="normal"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && submit()}
//                 error={nameError !== ""}
//                 helperText={nameError}
//               />
//               <br />
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DesktopDatePicker
//                   label="Start Date"
//                   inputFormat="DD/MM/YYYY"
//                   value={startDate}
//                   onChange={(e: Dayjs | null) => setStartDate(e)}
//                   renderInput={(params) => (
//                     <TextField variant="standard" {...params} />
//                   )}
//                 />
//               </LocalizationProvider>
//             </StyledCardContent>
//           </Card>
//         </Grid>
//         <Grid item sm={12} md={6} xs={12}>
//           {memberEditIndex === -1 ? (
//             <CreateMemberWrapper
//               members={members}
//               setMembers={setMembers}
//               startDate={startDate}
//             />
//           ) : (
//             <EditMember
//               members={members}
//               memberIndex={memberEditIndex}
//               editMember={updateEditedMember}
//               startDate={startDate}
//               setMemberEditIndex={setMemberEditIndex}
//             />
//           )}
//         </Grid>
//         <Grid item md={12} xs={12}>
//           <Members
//             members={members}
//             displayScore={false}
//             displayEmptyCell={true}
//             setMemberEditIndex={setMemberEditIndex}
//             deleteMember={deleteMember}
//           />
//         </Grid>

//         <Grid item md={12} xs={12}>
//           <Button
//             color="primary"
//             variant="contained"
//             onClick={submit}
//             disabled={loading}
//             endIcon={loading ? <CircularProgress size={18} /> : <Check />}
//           >
//             Create
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

export default CreateProblemSet;
