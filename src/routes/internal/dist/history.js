"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var solid_js_1 = require("solid-js");
var solid_js_2 = require("solid-js");
var solid_start_1 = require("solid-start");
var Favicon_1 = require("~/components/Favicon");
function History() {
    var _this = this;
    var _a = solid_js_2.createSignal([]), historyEntries = _a[0], setHistoryEntries = _a[1];
    solid_js_1.onMount(function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("~/API"); })];
                case 1:
                    _a.sent();
                    window.Velocity.history.on("ready", function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = setHistoryEntries;
                                    return [4 /*yield*/, window.Velocity.history.get()];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    }); });
    return (React.createElement("main", { "class": "flex w-full h-full bg-[#1C1B22] text-white" },
        React.createElement(solid_start_1.Title, null, "History"),
        React.createElement(solid_start_1.Link, { rel: "icon", href: "/icons/clock.svg" }),
        React.createElement("div", { "class": "w-[118px] sm:w-[240px] sm:items-end h-full flex flex-col items-center pt-[70px] text-2xl select-none" },
            React.createElement("div", { "class": "cursor-pointer h-12 w-12 sm:w-[204px] px-[10px] rounded flex items-center justify-center sm:justify-start gap-[9px] hover:bg-[#52525E] transition-colors", onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, window.Velocity.history.clear()];
                            case 1:
                                _b.sent();
                                _a = setHistoryEntries;
                                return [4 /*yield*/, window.Velocity.history.get()];
                            case 2:
                                _a.apply(void 0, [_b.sent()]);
                                return [2 /*return*/];
                        }
                    });
                }); } },
                React.createElement("i", { "class": "w-6 h-6 fa-light fa-trash" }),
                React.createElement("span", { "class": "hidden sm:block text-base" }, "Clear Browsing Data"))),
        React.createElement("div", { "class": "flex-1 flex flex-col mx-24 my-16" },
            React.createElement("h1", { "class": "text-2xl mb-5" }, "History"),
            React.createElement(solid_js_1.For, { each: historyEntries() }, function (entry) { return (React.createElement("div", { "class": "flex items-center border-b border-white justify-between px-5 py-2" },
                React.createElement("div", { "class": "flex flex-1 gap-5" },
                    React.createElement("i", { "class": "fa-light fa-trash mt-[2px]", onclick: function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        window.Velocity.history["delete"](entry.id);
                                        _a = setHistoryEntries;
                                        return [4 /*yield*/, window.Velocity.history.get()];
                                    case 1:
                                        _a.apply(void 0, [_b.sent()]);
                                        return [2 /*return*/];
                                }
                            });
                        }); } }),
                    function () {
                        var date = new Date(entry.timestamp);
                        return (React.createElement("span", { "class": "text-sm text-neutral-500" },
                            date.getHours() % 12,
                            ":",
                            date.getMinutes(),
                            " ",
                            date.getHours() >= 12 ? "PM" : "AM"));
                    },
                    React.createElement("a", { href: entry.url, onClick: function (e) {
                            e.preventDefault();
                            new window.parent.Velocity.Tab(entry.url, true);
                        }, "class": "flex gap-2 items-center" },
                        React.createElement("div", { "class": "h-4 w-4 mt-[2px]" },
                            React.createElement(Favicon_1["default"], { src: solid_js_2.createSignal(entry.favicon)[0] })),
                        React.createElement("span", { "class": "text-sm" }, entry.title))),
                React.createElement("div", { "class": "hidden flex-1 justify-end lg:flex" },
                    React.createElement("span", { "class": "text-sm text-neutral-500" }, entry.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, ""))))); }))));
}
exports["default"] = History;
