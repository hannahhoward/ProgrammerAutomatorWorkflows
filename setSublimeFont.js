var fs = require("fs")
var path = require("path")

var settingsFile = fs.readFileSync("/Users/Hannah/Library/Application Support/Sublime Text 3/Packages/User/Preferences.sublime-settings", "utf8")

var settings = JSON.parse(settingsFile)

settings.font_size = parseInt(process.argv[2])

settingsFile = JSON.stringify(settings)

fs.writeFileSync("/Users/Hannah/Library/Application Support/Sublime Text 3/Packages/User/Preferences.sublime-settings", settingsFile)
