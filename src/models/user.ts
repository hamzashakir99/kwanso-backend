import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  user_name: String,
  password: String
});

export default mongoose.model('User', UserSchema);
