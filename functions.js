/*---FUNCTIONS---*/
function reveal() {
	const content = document.getElementById("body");
	const heading = document.getElementById("title");
	const dropbox = document.getElementById("greetings");
	
	content.style.opacity = '1';
	content.style.visibility = 'visible';
	heading.style.opacity = '1';
	heading.style.visibility = 'visible';
	dropbox.style.opacity = '1';
	dropbox.style.visibility = 'visible';
}

function conceal() {
	const content = document.getElementById("body");
	content.style.transition = '0s';
	content.style.background = 'rgb(0 69 172)';
	content.style.color = 'white';
	content.style.padding = '7% 14%';
	content.innerHTML = "A problem has been detected and Windows has been shut down to prevent damage to your computer. <br><br>PROCESS_INITIALIZATION_FAILED <br><br>If this is the first time you've seen this STOP error screen,<br>restart your computer. If this screen appears again,<br>follow these steps: <br><br>Check to make sure any new hardware or software is properly installed.<br>If this is a new installation, ask your hardware or software manufacturer<br>for any Windows updates you might need.<br><br> If problems continue, disable or remove any newly installed hardware<br>or software. Disable BIOS memory options such as cachin or shadowing.<br>If you need to use Safe Mode to remove or disable components, restart<br>your computer, press F8 to select Advanced Startup Options, and then<br>select Safe Mode. <br><br> Technical Information:<br><br>*** STOP:0x00000060 (0xF2N094C2, 0x00000001, 0x4FQ1CCC7, 0x00000000)<br><br>***       4FQ.sys - Address FWTV1999 base at 4S4M5000, Datestamp 4d5dd88c<br><br>Beginning dump of physical memory<br>Physical memory dump complete<br><br><a class='back' href='main.html'>Contact your system administrator or technical support for further assistance.</a>" ;
}