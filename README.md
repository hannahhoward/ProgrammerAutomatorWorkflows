# Programmer Automator Workflows

I get distracted a lot on my computer, and have a habit of leaving windows/tabs open. Also, I work as a coding instructor, which forces me switch font sizes on programs often so they're view viewable on a projector.

These are two relatively simple automator workflows I built to "reset" my desktop before I start working or teaching.

###DevSetup

The DevSetup workflow uses 4 programs: Chrome, Terminal, Sublime, and SelfControl (a social media blocker)

It asks for a project directory to work from, and a duration of time you want to work. It will close all apps other the ones above, setup Sublime in fullscreen and setup Chrome and terminal in a split screen. It also resets font sizes to something reasonable for terminal and Sublime Text. Finally, it turns on SelfControl to block social media for the time you specified (You need to have SelfControl's Block List configured -- probably worth reading up on it: https://selfcontrolapp.com/). It will also ask for your password cause SelfControl needs admin privilege to turn on.

###InstructorSetup

The InstructorSetup workflow use 4 programs: Chrome, Terminal, Sublime, and Slack -- these are what I use where I teach at General Assembly, a coding school.

It asks for a project directory to work from. It will close all apps other the ones above, setup Sublime in fullscreen and setup Chrome and terminal in a split screen. Finally, it sets up Slack in third fullscreen window. It sets font sizes to 28 in both terminal and Sublime Text for easy reading during presentation.

###Installation

To use, setup two environment vars in your .bash_profile:

`PROJECTS_DIR` -- the general folder you work out of where all your code projects are 

`SCRIPTS_DIR` -- any folder that contains setSublimeFont.js (in this repo)

Also, open the workflows in Automator and convert them to standalone apps. (I even customized the icons)

###Caveats

This code is provided 100% as is and may need further customization for your machine. Whatever I could get to work I used -- which is a mix of automator, applescript, shell scripts, even some node. Mainly I just thought these were cool and wanted to share.
