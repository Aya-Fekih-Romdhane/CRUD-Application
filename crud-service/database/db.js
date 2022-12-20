import mongoose from 'mongoose';

const Connection = async (username, password) => {
    mongoose.connect('mongodb://127.0.0.1:27017/crud')
.then(
    ()=>{ console.log('connected TO DB :D');}
)
.catch(
    ()=> { console.log('error');}
)
}
export default Connection;
