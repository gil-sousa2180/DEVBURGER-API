import globals from "globals";
import pluginJs from "@eslint/js";



export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];

{

  "env"; {
    "es2021"; true,
    "node"; true
  };
  "extends"; ["airbnb-base", "prettier"],
  "plugins"; ["prettier"],
  "overrides"; [
  ],
  "parserOptions"; {
    "ecmaVersion"; "latest",
    "sourceType"; "module"
  };
  "rules"; {
    "priettier/prettier"; "error"
  }
  
}