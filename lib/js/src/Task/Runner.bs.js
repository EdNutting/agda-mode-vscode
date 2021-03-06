// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var $$Promise = require("reason-promise/lib/js/src/js/promise.js");

function make(execute) {
  var match = $$Promise.pending(undefined);
  return {
          queue: [],
          status: /* Idle */1,
          execute: execute,
          terminationPromise: match[0],
          terminate: match[1],
          shouldTerminate: false
        };
}

function run(self) {
  var match = self.status;
  if (!match) {
    return $$Promise.resolved(undefined);
  }
  var nextTasks = self.queue.shift();
  return $$Promise.tap(nextTasks !== undefined ? (self.status = /* Busy */0, $$Promise.flatMap($$Promise.tap(Curry._1(self.execute, nextTasks), (function (param) {
                            self.status = /* Idle */1;
                            
                          })), (function (param) {
                        return run(self);
                      }))) : $$Promise.resolved(undefined), (function (param) {
                if (self.shouldTerminate) {
                  return Curry._1(self.terminate, undefined);
                }
                
              }));
}

function push(self, x) {
  self.queue.push(x);
  return run(self);
}

function pushMany(self, xs) {
  self.queue = xs.concat(self.queue);
  return run(self);
}

function interrupt(self, task) {
  return Curry._1(self.execute, task);
}

function terminate(self) {
  var match = self.status;
  if (match) {
    return Curry._1(self.terminate, undefined);
  } else {
    self.shouldTerminate = true;
    return ;
  }
}

exports.make = make;
exports.run = run;
exports.push = push;
exports.pushMany = pushMany;
exports.interrupt = interrupt;
exports.terminate = terminate;
/* Promise Not a pure module */
