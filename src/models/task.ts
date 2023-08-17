import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  user_id: String,
  name: String
});

export default mongoose.model('Task', TaskSchema);
