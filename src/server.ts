import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";

async function Boostrap() {

    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database Connected Succecssfully`);

        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
        })

    } catch (err) {
        console.log('Database Faill To Connected', err);
    }


}
Boostrap();