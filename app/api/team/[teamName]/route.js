import Team from "@/models/team";
import { connectToDB } from "@/util/database";

export const POST = async (request, { params }) => {
  try {
    await connectToDB();
    const { code } = await request.json();
    const { teamName } = params;
    console.log(code);

    const team = await Team.findOne({ teamName: teamName });
    if (team.code !== code) {
      return new Response("Wrong code ", { status: 401 });
    }
    return new Response(JSON.stringify(team), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch :", error);
    return new Response("Failed to fetch all ", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    const { sales } = await request.json();
    const { teamName } = params;

    const team = await Team.findOneAndUpdate(
      { teamName: teamName },
      { sales: sales },
      { new: true }
    );

    return new Response(JSON.stringify(team), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch :", error);
    return new Response("Failed to fetch all ", { status: 500 });
  }
};
