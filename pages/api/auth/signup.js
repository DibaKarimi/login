import { hashPassword } from "../../../utils/auth";
import User from "../../../models/User";
import connectDB from "../../../utils/connectDB";

async function handler(req, res) {
  console.log("first");
  if (req.method !== "POST") return;
  console.log("second");
  try {
    console.log("11");
    await connectDB();
    console.log("22");
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "error in connecting to db" });
  }
  const { email, password } = req.body;
  console.log("req.body====", req.body);
  if (!email || !password) {
    return res.status(422).json({
      status: "failed",
      message: "Invalid data",
    });
  }
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(422).json({
      status: "failed",
      message: "user exist",
    });
  }

  const hashedPassword = await hashPassword(password);
  const newUser = await User.create({ email: email, password: hashedPassword });
  console.log("newUser------", newUser);

  res.status(201).json({ status: "success", message: "created user" });
}
export default handler;
