import {NextApiRequest, NextApiResponse} from "next";

const headers = (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(429)
    return res.json({ success: false });
}

export default headers