"use strict";

const KEYSYSTEM_TYPE = "org.w3.clearkey";

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* data */

let video = document.querySelector("video");
let options = [];

let keys = {};

let count = 1;

video.sessions = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* function */

const Base64ToHex = (str) => {
    let bin = window.atob(str.replace(/-/g, "+").replace(/_/g, "/"));
    let res = "";
    for (let i = 0; i < bin.length; i++) {
        res += ("0" + bin.charCodeAt(i).toString(16)).substr(-2);
    }
    return res;
};

const HexToBase64 = (hex) => {
    let bin = "";
    for (let i = 0; i < hex.length; i += 2) {
        bin += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return window
        .btoa(bin)
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
};

const createEnsureKey = async () => {
    log("[Create MediaKeys Object]");

    const keySystemAccess = await navigator.requestMediaKeySystemAccess(
        "org.w3.clearkey",
        [
            {
                initDataTypes: ["cenc"],
                videoCapabilities: [
                    { contentType: `${type}; codecs="${codecs}"` },
                ],
            },
        ]
    );
    const mediaKeys = await keySystemAccess.createMediaKeys();
    return await video.setMediaKeys(mediaKeys);
};

const handleMessage = (event) => {
    log("[Message] Session Update " + String(count++));

    var keySession = event.target;
    var te = new TextEncoder();
    var license = te.encode(
        `{"keys":[{"kty":"oct","k":"${HexToBase64(
            "cb541084c99731aef4fff74500c12ead"
        )}","kid":"${HexToBase64("6d76f25cb17f5e16b8eaef6bbf582d8e")}"}]}`
    );
    keySession
        .update(license)
        .catch(console.error.bind(console, "update() failed"));
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* main */

if (!navigator.requestMediaKeySystemAccess) {
    log(
        "EME API is not supported. Enable pref media.eme.enabled to true in about:config"
    );
}

keys["abba271e8bcf552bbd2e86a434a9a5d9"] = "69eaa802a6763af979e8d1940fb88392"; // SD
keys["6d76f25cb17f5e16b8eaef6bbf582d8e"] = "cb541084c99731aef4fff74500c12ead"; // HD

video.addEventListener("encrypted", (e) => {
    log("Encrypted Video");

    createEnsureKey().then(() => {
        var te = new TextEncoder();
        var initData = te.encode(
            `{"kids":["${HexToBase64("6d76f25cb17f5e16b8eaef6bbf582d8e")}"]}`
        );

        var keySession = video.mediaKeys.createSession();
        keySession.addEventListener("message", handleMessage);
        return keySession.generateRequest("keyids", initData);
    });
});
