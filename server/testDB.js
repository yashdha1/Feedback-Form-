import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // loads .env

const uri = process.env.MONGO_URI;
console.log('Trying to connect to MongoDB...' , uri);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected!');
  process.exit();
})
.catch(err => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1);
});
