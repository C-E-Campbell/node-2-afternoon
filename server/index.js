const express = require("express");
const app = express();
app.use(express.json());

const port = 8290;
app.listen(port, () => {
	console.log("Server running on port 8290");
});
