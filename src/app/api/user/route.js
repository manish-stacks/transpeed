import UserModel from "@/model/UserModel";

export const GET = async (req, res) => {
  try {
    const users = await UserModel.findOne();
   return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    const { username, email, password, role, isActive } = req.body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Create or update user
    const user = await UserModel.findOneAndUpdate(
      { email },
      { username, email, password, role, isActive },
      { new: true, upsert: true }
    );

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error creating/updating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


