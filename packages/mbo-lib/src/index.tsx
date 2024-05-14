import * as React from 'react';
import {sum} from "mbo-utils";
import {Heading1} from "mf-core-library-v2";
import "../../styles/index.scss";

export const Thing = () => {
  return <div className='highlight'><Heading1>the snozzberries taste like snozzberries , {sum(1,2)}</Heading1></div>;
};
