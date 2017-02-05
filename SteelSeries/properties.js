define([], function () {
    'use strict';

    // ---------------------------------------------------------------------------------------
    // Dimensions & Measures
    // ---------------------------------------------------------------------------------------

    var dimensions = {
        uses: "dimensions",
        min: 0,
        max: 0
    };

    var measures = {
        uses: "measures",
        min: 1,
        max: 1
    };

    var sorting = {
        uses: "sorting"
    };

    // ---------------------------------------------------------------------------------------
    // PointInCode: LayoutSettings --> START
    // ---------------------------------------------------------------------------------------

    // Option where we define the style of the gauge
    // PointInCode: LayoutSettings --> ParamName: gaugeStyle
    var gaugeStyle = {
        ref: "gaugeStyle",
        type: "string",
        label: "Gauge Style",
        component: "dropdown",
        options:
                [{
            value: "radial",
            label: "Radial"
        }, {
            value: "radialBargraph",
            label: "Radial Bargraph"
        }, {
            value: "radialVertical",
            label: "Radial Vertical"
        }, {
            value: "linear",
            label: "Linear"
        }, {
            value: "linearBargraph",
            label: "Linear Bargraph"
        }, {
            value: "displaySingle",
            label: "Single display"
        },/* {
            value: "displayMulti",
            label: "Multi display"
        }, {
            value: "level",
            label: "Level"
        }, {
            value: "compass",
            label: "Compass"
        }, {
            value: "windDirection",
            label: "Wind Direction"
        }, {
            value: "horizon",
            label: "Horizon"
        }, {
            value: "led",
            label: "Led"
        },*/    {
            value: "clock",
            label: "Clock"
        }],/* {
            value: "battery",
            label: "Battery"
        }, {
            value: "stopwatch",
            label: "Stopwatch"
        }, {
            value: "altimeter",
            label: "Altimeter"
        }, {
            value: "trafficlight",
            label: "Trafficlight"
        }, {
            value: "lightbulb",
            label: "Lightbulb"
        }, {
            value: "odometer",
            label: "Odometer"
        }],*/
        defaultValue: "radial",
        show: true
    };

    // Option where we define the orientation of gauge
    // PointInCode: LayoutSettings --> ParamName: orientation
    var orientation = {
        ref: "orientation",
        type: "string",
        label: "Gauge Orientation",
        component: "dropdown",
        options:
                [{
            value: "NORTH",
            label: "North"
        }, {
            value: "WEST",
            label: "West"
        }, {
            value: "EAST",
            label: "East"
        }],
        defaultValue: "NORTH",
        show: function (layout) {
            return (layout.gaugeStyle === 'radialVertical');
        }
    };

    // Option where we define the type of gauge
    // PointInCode: LayoutSettings --> ParamName: gaugeType
    var gaugeType = {
        ref: "gaugeType",
        type: "string",
        label: "Gauge Type",
        component: "dropdown",
        options:
                [{
            value: "TYPE1",
            label: "Type 1"
        }, {
            value: "TYPE2",
            label: "Type 2"
        }, {
            value: "TYPE3",
            label: "Type 3"
        }, {
            value: "TYPE4",
            label: "Type 4"
        }],
        defaultValue: "TYPE4",
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'linear'));
        }
    };


    // Option where we define if Design Frame is visible or not
    // PointInCode: LayoutSettings --> ParamName: frameVisible
    var frameVisible = {
        ref: "frameVisible",
        type: "boolean",
        component: "switch",
        label: "Frame Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'horizon') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // Option where we define the frame design
    // PointInCode: LayoutSettings --> ParamName: frameDesign
    var frameDesign = {
        ref: "frameDesign",
        type: "string",
        label: "Frame design",
        component: "dropdown",
        options:
                [{
            value: "BLACK_METAL",
            label: "Black Metal"
        }, {
            value: "METAL",
            label: "Metal"
        }, {
            value: "SHINY_METAL",
            label: "Shiny Metal"
        }, {
            value: "BRASS",
            label: "Brass"
        }, {
            value: "STEEL",
            label: "Steel"
        }, {
            value: "CHROME",
            label: "Chrome"
        }, {
            value: "GOLD",
            label: "Gold"
        }, {
            value: "ANTHRACITE",
            label: "Anthracite"
        }, {
            value: "TILTED_GRAY",
            label: "Tilted Gray"
        }, {
            value: "TILTED_BLACK",
            label: "Tilted Black"
        }, {
            value: "GLOSSY_METAL",
            label: "Glossy Metal"
        }],
        defaultValue: "GLOSSY_METAL",
        show: function (layout) {
            return (layout.frameVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'horizon') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter')));
        }
    };


    // Option where we define if background is visible or not
    // PointInCode: LayoutSettings --> ParamName: backgroundVisible
    var backgroundVisible = {
        ref: "backgroundVisible",
        type: "boolean",
        component: "switch",
        label: "Background Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // Option where we define the background color of the gauge
    // PointInCode: LayoutSettings --> ParamName: backgroundColor
    var backgroundColor = {
        ref: "backgroundColor",
        type: "string",
        label: "Background Color",
        component: "dropdown",
        options:
                [{
            value: "DARK_GRAY",
            label: "Dark Gray"
        }, {
            value: "SATIN_GRAY",
            label: "Satin Gray"
        }, {
            value: "LIGHT_GRAY",
            label: "Light Gray"
        }, {
            value: "WHITE",
            label: "White"
        }, {
            value: "BLACK",
            label: "Black"
        }, {
            value: "BEIGE",
            label: "Beige"
        }, {
            value: "BROWN",
            label: "Brown"
        }, {
            value: "RED",
            label: "Red"
        }, {
            value: "GREEN",
            label: "Green"
        }, {
            value: "BLUE",
            label: "Blue"
        }, {
            value: "ANTHRACITE",
            label: "Anthracite"
        }, {
            value: "MUD",
            label: "Mud"
        }, {
            value: "PUNCHED_SHEET",
            label: "Punched Sheet"
        }, {
            value: "CARBON",
            label: "Carbon"
        }, {
            value: "STAINLESS",
            label: "Stainless"
        }, {
            value: "BRUSHED_METAL",
            label: "Brushed Metal"
        }, {
            value: "BRUSHED_STAINLESS",
            label: "Brushed Stainless"
        }, {
            value: "TURNED",
            label: "Turned"
        }],
        defaultValue: "DARK_GRAY",
        show: function (layout) {
            return (layout.backgroundVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter')));
        }
    };


    // Option where we define the layout menu
    // PointInCode: LayoutSettings --> MenuName: mlayout
    var mlayout = {
        type: "items",
        label: "Layout Settings",
        items: {
            gaugeStyle: gaugeStyle,
            orientation: orientation,
            gaugeType: gaugeType,
            frameVisible: frameVisible,
            frameDesign: frameDesign,
            backgroundVisible: backgroundVisible,
            backgroundColor: backgroundColor
        }
    };


    // PointInCode: LayoutSettings --> END

    // ---------------------------------------------------------------------------------------
    // PointInCode: Gauge LCD Settings --> START
    // ---------------------------------------------------------------------------------------

    // Option where we define if LCD is visible or not
    // PointInCode: Gauge LCD Settings --> ParamName: lcdVisible
    var lcdVisible = {
        ref: "lcdVisible",
        type: "boolean",
        component: "switch",
        label: "LCD Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };

    // Option where we define the decimal number presented on the lcd
    // PointInCode: Gauge LCD Settings --> ParamName: lcdDecimals
    var lcdDecimals = {
        ref: "lcdDecimals",
        type: "integer",
        label: "LCD Decimals",
        min: 0,
        max: 10,
        defaultValue: 2,
        show: function (layout) {
            return (layout.lcdVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti')));
        }
    };

    // Option where we define the LCD Title
    // PointInCode: Gauge LCD Settings --> ParamName: lcdTitleStrings
    var lcdTitleStrings = {
        ref: "lcdTitleStrings",
        type: "string",
        label: "LCD Title",
        defaultValue: "",
        show: function (layout) {
            return (layout.gaugeStyle === 'windDirection');
        }
    };

    // Option where we define the LCD color
    // PointInCode: Gauge LCD Settings --> ParamName: lcdColor
    var lcdColor = {
        ref: "lcdColor",
        type: "string",
        label: "LCD Color",
        component: "dropdown",
        options:
                [{
            value: "BEIGE",
            label: "Beige"
        }, {
            value: "BLUE",
            label: "Blue"
        }, {
            value: "ORANGE",
            label: "Orange"
        }, {
            value: "RED",
            label: "Red"
        }, {
            value: "YELLOW",
            label: "Yellow"
        }, {
            value: "WHITE",
            label: "White"
        }, {
            value: "GRAY",
            label: "Gray"
        }, {
            value: "BLACK",
            label: "Black"
        }, {
            value: "GREEN",
            label: "Green"
        }, {
            value: "BLUE2",
            label: "Blue 2"
        }, {
            value: "BLUE_BLACK",
            label: "Blue Black"
        }, {
            value: "BLUE_DARKBLUE",
            label: "Blue Dark Blue"
        }, {
            value: "BLUE_GRAY",
            label: "BlueGray"
        }, {
            value: "STANDARD",
            label: "Standard"
        }, {
            value: "STANDARD_GREEN",
            label: "Standard Green"
        }, {
            value: "BLUE_BLUE",
            label: "Blue Blue"
        }, {
            value: "RED_DARKRED",
            label: "Red Dark Red"
        }, {
            value: "DARKBLUE",
            label: "Dark Blue"
        }, {
            value: "LILA",
            label: "Lila"
        }, {
            value: "BLACKRED",
            label: "Black Red"
        }, {
            value: "DARKGREEN",
            label: "Dark Green"
        }, {
            value: "AMBER",
            label: "Amber"
        }, {
            value: "LIGHTBLUE",
            label: "Light Blue"
        }, {
            value: "SECTIONS",
            label: "Sections"
        }],
        defaultValue: "STANDARD_GREEN",
        show: function (layout) {
            return (layout.lcdVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'altimeter')));
        }
    };

    // Option where we define the LCD Settings Menu
    // PointInCode: Gauge LCD Settings --> MenuName: mlcd
    var mlcd = {
        type: "items",
        label: "LCD Settings",
        items: {
            lcdVisible: lcdVisible,
            lcdDecimals: lcdDecimals,
            lcdTitleStrings: lcdTitleStrings,
            lcdColor: lcdColor
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // PointInCode: Gauge LCD Settings --> END


    // ---------------------------------------------------------------------------------------
    // PointInCode: Gauge LED Settings --> START
    // ---------------------------------------------------------------------------------------

    // Option where we define if LED is visible or not
    // PointInCode: Gauge LED Settings --> ParamName: ledVisible
    var ledVisible = {
        ref: "ledVisible",
        type: "boolean",
        component: "switch",
        label: "LED Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // Option where we define the LED color
    // PointInCode: Gauge LED color Settings --> ParamName: ledColor
    var ledColor = {
        ref: "ledColor",
        type: "string",
        label: "LED Color",
        component: "dropdown",
        options:
                [{
            value: "GREEN",
            label: "Green"
        }, {
            value: "BLUE",
            label: "Blue"
        }, {
            value: "ORANGE",
            label: "Orange"
        }, {
            value: "RED",
            label: "Red"
        }, {
            value: "YELLOW",
            label: "Yellow"
        }, {
            value: "CYAN",
            label: "Cyan"
        }, {
            value: "MAGENTA",
            label: "Magenta"
        }],
        defaultValue: "BLUE",
        show: function (layout) {
            return (layout.ledVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'led')));
        }
    };

    // Option where we define if User LED is visible or not
    // PointInCode: Gauge User LED Settings --> ParamName: userLedVisible
    var userLedVisible = {
        ref: "userLedVisible",
        type: "boolean",
        component: "switch",
        label: "User LED Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph'));
        }
    };


    // Option where we define the User LED color
    // PointInCode: Gauge User LED color Settings --> ParamName: userLedColor
    var userLedColor = {
        ref: "userLedColor",
        type: "string",
        label: "User LED Color",
        component: "dropdown",
        options:
                [{
            value: "GREEN",
            label: "Green"
        }, {
            value: "BLUE",
            label: "Blue"
        }, {
            value: "ORANGE",
            label: "Orange"
        }, {
            value: "RED",
            label: "Red"
        }, {
            value: "YELLOW",
            label: "Yellow"
        }, {
            value: "CYAN",
            label: "Cyan"
        }, {
            value: "MAGENTA",
            label: "Magenta"
        }],
        defaultValue: "RED",
        show: function (layout) {
            return (layout.userLedVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph')));
        }
    };


    // Option where we define the LED Settings Menu
    // PointInCode: Gauge LED Settings --> MenuName: mled
    var mled = {
        type: "items",
        label: "LED Settings",
        items: {
            ledVisible: ledVisible,
            ledColor: ledColor,
            userLedVisible: userLedVisible,
            userLedColor: userLedColor
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'led'));
        }
    };

    // PointInCode: Gauge LED Settings --> END

    // ---------------------------------------------------------------------------------------
    // PointInCode: Foreground&Trend --> START
    // ---------------------------------------------------------------------------------------

    // Option where we define if Foreground is visible or not
    // PointInCode: Foreground&Trend --> ParamName: foregroundVisible
    var foregroundVisible = {
        ref: "foregroundVisible",
        type: "boolean",
        component: "switch",
        label: "Foreground Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'horizon') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // Option where we define the foreground Type
    // PointInCode: Foreground&Trend --> ParamName: foregroundType
    var foregroundType = {
        ref: "foregroundType",
        type: "string",
        label: "Foreground Type",
        component: "dropdown",
        options:
                [{
            value: "TYPE1",
            label: "Type 1"
        }, {
            value: "TYPE2",
            label: "Type 2"
        }, {
            value: "TYPE3",
            label: "Type 3"
        }, {
            value: "TYPE4",
            label: "Type 4"
        }, {
            value: "TYPE5",
            label: "Type 5"
        }],
        defaultValue: "TYPE1",
        show: function (layout) {
            return (layout.foregroundVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'horizon') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter')));
        }
    };


    // Option where we define if the Trend icon is visible or not
    // PointInCode: Foreground&Trend --> ParamName: trendVisible
    // var trendVisible = {
        // ref: "trendVisible",
        // type: "boolean",
        // component: "switch",
        // label: "Trend Icon Visible",
        // options: [{
            // value: true,
            // label: "True"
        // }, {
            // value: false,
            // label: "False"
        // }],
        // defaultValue: false,
        // show: function (layout) {
            // return ((layout.gaugeStyle === 'radial') ||
                    // (layout.gaugeStyle === 'radialBargraph'));
        // }
    // };


    // Option where we define the Foreground&Trend Settings Menu
    // PointInCode: Foreground&Trend --> MenuName: mforeandtrend
    var mforeandtrend = {
        type: "items",
        label: "Foreground & Trend Settings",
        items: {
            foregroundVisible: foregroundVisible,
            foregroundType: foregroundType
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'horizon') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // PointInCode: Foreground&Trend --> END

    // ---------------------------------------------------------------------------------------
    // PointInCode: Gauge Titles and Units Settings --> START
    // ---------------------------------------------------------------------------------------

    // Option to define if the gauge Unit Alt pos
    // PointInCode: Gauge Titles and Units Settings --> ParamName: unitAltPos
    var unitAltPos = {
        ref: "unitAltPos",
        type: "boolean",
        component: "switch",
        label: "Unit Alt Pos",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return (layout.gaugeStyle === 'altimeter');
        }
    };


    // Option to define if the gauge have or not the units label inside it
    // PointInCode: Gauge Titles and Units Settings --> ParamName: unitStringVisible
    var unitStringVisible = {
        ref: "unitStringVisible",
        type: "boolean",
        component: "switch",
        label: "Show Units",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // Option where we define the label for the units
    // PointInCode: Gauge Titles and Units Settings --> ParamName: unitString
    var unitString = {
        ref: "unitString",
        type: "string",
        label: "Units Title",
        defaultValue: "ms",
        show: function (layout) {
            return (layout.unitStringVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti') ||
                    (layout.gaugeStyle === 'altimeter')));
        }
    };


    // Option where we define if we show or not the gauge inside title
    // also for headerStringVisible parameter
    // PointInCode: Gauge Titles and Units Settings --> ParamName: showgaugetitle
    // PointInCode: Gauge Titles and Units Settings --> ParamName: headerStringVisible
    var showgaugetitle = {
        ref: "showgaugetitle",
        type: "boolean",
        component: "switch",
        label: "Show Gauge Title",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // Option where we define the title and units menu
    // also for headerString parameter
    // PointInCode: Gauge Titles and Units Settings --> ParamName: titleString
    // PointInCode: Gauge Titles and Units Settings --> ParamName: headerString
    var titleString = {
        ref: "titleString",
        type: "string",
        label: "Gauge Title",
        defaultValue: "Ping",
        show: function (layout) {
            return (layout.showgaugetitle &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'altimeter')));
        }
    };


    // Option where we define the LCD Settings Menu
    // also for headerString parameter
    // PointInCode: Gauge Titles and Units Settings --> MenuName: mtitles
    var mtitles = {
        type: "items",
        label: "Titles & Units Settings",
        items: {
            unitAltPos: unitAltPos,
            unitStringVisible: unitStringVisible,
            unitString: unitString,
            showgaugetitle: showgaugetitle,
            titleString: titleString
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'altimeter') ||
                    (layout.gaugeStyle === 'displayMulti') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection'));
        }
    };


    // PointInCode: Gauge Titles and Units Settings --> END

    // ---------------------------------------------------------------------------------------
    // PointInCode: Values Settings --> START
    // ---------------------------------------------------------------------------------------


    // Option where we define niceScale
    // PointInCode: Values Settings --> ParamName: niceScale
    var niceScale = {
        ref: "niceScale",
        type: "boolean",
        component: "switch",
        label: "Nice Scale",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // Option where we define if we show or not the min value
    // PointInCode: Values Settings --> ParamName: minMeasuredValueVisible
    var minMeasuredValueVisible = {
        ref: "minMeasuredValueVisible",
        type: "boolean",
        component: "switch",
        label: "Min Value Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // Option where we define the Minimum value of the value range
    // PointInCode: Values Settings --> ParamName: minValue
    var minValue = {
        ref: "minValue",
        type: "integer",
        label: "Min Value",
        defaultValue: 0,
        show: function (layout) {
            return (layout.minMeasuredValueVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph')));
        }
    };


    // Option where we define if we show or not the max value
    // PointInCode: Values Settings --> ParamName: maxMeasuredValueVisible
    var maxMeasuredValueVisible = {
        ref: "maxMeasuredValueVisible",
        type: "boolean",
        component: "switch",
        label: "Máx Value Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // Option where we define the Maximum value of the value range
    // PointInCode: Values Settings --> ParamName: maxValue
    var maxValue = {
        ref: "maxValue",
        type: "integer",
        label: "Scale Máx Value",
        defaultValue: 100,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };

    // Option where we define the Color to be used
    // PointInCode: Values Settings --> ParamName: valueColor
    var valueColor = {
        ref: "valueColor",
        type: "string",
        label: "Value Color",
        component: "dropdown",
        options:
                [{
            value: "RED",
            label: "Red"
        }, {
            value: "GREEN",
            label: "Green"
        }, {
            value: "BLUE",
            label: "Blue"
        }, {
            value: "ORANGE",
            label: "Orange"
        }, {
            value: "YELLOW",
            label: "Yellow"
        }, {
            value: "CYAN",
            label: "Cyan"
        }, {
            value: "MAGENTA",
            label: "Magenta"
        }, {
            value: "WHITE",
            label: "White"
        }, {
            value: "GRAY",
            label: "Gray"
        }, {
            value: "BLACK",
            label: "Black"
        }, {
            value: "RAITH",
            label: "Raith"
        }, {
            value: "GREEN_LCD",
            label: "Green LCD"
        }, {
            value: "JUG_GREEN",
            label: "Jug Green"
        }],
        defaultValue: "RED",
        show: function (layout) {
            return ((layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // Option where we define de number format in the label
    // PointInCode: Values Settings --> ParamName: labelNumberFormat
    // var labelNumberFormat = {
        // ref: "labelNumberFormat",
        // type: "string",
        // label: "Label number format type",
        // component: "dropdown",
        // options:
                // [{
            // value: "STANDARD",
            // label: "Standard"
        // }, {
            // value: "FRACTIONAL",
            // label: "Fractional"
        // }, {
            // value: "SCIENTIFIC",
            // label: "Scientific"
        // }],
        // defaultValue: "STANDARD",
        // show: function (layout) {
            // return ((layout.gaugeStyle === 'radial') ||
                    // (layout.gaugeStyle === 'radialBargraph') ||
                    // (layout.gaugeStyle === 'radialVertical') ||
                    // (layout.gaugeStyle === 'linear') ||
                    // (layout.gaugeStyle === 'linearBargraph'));
        // }
    // };


    // Option where we define the menu
    // PointInCode: Values Settings --> MenuName: mvalues
    var mvalues = {
        type: "items",
        label: "Values & Scale Settings",
        items: {
            niceScale: niceScale,
            minMeasuredValueVisible: minMeasuredValueVisible,
            minValue: minValue,
            maxMeasuredValueVisible: maxMeasuredValueVisible,
            maxValue: maxValue,
            valueColor: valueColor
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // PointInCode: Values Settings --> END


    // ---------------------------------------------------------------------------------------
    // PointInCode: Threshold Settings --> START
    // ---------------------------------------------------------------------------------------


    // Option where we define if we show or not the gauge threshold
    // PointInCode: Threshold Settings --> ParamName: thresholdVisible
    var thresholdVisible = {
        ref: "thresholdVisible",
        type: "boolean",
        component: "switch",
        label: "Threshold value",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };

    // Option where we define if we show or not the gauge threshold
    // PointInCode: Threshold Settings --> ParamName: thresholdRising
    var thresholdRising = {
        ref: "thresholdRising",
        type: "boolean",
        component: "switch",
        label: "Override threshold value",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return (layout.thresholdVisible &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph')));
        }
    };

    // Option where we define the threshold of the value range
    // PointInCode: Threshold Settings --> ParamName: threshold
    var threshold = {
        ref: "threshold",
        type: "integer",
        label: "Threshold",
        defaultValue: 50,
        show: function (layout) {
            return (layout.thresholdVisible &&
                    layout.thresholdRising &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph')));
        }
    };


    // Option where we define the menu
    // PointInCode: Threshold Settings --> MenuName: mthreshold
    var mthreshold = {
        type: "items",
        label: "Threshold Settings",
        items: {
            thresholdVisible: thresholdVisible,
            thresholdRising: thresholdRising,
            threshold: threshold
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linear') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // PointInCode: Threshold Settings --> END

    // ---------------------------------------------------------------------------------------
    // PointInCode: Pointer & knob Settings --> START
    // ---------------------------------------------------------------------------------------

    // Option where we define if we show or not the second Pointer
    // PointInCode: Values Settings --> ParamName: secondPointerVisible
    var secondPointerVisible = {
        ref: "secondPointerVisible",
        type: "boolean",
        component: "switch",
        label: "Second Pointer Visible",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return (layout.gaugeStyle === 'clock');
        }
    };

    // Option where we define the Pointer Type to be used
    // PointInCode: Pointer & knob Settings --> ParamName: pointerType
    var pointerType = {
        ref: "pointerType",
        type: "string",
        label: "Pointer Type",
        component: "dropdown",
        options:
                [{
            value: "TYPE1",
            label: "Type 1"
        }, {
            value: "TYPE2",
            label: "Type 2"
        }, {
            value: "TYPE3",
            label: "Type 3"
        }, {
            value: "TYPE4",
            label: "Type 4"
        }, {
            value: "TYPE5",
            label: "Type 5"
        }, {
            value: "TYPE6",
            label: "Type 6"
        }, {
            value: "TYPE7",
            label: "Type 7"
        }, {
            value: "TYPE8",
            label: "Type 8"
        }, {
            value: "TYPE9",
            label: "Type 9"
        }, {
            value: "TYPE10",
            label: "Type 10"
        }, {
            value: "TYPE11",
            label: "Type 11"
        }, {
            value: "TYPE12",
            label: "Type 12"
        }, {
            value: "TYPE13",
            label: "Type 13"
        }, {
            value: "TYPE14",
            label: "Type 14"
        }, {
            value: "TYPE15",
            label: "Type 15"
        }, {
            value: "TYPE16",
            label: "Type 16"
        }],
        defaultValue: "TYPE1",
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'clock'));
        }
    };


    // Option where we define the Pointer Color to be used
    // PointInCode: Pointer & knob Settings --> ParamName: pointerColor
    var pointerColor = {
        ref: "pointerColor",
        type: "string",
        label: "Pointer Color",
        component: "dropdown",
        options:
                [{
            value: "RED",
            label: "Red"
        }, {
            value: "GREEN",
            label: "Green"
        }, {
            value: "BLUE",
            label: "Blue"
        }, {
            value: "ORANGE",
            label: "Orange"
        }, {
            value: "YELLOW",
            label: "Yellow"
        }, {
            value: "CYAN",
            label: "Cyan"
        }, {
            value: "MAGENTA",
            label: "Magenta"
        }, {
            value: "WHITE",
            label: "White"
        }, {
            value: "GRAY",
            label: "Gray"
        }, {
            value: "BLACK",
            label: "Black"
        }, {
            value: "RAITH",
            label: "Raith"
        }, {
            value: "GREEN_LCD",
            label: "Green LCD"
        }, {
            value: "JUG_GREEN",
            label: "Jug Green"
        }],
        defaultValue: "RED",
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'horizon') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch'));
        }
    };


    // Option where we define the Knob Type to be used
    // PointInCode: Pointer & knob Settings --> ParamName: knobType
    var knobType = {
        ref: "knobType",
        type: "string",
        label: "Knob Type",
        component: "dropdown",
        options:
                [{
            value: "STANDARD_KNOB",
            label: "STANDARD_KNOB"
        }, {
            value: "METAL_KNOB",
            label: "METAL_KNOB"
        }],
        defaultValue: "STANDARD_KNOB",
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // Option where we define the Knob Style to be used
    // PointInCode: Pointer & knob Settings --> ParamName: knobStyle
    var knobStyle = {
        ref: "knobStyle",
        type: "string",
        label: "Knob Style",
        component: "dropdown",
        options:
                [{
            value: "BLACK",
            label: "BLACK"
        }, {
            value: "BRASS",
            label: "BRASS"
        }, {
            value: "SILVER",
            label: "SILVER"
        }],
        defaultValue: "SILVER",
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // Option where we define the menu
    // PointInCode: Pointer & knob Settings --> MenuName: mpointerknob
    var mpointerknob = {
        type: "items",
        label: "Pointer & Knob Settings",
        items: {
            secondPointerVisible: secondPointerVisible,
            pointerType: pointerType,
            pointerColor: pointerColor,
            knobType: knobType,
            knobStyle: knobStyle
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'level') ||
                    (layout.gaugeStyle === 'compass') ||
                    (layout.gaugeStyle === 'windDirection') ||
                    (layout.gaugeStyle === 'horizon') ||
                    (layout.gaugeStyle === 'clock') ||
                    (layout.gaugeStyle === 'stopwatch') ||
                    (layout.gaugeStyle === 'altimeter'));
        }
    };


    // PointInCode: Pointer & knob Settings --> END

    // ---------------------------------------------------------------------------------------
    // PointInCode: Display Settings --> START
    // ---------------------------------------------------------------------------------------


    // Option where we define if the value is a numeric
    // PointInCode: Display --> ParamName: valuesNumeric
    var valuesNumeric = {
        ref: "valuesNumeric",
        type: "boolean",
        component: "switch",
        label: "Numeric Value",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: true,
        show: function (layout) {
            return ((layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti'));
        }
    };

    // Option where we define the text to show on the display
    // PointInCode: Display --> ParamName: valueDisplay1
    var valueDisplay1 = {
        ref: "valueDisplay1",
        type: "string",
        label: "Display Text",
        defaultValue: "",
        show: function (layout) {
            return ((!layout.valuesNumeric) &&
                    ((layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti')));
        }
    };

    // Option where we define if is always scrolling
    // PointInCode: Display --> ParamName: alwaysScroll
    var alwaysScroll = {
        ref: "alwaysScroll",
        type: "boolean",
        component: "switch",
        label: "Always Scroll",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return (!layout.valuesNumeric &&
                    (layout.gaugeStyle === 'displaySingle'));
        }
    };

    // Option where we define if scroll is auto or manual
    // PointInCode: Display --> ParamName: autoScroll
    var autoScroll = {
        ref: "autoScroll",
        type: "boolean",
        component: "switch",
        label: "Auto Scroll",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return (!layout.valuesNumeric &&
                    (layout.gaugeStyle === 'displaySingle'));
        }
    };

    // Option where we define if is digital font or not
    // PointInCode: Display --> ParamName: digitalFont
    // var digitalFont = {
        // ref: "digitalFont",
        // type: "boolean",
        // component: "switch",
        // label: "Digital Font",
        // options: [{
            // value: true,
            // label: "True"
        // }, {
            // value: false,
            // label: "False"
        // }],
        // defaultValue: false,
        // show: function (layout) {
            // return ((layout.gaugeStyle === 'radial') ||
                    // (layout.gaugeStyle === 'radialBargraph') ||
                    // (layout.gaugeStyle === 'linear') ||
                    // (layout.gaugeStyle === 'linearBargraph') ||
                    // (layout.gaugeStyle === 'displaySingle') ||
                    // (layout.gaugeStyle === 'displayMulti') ||
                    // (layout.gaugeStyle === 'windDirection') ||
                    // (layout.gaugeStyle === 'altimeter'));
        // }
    // };

    // Option where we define the menu
    // PointInCode: Display --> MenuName: mdisplay
    var mdisplay = {
        type: "items",
        label: "Display Settings",
        items: {
            valuesNumeric: valuesNumeric,
            valueDisplay1: valueDisplay1,
            alwaysScroll: alwaysScroll,
            autoScroll: autoScroll
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'displayMulti'));
        }
    };


    // PointInCode: Display --> END

// ---------------------------------------------------------------------------------------
// PointInCode: msection --> START
// ---------------------------------------------------------------------------------------

    // Option where we define if show or not section colors
    // PointInCode: msection --> ParamName: useSectionColors
    var useSectionColors = {
        ref: "useSectionColors",
        type: "boolean",
        component: "switch",
        label: "Section Color",
        options: [{
            value: true,
            label: "True"
        }, {
            value: false,
            label: "False"
        }],
        defaultValue: false,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'linearBargraph'));
        }
    };


    // Option where we define the number of sections
    // PointInCode: msection --> ParamName: numberSection
    var numberSection = {
        ref: "numberSection",
        type: "integer",
        label: "Number of Sections",
        component: "dropdown",
        options:
                [{
            value: 0,
            label: "0"
        }, {
            value: 1,
            label: "1"
        }, {
            value: 2,
            label: "2"
        }, {
            value: 3,
            label: "3"
        }, {
            value: 4,
            label: "4"
        }, {
            value: 5,
            label: "5"
        }, {
            value: 6,
            label: "6"
        }, {
            value: 7,
            label: "7"
        }, {
            value: 8,
            label: "8"
        }, {
            value: 9,
            label: "9"
        }, {
            value: 10,
            label: "10"
        }],
        defaultValue: 0,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    ((layout.gaugeStyle === 'radialBargraph') && layout.useSectionColors) ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    ((layout.gaugeStyle === 'linearBargraph') && layout.useSectionColors) ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection'));
        }
    };


    // PointInCode: msection --> ParamName: valueSection1
    var valueSection1 = {
        ref: "valueSection1",
        type: "string",
        label: "Section 1",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 1) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection2
    var valueSection2 = {
        ref: "valueSection2",
        type: "string",
        label: "Section 2",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 2) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection3
    var valueSection3 = {
        ref: "valueSection3",
        type: "string",
        label: "Section 3",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 3) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection4
    var valueSection4 = {
        ref: "valueSection4",
        type: "string",
        label: "Section 4",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 4) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection5
    var valueSection5 = {
        ref: "valueSection5",
        type: "string",
        label: "Section 5",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 5) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection6
    var valueSection6 = {
        ref: "valueSection6",
        type: "string",
        label: "Section 6",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 6) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection7
    var valueSection7 = {
        ref: "valueSection7",
        type: "string",
        label: "Section 7",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 7) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection8
    var valueSection8 = {
        ref: "valueSection8",
        type: "string",
        label: "Section 8",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 8) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection9
    var valueSection9 = {
        ref: "valueSection9",
        type: "string",
        label: "Section 9",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 9) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: msection --> ParamName: valueSection10
    var valueSection10 = {
        ref: "valueSection10",
        type: "string",
        label: "Section 10",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberSection >= 10) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // Option where we define the menu
    // PointInCode: msection --> MenuName: msection
    var msection = {
        type: "items",
        label: "Sections",
        items: {
            useSectionColors: useSectionColors,
            numberSection: numberSection,
            valueSection1: valueSection1,
            valueSection2: valueSection2,
            valueSection3: valueSection3,
            valueSection4: valueSection4,
            valueSection5: valueSection5,
            valueSection6: valueSection6,
            valueSection7: valueSection7,
            valueSection8: valueSection8,
            valueSection9: valueSection9,
            valueSection10: valueSection10
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialBargraph') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'linearBargraph') ||
                    (layout.gaugeStyle === 'displaySingle') ||
                    (layout.gaugeStyle === 'windDirection'));
        }
    };


// PointInCode: msection --> END

// ---------------------------------------------------------------------------------------
// PointInCode: marea --> START
// ---------------------------------------------------------------------------------------

    // Option where we define the number of Areas
    // PointInCode: marea --> ParamName: numberArea
    var numberArea = {
        ref: "numberArea",
        type: "integer",
        label: "Number of Areas",
        component: "dropdown",
        options:
                [{
            value: 0,
            label: "0"
        }, {
            value: 1,
            label: "1"
        }, {
            value: 2,
            label: "2"
        }, {
            value: 3,
            label: "3"
        }, {
            value: 4,
            label: "4"
        }, {
            value: 5,
            label: "5"
        }, {
            value: 6,
            label: "6"
        }, {
            value: 7,
            label: "7"
        }, {
            value: 8,
            label: "8"
        }, {
            value: 9,
            label: "9"
        }, {
            value: 10,
            label: "10"
        }],
        defaultValue: 0,
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection'));
        }
    };


    // PointInCode: marea --> ParamName: valueArea1
    var valueArea1 = {
        ref: "valueArea1",
        type: "string",
        label: "Area 1",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 1) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea2
    var valueArea2 = {
        ref: "valueArea2",
        type: "string",
        label: "Area 2",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 2) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea3
    var valueArea3 = {
        ref: "valueArea3",
        type: "string",
        label: "Area 3",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 3) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea4
    var valueArea4 = {
        ref: "valueArea4",
        type: "string",
        label: "Area 4",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 4) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea5
    var valueArea5 = {
        ref: "valueArea5",
        type: "string",
        label: "Area 5",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 5) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea6
    var valueArea6 = {
        ref: "valueArea6",
        type: "string",
        label: "Area 6",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 6) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea7
    var valueArea7 = {
        ref: "valueArea7",
        type: "string",
        label: "Area 7",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 7) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea8
    var valueArea8 = {
        ref: "valueArea8",
        type: "string",
        label: "Area 8",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 8) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea9
    var valueArea9 = {
        ref: "valueArea9",
        type: "string",
        label: "Area 9",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 9) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // PointInCode: marea --> ParamName: valueArea10
    var valueArea10 = {
        ref: "valueArea10",
        type: "string",
        label: "Area 10",
        defaultValue: "",
        show: function (layout) {
            return ((layout.numberArea >= 10) &&
                    ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection')));
        }
    };

    // Option where we define the menu
    // PointInCode: marea --> MenuName: marea
    var marea = {
        type: "items",
        label: "Areas",
        items: {
            numberArea: numberArea,
            valueArea1: valueArea1,
            valueArea2: valueArea2,
            valueArea3: valueArea3,
            valueArea4: valueArea4,
            valueArea5: valueArea5,
            valueArea6: valueArea6,
            valueArea7: valueArea7,
            valueArea8: valueArea8,
            valueArea9: valueArea9,
            valueArea10: valueArea10
        },
        show: function (layout) {
            return ((layout.gaugeStyle === 'radial') ||
                    (layout.gaugeStyle === 'radialVertical') ||
                    (layout.gaugeStyle === 'windDirection'));
        }
    };


// PointInCode: marea --> END

    // ---------------------------------------------------------------------------------------
    // Property Panel Definition
    // ---------------------------------------------------------------------------------------

    // Appearance Panel
    var appearancePanel = {
        uses: "settings",
        items: {
            mlayout: mlayout,
            mlcd: mlcd,
            mled: mled,
            mforeandtrend: mforeandtrend,
            mtitles: mtitles,
            mvalues: mvalues,
            mthreshold: mthreshold,
            mpointerknob: mpointerknob,
            mdisplay: mdisplay,
            msection: msection,
            marea: marea
        }
    };

    // Return values
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            appearance: appearancePanel
        }
    };

});

// Comment Template
// ---------------------------------------------------------------------------------------
// PointInCode: Pointer & knob Settings --> START
// ---------------------------------------------------------------------------------------
// PointInCode: Pointer & knob Settings --> ParamName:
// PointInCode: Pointer & knob Settings --> MenuName:
// PointInCode: Pointer & knob Settings --> END