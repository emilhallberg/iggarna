import type { NextApiRequest, NextApiResponse } from "next";

type Parameters = { id: string; value: string; page: number };

export function archiveHandler(
  required: (keyof Parameters)[],
  read: (params: Parameters) => unknown,
) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).json({ message: "Method not allowed" });
    }
    const params: Parameters = { id: "", value: "", page: 1 };
    for (const key of required) {
      const value = req.query[key];
      if (typeof value !== "string") {
        return res
          .status(400)
          .json({ message: `A single ${key} parameter is required` });
      }
      if (key === "page") {
        const page = Number(value);
        if (!Number.isSafeInteger(page) || page < 1) {
          return res
            .status(400)
            .json({ message: "Page must be a positive integer" });
        }
        params.page = page;
      } else {
        params[key] = value;
      }
    }
    return res.status(200).json(read(params));
  };
}
