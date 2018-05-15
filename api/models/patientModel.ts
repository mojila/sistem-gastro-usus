import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    disease: {
        type: Object,
        default: {}
    }
});

export default mongoose.model('Patient', schema);