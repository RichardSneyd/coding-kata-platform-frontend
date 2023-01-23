import { ICohort } from "./cohort";
import { ISolution } from "./solutions";

export interface IUser {
  [key: string]: any;
  id?: number;
  username: string;
  email: string;
  cohort?: ICohort | null;
  roles?: string[];
  score?: number;
  joinDate?: string;
  solutions?: ISolution[];
  completedProblems?: any[];
}
