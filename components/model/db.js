'use strict';

const fs = require('fs');

// TODO: rewrite database

(function() {
	if (!window.coursedb) {
		// Read database from JSON file
		try {
			window.coursedb = {
				courses: {},
				depts: [],
				deptNames: {}
			}
			var rawdb = JSON.parse(fs.readFileSync(__dirname+'/courses.json'));
			coursedb.depts = rawdb.depts;
			coursedb.deptNames = rawdb.deptNames;
			rawdb.courses.forEach(function(item){
				coursedb.courses[item.game_id] = item;
			});
		} catch(e) {
			console.error(e);
		}
	}
})();

let modeldb = {
	db: coursedb,
	getCourseById: function(id) {
		return modeldb.db.courses[id];
	},
	getCourseByNumber: function(courseid) {
		return modeldb.getCourseById(modeldb.parseId(courseid));
	},
	parseId: function(courseid) {
		try {
			var number = parseInt(/\d+/.exec(courseid)[0]);
			if (number < 100) { return 0; }
			var dept = modeldb.db.depts.indexOf(/[A-Za-z]*/.exec(courseid)[0].toUpperCase());
			return dept*1000+number;
		} catch(e) {
			return 0;
		}
	}
};

module.exports = modeldb;
