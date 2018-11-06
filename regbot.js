const {BrowserWindow, ipcMain} = require('electron').remote;

window.regbot = {
	pref: {},
	wnd: null,
	eval: function(script) {
		if (regbot.wnd) {
			return regbot.wnd.webContents.executeJavaScript(script);
		} else {
			console.warn("Regbot is not active");
			return Promise.resolve();
		}
	},
	msg: function(type, msg) {
		console[type](msg);
	},
	getSeat: function(dept, num) {
		this.eval(`getSeats("${dept}", ${num});`);
	}
};

regbot.activate = function() {
	if (regbot.inst) {
		console.warn("RegBot is already running");
		return;
	}
	let win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			sandbox: false,
			webSecurity: false,
			backgroundThrottling: false,
			offscreen: true,
			webviewTag: true
		},
		closable: false
	});
	win.loadURL(`file://${__dirname}/regbot.html`);
	win.on('closed', function () {
		regbot.wnd = null;
		regbot.msg("success", "RegBot exited");
		regbot.pref.enabled = false;
	});
	regbot.wnd = win;
}

ipcMain.on("regbot.ready", () => {
	regbot.eval("init("+JSON.stringify(regbot.pref)+")").then(function() {
		regbot.msg("success", "RegBot started");
	}).catch(function() {
		regbot.msg("error", "RegBot failed to start")
	});
});

{
	let jsonpref = localStorage.getItem("regbot");
	if (!jsonpref) {
		regbot.pref = {
			showinfo: true,
			enabled: false,
			autoload: false,
			autologin: false,
			username: "",
			password: ""
		};
	} else {
		regbot.pref = JSON.parse(jsonpref);
	}
	if (regbot.pref.enabled) {
		regbot.activate();
	}
}

window.addEventListener("beforeunload", () => {
	if (regbot.wnd) {
		regbot.wnd.destroy();
	}
});

console.log("Regbot Initialized");
