import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    percentage: {
        type: Number,
        default: 0
    },
    subSymptoms: {
        type: Array,
        default: []
    }
});

export default mongoose.model('Symptoms', schema);