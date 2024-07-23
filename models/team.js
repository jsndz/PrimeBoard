import mongoose, { Schema } from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
    },
    revenue: {
      type: Number,
    },
    sales: {
      type: Number,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
