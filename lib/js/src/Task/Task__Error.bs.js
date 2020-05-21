// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Task$AgdaModeVscode = require("./Task.bs.js");
var Parser$AgdaModeVscode = require("../Parser.bs.js");
var Connection$AgdaModeVscode = require("../Connection.bs.js");

function Impl(Editor) {
  var Task = Task$AgdaModeVscode.Impl(Editor);
  var handle = function (error) {
    if (typeof error === "number") {
      return /* [] */0;
    }
    if (error.tag) {
      console.log(Parser$AgdaModeVscode.$$Error.toString(error[0]));
      return /* [] */0;
    }
    console.log(Connection$AgdaModeVscode.$$Error.toString(error[0]));
    return /* [] */0;
  };
  return {
          Task: Task,
          handle: handle
        };
}

exports.Impl = Impl;
/* Task-AgdaModeVscode Not a pure module */