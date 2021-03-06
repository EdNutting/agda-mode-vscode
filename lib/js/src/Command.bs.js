// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_chrome_debugger = require("bs-platform/lib/js/caml_chrome_debugger.js");

function toString(param) {
  switch (param) {
    case /* Simplified */0 :
        return "Simplified";
    case /* Instantiated */1 :
        return "Instantiated";
    case /* Normalised */2 :
        return "Normalised";
    
  }
}

var Normalization = {
  toString: toString
};

var names = [
  /* tuple */[
    /* Load */0,
    "load"
  ],
  /* tuple */[
    /* Quit */1,
    "quit"
  ],
  /* tuple */[
    /* NextGoal */2,
    "next-goal"
  ],
  /* tuple */[
    /* PreviousGoal */3,
    "previous-goal"
  ],
  /* tuple */[
    /* Give */4,
    "give"
  ],
  /* tuple */[
    /* Refine */5,
    "refine"
  ],
  /* tuple */[
    /* Auto */6,
    "auto"
  ],
  /* tuple */[
    /* InferType */Caml_chrome_debugger.variant("InferType", 0, [/* Simplified */0]),
    "infer-type[Simplified]"
  ],
  /* tuple */[
    /* InferType */Caml_chrome_debugger.variant("InferType", 0, [/* Instantiated */1]),
    "infer-type[Instantiated]"
  ],
  /* tuple */[
    /* InferType */Caml_chrome_debugger.variant("InferType", 0, [/* Normalised */2]),
    "infer-type[Normalised]"
  ],
  /* tuple */[
    /* GoalType */Caml_chrome_debugger.variant("GoalType", 1, [/* Simplified */0]),
    "goal-type[Simplified]"
  ],
  /* tuple */[
    /* GoalType */Caml_chrome_debugger.variant("GoalType", 1, [/* Instantiated */1]),
    "goal-type[Instantiated]"
  ],
  /* tuple */[
    /* GoalType */Caml_chrome_debugger.variant("GoalType", 1, [/* Normalised */2]),
    "goal-type[Normalised]"
  ],
  /* tuple */[
    /* Escape */7,
    "escape"
  ]
];

function toString$1(param) {
  if (typeof param === "number") {
    switch (param) {
      case /* Load */0 :
          return "Load";
      case /* Quit */1 :
          return "Quit";
      case /* NextGoal */2 :
          return "Next Goal";
      case /* PreviousGoal */3 :
          return "Previous Goal";
      case /* Give */4 :
          return "Give";
      case /* Refine */5 :
          return "Refine";
      case /* Auto */6 :
          return "Auto";
      case /* Escape */7 :
          return "Escape";
      
    }
  } else {
    switch (param.tag | 0) {
      case /* InferType */0 :
          switch (param[0]) {
            case /* Simplified */0 :
                return "Infer Type (simplified)";
            case /* Instantiated */1 :
                return "Infer Type (instantiated)";
            case /* Normalised */2 :
                return "Infer Type (normalised)";
            
          }
      case /* GoalType */1 :
          switch (param[0]) {
            case /* Simplified */0 :
                return "Goal Type (simplified)";
            case /* Instantiated */1 :
                return "Goal Type (instantiated)";
            case /* Normalised */2 :
                return "Goal Type (normalised)";
            
          }
      case /* ViewEvent */2 :
          return "View Event";
      
    }
  }
}

exports.Normalization = Normalization;
exports.names = names;
exports.toString = toString$1;
/* No side effect */
