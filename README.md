# SteelSeries-Canvas-QlikSense

<h2>Description</h2>
The HTML5 Canvas part of the SteelSeries component converted to Qlik Sense Extension - Based on the original code developed by:  Gerrit Grunwald (HanSolo)<br/>
<b>Original souce:</b> Available on Github at https://github.com/HanSolo/SteelSeries-Canvas<br/>
<br/>
Works based on SteelSeries so you can have some ideas (Not everything is implemented on the Qlik Sense version):<br/>
<b>Demos:</b><br/>
http://www.wilmslowastro.com/steelseries/demoRadial.html<br/>
http://www.wilmslowastro.com/steelseries/demoLinear.html<br/>
http://www.wilmslowastro.com/steelseries/demoExtras.html<br/>
http://www.weather-display.com/windy/gb/gauges-ss.html<br/>
<br/>
<b>Wikis:</b><br/>
http://wiki.sandaysoft.com/a/SteelSeries_Gauges<br/>
<br/>
<br/>
<b>Examples:</b><br/>
<img width="400px" src="https://github.com/CodingBSilva/SteelSeries-Canvas-QlikSense/blob/master/radial_example.png?raw=true"/><br/>
<img width="400px" src="https://github.com/CodingBSilva/SteelSeries-Canvas-QlikSense/blob/master/linear_example.png?raw=true"/><br/>
<br/>
<br/>
<h2>Settings</h2>
<img src="https://github.com/CodingBSilva/SteelSeries-Canvas-QlikSense/blob/master/settings_menu.png?raw=true"/><br/>

<h4>About Color Settings</h4>
The colors in the settings can be specified by the following methods:
<ol>
<li>Hexadecimal colors</li>
<li>RGB colors</li>
<li>RGBA colors</li>
<li>HSL colors</li>
<li>HSLA colors</li>
<li>Predefined/Cross-browser color names</li>
</ol>
<b>More info about the methods follow the link:</b> <br/>
<a href="http://www.w3schools.com/cssref/css_colors_legal.asp">http://www.w3schools.com/cssref/css_colors_legal.asp</a>
<br/>
<br/>
<h4>Help & Documentation</h4>
I will try to have more documentation soon (I Hope :)) for now here is a guide line image:<br/>
<img src="https://github.com/CodingBSilva/SteelSeries-Canvas-QlikSense/blob/master/radial_gauge_help.png?raw=true"/>
<br/>
<br/>
<h4>Sections</h4>
Here you can define your gauge sections and they must be defined as the follow:<br/>
<code>< start position number >,< end position number >'< color >'</code><br/>
<b>Example:</b><br/>
Let's define a blue section (Remember you can always use any color method).<br/>
<code>0, 10, 'rgba(0, 0, 220, 0.3)'</code><br/>
<br/>
<img src="https://github.com/CodingBSilva/SteelSeries-Canvas-QlikSense/blob/master/sections_example.png?raw=true"/>
<br/>
<br/>
<h4>Areas</h4>
Areas are not available for all the gauges. They must be defined as the follow:<br/>
<code>< start position number >,< end position number >'< color >'</code><br/>
<b>Example:</b><br/>
Let's define a small blue area (Remember you can always use any color method).<br/>
<code>0, 10, 'rgba(0, 0, 220, 0.3)'</code><br/>
<br/>
<img src="https://github.com/CodingBSilva/SteelSeries-Canvas-QlikSense/blob/master/areas_example.png?raw=true"/>

<br/>
<br/>
<h2>License</h2>
Copyright © 2017 Bruno Silva

Released under the MIT license.
