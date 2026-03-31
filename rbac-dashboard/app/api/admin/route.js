// app/api/admin/route.js
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { verifyToken } from "@/lib/auth";

export async function POST(req) {
  await connectDB();

  const token = req.headers.get("authorization");
  const user = verifyToken(token);

  if (user.role !== "SUPER_ADMIN") {
    return Response.json({ error: "Unauthorized" });
  }

  const data = await req.json();

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const admin = await User.create({
    ...data,
    password: hashedPassword,
    role: "ADMIN",
  });

  return Response.json(admin);
}

export async function GET(req) {
  await connectDB();

  const token = req.headers.get("authorization");
  const user = verifyToken(token);

  if (user.role !== "SUPER_ADMIN") {
    return Response.json({ error: "Unauthorized" });
  }

  const admins = await User.find({ role: "ADMIN" });

  return Response.json(admins);
}