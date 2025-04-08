import mongoose from "mongoose" ;  

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please add an Email.'],
        unique: true,
        lowercase: true,
        trim: true
    },
    feedback: {
        type: String,
        required: true,
        minlength: [10, 'Feedback must be at least 10 characters'],
        unique: true
    }
}, {
    timestamps: true
});
// password encryption - JWT and BCRYPT; 
const Form = mongoose.model('Form', formSchema ) ; 
export default Form ; 