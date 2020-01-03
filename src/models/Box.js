import { Schema, model } from 'mongoose';

const BoxSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
    },
    {
        timestamps: true,
    }
);

export default model('Box', BoxSchema);
