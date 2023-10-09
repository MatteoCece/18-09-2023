import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../utils/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

type Data = {
  list: PostgrestSingleResponse<{}> | {};
  status?: string;
  message?: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const supabaseRes = await supabase
      .from("todo-list")
      .delete()
      .eq("id", req.headers["delete-item"]);
    res.status(200).json({ status: "ok", list: {} });
  } catch (error) {
    res
      .status(404)
      .json({ status: "failed", message: "Wrong connection", list: {} });
  }
}
