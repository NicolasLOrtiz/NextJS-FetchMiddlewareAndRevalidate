import {NextApiRequest} from "next";
import {NextFetchEvent, NextResponse} from "next/server";


export const middleware = (req: NextApiRequest, ev: NextFetchEvent) => NextResponse.redirect(
  'localhost:3000/'
);
