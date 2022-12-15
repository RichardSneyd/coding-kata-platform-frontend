import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import EmptyState from "../components/global/EmptyState";
import Loading from "../components/global/Loading";
import { IUser } from "../interfaces/user";
import authService from "../services/authService";
import UserService from "../services/userService";

import { Class, LockClock, Mail, SportsEsports } from "@mui/icons-material";

import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

const Profile = () => {
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const user = authService.getUser();
    const token = authService.getAccessToken();
    if (token) {
      if (user && user.userId) {
        setError("");
        setLoading(true);
        UserService.getById(token, user.userId.toString())
          .then((result) => {
            setUser(result);
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
  }, []);

  if (loading) return <Loading />;
  if (error !== "" || !user) return <EmptyState message={error} />;
  return (
    <>
      <Typography variant="h1">Profile</Typography>

      <Card>
        <CardHeader title={user.username} subheader={user.email} />

        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={user.email} secondary="Email" />
            </ListItem>
            {user.cohort && (
              <ListItem>
                <ListItemIcon>
                  <Class />
                </ListItemIcon>
                <ListItemText primary={user.cohort?.name} secondary="Cohort" />
              </ListItem>
            )}

            <ListItem>
              <ListItemIcon>
                <SportsEsports />
              </ListItemIcon>
              <ListItemText primary={user.score} secondary="Score" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LockClock />
              </ListItemIcon>
              <ListItemText
                primary={dayjs(user.joinDate).fromNow()}
                secondary="Joined"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
