// browser.build-jotai.main/valtio
const valtio = require("./valtio")

// browser.build-jotai.main/valtioUtils
const valtioUtils = require("./valtio/utils")

// browser.build-jotai.main/jotai
const jotai = require("./jotai")

// browser.build-jotai.main/jotaiUtils
const jotaiUtils = require("./jotai/utils")

// browser.build-jotai.main/jotaiValtio
const jotaiValtio = require("./jotai/valtio")

// browser.build-jotai.main/__init__
window["valtio"] = valtio;
window["valtioUtils"] = valtioUtils;
window["jotai"] = jotai;
window["jotaiUtils"] = jotaiUtils;
window["jotaiValtio"] = jotaiValtio;