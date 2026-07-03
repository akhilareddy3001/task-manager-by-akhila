const mongoose = require("mongoose");

const connectDB = async () => {
    console.log("Trying to connect...");
    console.log(">", JSON.stringify(process.env.MONGO_URI), "<");
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.log("========== FULL ERROR ==========");
        console.dir(error, { depth: null });
        console.log("================================");
        process.exit(1);
    }
};

module.exports = connectDB;