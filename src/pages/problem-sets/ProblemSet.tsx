// import { ArrowBack, Edit } from "@mui/icons-material";
// import { Button, Fab, Typography } from "@mui/material";
// import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import EmptyState from "../../components/global/EmptyState";
// import Loading from "../../components/global/Loading";
// import { IProblemSet } from "../../interfaces/problemSet";
// import authService from "../../services/authService";
// import problemSetServices from "../../services/problemSetService";
// import Members from "../../components/problemSet/member/Members";
// import styled from "@emotion/styled";
// import DeleteProblemSet from "../../components/problemSet/DeleteProblemSet";
// import dayjs from "dayjs";
// import { AppContext, IAppContext } from "../../context/AppContext";

// /**
//  * Injected styles
//  *
//  */
// const TitleWrapper = styled("div")`
//   display: flex;
//   justify-content: space-between;
// `;

// const TitleActionWrapper = styled("div")`
//   a {
//     margin: 0 5px;
//   }
// `;

const ProblemSet = () => {
  //   const { problemSets } = useContext(AppContext) as IAppContext;

  //   const [problemSet, setProblemSet] = useState<IProblemSet>();
  //   const [error, setError] = useState<string>("");

  //   const { id } = useParams();

  //   useEffect(() => {
  //     const problemSet = problemSets.find(
  //       (problemSet) => problemSet.id === parseInt(id as string)
  //     );
  //     if (problemSet) {
  //       setProblemSet(problemSet);
  //     } else {
  //       setError("Could not find problemSet");
  //     }
  //   }, [problemSets, id]);

  //   if (error || !problemSet) return <EmptyState message={error} />;
  return <></>;
  //       <Button
  //         color="info"
  //         component={Link}
  //         to="/problemSets"
  //         startIcon={<ArrowBack />}
  //       >
  //         Back
  //       </Button>
  //       <TitleWrapper>
  //         <Typography variant="h1">{problemSet.name}</Typography>
  //         <TitleActionWrapper>
  //           <Fab
  //             color="primary"
  //             aria-label="Edit problemSet"
  //             component={Link}
  //             to={`/problemSets/edit/${problemSet.id}`}
  //           >
  //             <Edit />
  //           </Fab>

  //           {problemSet.id && <DeleteProblemSet id={problemSet.id} />}
  //         </TitleActionWrapper>
  //       </TitleWrapper>
  //       <Typography variant="caption">
  //         {dayjs(problemSet.startDate).format("MMM D, YYYY")}
  //       </Typography>

  //       <br />
  //       <Members members={problemSet.members} displayScore={true} />
  //     </>
  //   );
};

export default ProblemSet;
