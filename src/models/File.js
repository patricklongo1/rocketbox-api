import { Schema, model } from 'mongoose';

const FileSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    }
);

FileSchema.virtual('url').get(function() {
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

export default model('File', FileSchema);
