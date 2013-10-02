cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.vessel.abplugin/www/vesselab.js",
        "id": "com.vessel.abplugin.VesselABPlugin",
        "clobbers": [
            "window.vesselab"
        ]
    }
]
});