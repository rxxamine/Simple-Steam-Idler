const steamUser = require("steam-user");
const steamTotp = require("steam-totp");
const keep_alive = require("./keep_alive.js");

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = 
	[
		730, 635260, 440, 570, 1665460, 2293410, 2281730, 635260, 291550, 3199170, 1178160,
		1292630, 244210, 457330, 3240220, 203140, 2767030, 2707900, 1138190, 3002090, 3217240, 1677740, 1029550, 2305790, 714010, 1172470, 1938090, 835570, 1928420, 2073850, 2357570, 1222670
	]; // Enter here AppIDs of the needed games
var status = 1; // 1 - online, 7 - invisible

user = new steamUser();
user.logOn({
	accountName: username,
	password: password,
	twoFactorCode: steamTotp.generateAuthCode(shared_secret),
});
user.on("loggedOn", () => {
	if (user.steamID != null)
		console.log(user.steamID + " - Successfully logged on");
	user.setPersona(status);
	user.gamesPlayed(games);
});

// var username2 = process.env.username2;
// var password2 = process.env.password2;
// var shared_secret2 = process.env.shared2;

// var games2 = [730, 440, 570, 304930];  // Enter here AppIDs of the needed games
// var status2 = 1;  // 1 - online, 7 - invisible

// user2 = new steamUser();
// user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
// user2.on('loggedOn', () => {
// 	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
// 	user2.setPersona(status2);
// 	user2.gamesPlayed(games2);
// });
