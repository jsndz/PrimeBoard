import Team from "@/models/team";
import { connectToDB } from "@/util/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const team = await Team.find();
    console.log(team);
    return new Response(JSON.stringify(team), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new prompts", { status: 500 });
  }
};
