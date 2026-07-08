"use strict";

const IP = "172.31.197.243";

const BASE_URL = `http://${IP}:8080/`;
const MPD_FILE = "segmentDRM.mpd";

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* data */

let logElement = document.getElementById("log");

let type, codecs, width, height, bandwidth; // streaming info
let timescale, init, mediaFormat, startNum, chuckCnt; // segment template
let time = [],
    duration = [],
    repeat = []; // segment info : array

let playIdx = 0;

let mediaSource, videoElement, sourceBuffer;

let respDataSz = Number(0);

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* function */

const log = (obj) => {
    console.log(obj);
    logElement.innerHTML += `<br> ` + obj;
};

const request = async (url, type, callback, isLog) => {
    if (url === "") return;

    if (isLog) log(`[Request] ${url} ${type}`);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = type;

    xhr.onload = (e) => {
        if (xhr.status != 200) {
            log("[Error] Get Error: " + xhr.statusText);
            return false;
        }
        callback(xhr.response);
    };

    xhr.send();
};

const appendToBuffer = async (videoChunk) => {
    try {
        if (!sourceBuffer.updating) {
            if (videoChunk) {
                sourceBuffer.appendBuffer(new Uint8Array(videoChunk));
            }
        }
    } catch {
        sourceBuffer.remove(0, 30);
        await appendToBuffer(videoChunk);
    }
};

const nextSegment = async () => {
    let url = BASE_URL + mediaFormat.replace("$Number$", playIdx);
    request(url, "arraybuffer", appendToBuffer, false);
    playIdx++;
    if (playIdx > chuckCnt) {
        sourceBuffer.removeEventListener("updateend", nextSegment);
    }
};

const parseNplay = async (textXML) => {
    log("[Parse] Parsing .mpd file...");

    let parser = new DOMParser();
    let xmlData = parser.parseFromString(textXML, "text/xml");

    let rep = xmlData.querySelectorAll("Representation");
    type = rep[1].getAttribute("mimeType");
    codecs = rep[1].getAttribute("codecs");
    width = rep[1].getAttribute("width");
    height = rep[1].getAttribute("height");
    bandwidth = rep[1].getAttribute("bandwidth");

    let segTemplate = xmlData.querySelectorAll("SegmentTemplate");
    timescale = segTemplate[1].getAttribute("timescale");
    init = segTemplate[1].getAttribute("initialization");
    mediaFormat = segTemplate[1].getAttribute("media");
    startNum = segTemplate[1].getAttribute("startNumber");
    playIdx = startNum;

    let timeline = xmlData.querySelectorAll("SegmentTimeline")[0].children;
    chuckCnt = 0;

    for (let idx = 0; idx < timeline.length; idx++) {
        const element = timeline[idx];

        let t = Number(element.getAttribute("t"));
        let d = Number(element.getAttribute("d"));
        let r = Number(element.getAttribute("r"));

        time.push(t);
        duration.push(d);
        repeat.push({ idx, r });

        chuckCnt += r ? r + 1 : 1;
    }

    log(`${type}; codecs="${codecs}"`);

    sourceBuffer = mediaSource.addSourceBuffer(`${type}; codecs="${codecs}"`);
    sourceBuffer.addEventListener("updateend", nextSegment);

    request(BASE_URL + init, "arraybuffer", appendToBuffer, true);

    let playPromise = videoElement.play();

    if (playPromise !== undefined) {
        playPromise
            .then((_) => {
                videoElement.pause();
            })
            .catch((error) => log);
    }
};

const onSourceOpen = async () => {
    request(BASE_URL + MPD_FILE, "text", parseNplay, true);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
/* main */

videoElement = document.querySelector("video");
mediaSource = new MediaSource();

videoElement.src = window.URL.createObjectURL(mediaSource);
mediaSource.addEventListener("sourceopen", onSourceOpen);
