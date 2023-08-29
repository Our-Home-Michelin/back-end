import mongoose from "mongoose";
const Schema = mongoose.Schema;
//좋아요 한 유저 스키마
const likedUsersSchema = new Schema({
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
    users: { type: Array, required: true },
});

export default mongoose.model("LikedUsers", likedUsersSchema);