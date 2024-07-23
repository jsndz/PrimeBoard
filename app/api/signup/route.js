import Team from "@/models/team";
import { connectToDB } from "@/util/database";

export const POST = async (req, res) => {
  const { teamName, code } = await req.json();

  try {
    await connectToDB();
    const team = await Team.create({
      teamName,
      code,
    });
    return new Response(JSON.stringify(team), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new prompts", { status: 500 });
  }
};
