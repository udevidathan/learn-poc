import * as React from 'react';
var sum = require("mbo-utils");

export const Thing = () => {
  return <div>the snozzberries taste like snozzberries , {sum(1,2)}</div>;
};
