import React, { useState } from "react";
import { ICohort } from "../interfaces/cohort";
import { IUser } from "../interfaces/user";

export interface IAppContext {
  members: IUser[];
  cohorts: ICohort[];
  setNewMembers: (members: IUser[]) => void;
  updateMember: (member: IUser) => void;
  addMember: (member: IUser) => void;
  deleteMember: (id: number) => void;
  setNewCohorts: (cohorts: ICohort[]) => void;
  updateCohort: (cohort: ICohort) => void;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider = ({ children }: IAppProvider) => {
  const [members, setMembers] = useState<IUser[]>([]);
  const [cohorts, setCohorts] = useState<ICohort[]>([]);

  const setNewMembers = (newMembers: IUser[]) => {
    setMembers(newMembers);
  };

  const updateMember = (updatedMember: IUser) => {
    setMembers(
      members.map((member) => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      })
    );
  };

  const deleteMember = (memberId: number) => {setMembers(members.filter(member => member.id !== memberId))} 

  const addMember = (member: IUser) => setMembers([...members, member]);

  const setNewCohorts = (newCohorts: ICohort[]) => {
    setCohorts(newCohorts);
  };

  const updateCohort = (updatedCohort: ICohort) => {
    setCohorts(
      cohorts.map((cohort) => {
        if (cohort.id === updatedCohort.id) {
          return updatedCohort;
        }
        return cohort;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        members,
        cohorts,
        setNewMembers,
        updateMember,
        setNewCohorts,
        updateCohort,
        deleteMember,
        addMember
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
