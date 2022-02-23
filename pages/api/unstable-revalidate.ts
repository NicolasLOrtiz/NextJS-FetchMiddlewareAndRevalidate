import {NextApiRequest, NextApiResponse} from "next";

type Data = {
  text: string;
}


export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await res.unstable_revalidate('/ssg');

  return res.status(200).json({
    text: 'Hello, World!'
  });
}
