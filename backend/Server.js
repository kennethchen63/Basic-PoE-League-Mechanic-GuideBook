const express = require("express");
const colors = require("colors");
const dotev = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./Config/db");
const { errorHandler } = require("./Middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/listings", require("./Routes/listingRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));
app.use("/api/AllListings", require("./Routes/AllListingRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
