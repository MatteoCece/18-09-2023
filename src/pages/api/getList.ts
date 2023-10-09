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
    const supabaseRes = await supabase.from("todo-list").select("*");
    res.status(200).json({ list: supabaseRes });
  } catch (error) {
    res
      .status(404)
      .json({ status: "failed", message: "Wrong connection", list: {} });
  }
}
