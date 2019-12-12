import * as express from "express";

const port = 3000;
const app = express();

app.use((req, res, next) => {
	res.send("It works!");
});

app.listen(port, () => {
	console.log("Server is up on *:" + port);
});
