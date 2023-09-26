const Express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = Express();
dotenv.config();

const { appRouter } = require("./routes/main");
require("./mongo/config");

const PORT = process.env.PORT;

app.use(cors());
app.use(Express.json());
app.set("PORT", PORT);
app.use(appRouter);

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});