import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
});

export default mongoose.model('SubSymptoms', schema);