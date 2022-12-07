import { IUser } from "../../../interfaces/user";

import CreateMember from "./CreateMember";

interface IMemberProps {
  members: IUser[];
  setMembers: (member: IUser[]) => void;
}

const Members = ({ members, setMembers }: IMemberProps) => {
  return (
    <div>
      <CreateMember members={members} setMembers={setMembers} />
      <h2>Members</h2>
      {members.map((member) => {
        return (
          <div key={member.username}>
            <p>{member.username}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Members;
