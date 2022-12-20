import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    gender:String,
    email: String,
    phone: Number,
    password:String,
    confpassword:String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;