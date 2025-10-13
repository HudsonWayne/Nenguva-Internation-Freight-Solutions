import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });

    await connectDB();

    const existing = await User.findOne({ email });
    if (existing)
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashed });

    return new Response(JSON.stringify({ message: "User registered!" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error registering user" }), {
      status: 500,
    });
  }
}
