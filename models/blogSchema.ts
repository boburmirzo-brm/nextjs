import mongoose, {Schema} from "mongoose"

const blogSchema = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            required: true
        },
    },
    {timestamps: true}
)
export const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema)
