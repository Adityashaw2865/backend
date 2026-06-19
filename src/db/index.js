import mongoose from "mongoose";
import{DB_NAME} from"..constannts.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
    }

export default connectDB;
