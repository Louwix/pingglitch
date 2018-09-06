const app = express();
const http = require('http');

app.listen(process.env.PORT);
setInterval(() => {
	http.get(`http://bot-hackers.glitch.me`);
	http.get(`http://louwixbot.glitch.me`);
}, 28000);
