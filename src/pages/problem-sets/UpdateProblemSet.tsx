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

// import { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import authService from "../../services/authService";
// import problemSetServices from "../../services/problemSetService";
// import Members from "../../components/problemSet/member/Members";
// import { IProblemSet } from "../../interfaces/problemSet";
// import { IUser } from "../../interfaces/user";
// import CreateMember from "../../components/problemSet/member/CreateSingleMember";
// import styled from "@emotion/styled";

// import UpdateMember from "../../components/problemSet/member/UpdateMember";
// import { useSnackbar } from "notistack";
// import { AppContext, IAppContext } from "../../context/AppContext";

// const StyledCardContent = styled(CardContent)`
//   display: flex;
//   flex-direction: column;
// `;

const UpdateProblemSet = () => {
  //   const { problemSets, updateProblemSet } = useContext(
  //     AppContext
  //   ) as IAppContext;

  //   const [name, setName] = useState("");
  //   const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());

  //   const [members, setMembers] = useState<IUser[]>([]);
  //   const [memberEditIndex, setMemberEditIndex] = useState(-1);

  //   const [nameError, setNameError] = useState("");

  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");

  //   const navigate = useNavigate();
  //   const { id } = useParams();
  //   const { enqueueSnackbar } = useSnackbar();

  //   useEffect(() => {
  //     const problemSet = problemSets.find(
  //       (problemSet) => problemSet.id === parseInt(id as string)
  //     );
  //     if (problemSet) {
  //       setName(problemSet.name);
  //       setStartDate(dayjs(problemSet.startDate));
  //       setMembers(problemSet.members);
  //     } else {
  //       setError("Could not find problemSet");
  //     }
  //   }, [problemSets, id]);

  //   const handleValidation = () => {
  //     let passed = true;

  //     if (name === "") {
  //       setNameError("Name cannot be blank");
  //       passed = false;
  //     } else setNameError("");

  //     const problemSetIndex = problemSets.findIndex((problemSet) => {
  //       return (
  //         problemSet.name === name && problemSet.id !== parseInt(id as string)
  //       );
  //     });
  //     if (problemSetIndex !== -1) {
  //       setNameError(`A problemSet with the name ${name} already exists`);
  //       passed = false;
  //     } else setNameError("");

  //     return passed;
  //   };

  //   const submit = async () => {
  //     const token = authService.getAccessToken();

  //     if (token && id) {
  //       if (handleValidation()) {
  //         const body: IProblemSet = {
  //           id: parseInt(id),
  //           name,
  //           startDate: dayjs(startDate).format("YYYY-MM-DD"),
  //           members,
  //         };
  //         setError("");
  //         setLoading(true);
  //         try {
  //           await problemSetServices.update(token, body);

  //           updateProblemSet(body);
  //           enqueueSnackbar(`ProblemSet updated`, {
  //             variant: "success",
  //           });
  //           navigate(`/problemSets/${id}`);
  //         } catch (err: any) {
  //           setError(err.message ? err.message : "Server Error");
  //           setLoading(false);
  //         }
  //       }
  //     } else {
  //       setError("Authentication error, please log in again");
  //       setLoading(false);
  //     }
  //   };

  //   const updateEditedMember = (newMember: IUser) => {
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
  //       <Button
  //         color="info"
  //         component={Link}
  //         to="/problemSets"
  //         startIcon={<ArrowBack />}
  //       >
  //         Back
  //       </Button>
  //       <Typography variant="h1">Update ProblemSet</Typography>
  //       <Grid container spacing={5}>
  //         <Grid item md={6} xs={12}>
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
  //         <Grid item md={6} xs={12}>
  //           {memberEditIndex === -1 ? (
  //             <Card>
  //               <CardHeader title="Add a member" />
  //               <CreateMember
  //                 members={members}
  //                 setMembers={setMembers}
  //                 startDate={startDate}
  //               />
  //             </Card>
  //           ) : (
  //             <UpdateMember
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
  //           <Typography variant="caption" color="error">
  //             {error}
  //           </Typography>
  //           <br />
  //           <Button
  //             color="primary"
  //             variant="contained"
  //             onClick={submit}
  //             disabled={loading}
  //             endIcon={loading ? <CircularProgress size={18} /> : <Check />}
  //           >
  //             Update
  //           </Button>
  //         </Grid>
  //       </Grid>
  //     </>
  //   );
};

export default UpdateProblemSet;
