import * as React from 'react';
import {sum} from "mbo-utils"
import "../../styles/index.scss";

export const Thing = () => {
  return <div className='highlight'>the snozzberries taste like snozzberries , {sum(1,2)}</div>;
};
