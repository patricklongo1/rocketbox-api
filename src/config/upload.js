import multer from 'multer';
import { extname, resolve, basename } from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = extname(file.originalname);
            const name = basename(file.originalname, ext);

            file.key = `${name}-${Date.now()}${ext}`;

            cb(null, file.key);
        },
    }),
};
