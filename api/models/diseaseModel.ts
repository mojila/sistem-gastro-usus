import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    threshold: {
        type: Number,
        default: 0
    },
    symptoms: {
        type: Array,
        default: []
    }
});

export default mongoose.model('Disease', schema);
