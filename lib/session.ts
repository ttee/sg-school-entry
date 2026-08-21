import { cache } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

/** One session decode per RSC request (layout + page used to hit JWT+DB twice). */
export const getSession = cache(() => getServerSession(authOptions));
