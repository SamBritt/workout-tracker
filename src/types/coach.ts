import type { ManagedAthlete } from "./athlete";
import type { User } from "./user";

export interface Coach extends User {
    athletes?: ManagedAthlete[]
}