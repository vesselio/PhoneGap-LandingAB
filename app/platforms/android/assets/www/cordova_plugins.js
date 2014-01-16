cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.vessel.abplugin/www/vesselab.js",
        "id": "com.vessel.abplugin.VesselABPlugin",
        "clobbers": [
            "window.vesselab"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.vessel.abplugin": "0.1.0"
}
// BOTTOM OF METADATA
});