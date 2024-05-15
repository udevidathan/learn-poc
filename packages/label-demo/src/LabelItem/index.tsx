import classNames from "classnames";
import React from "react";

import { Label } from "../Label";

import styles from "./_label_Item.module.scss";

export interface LabelItemProps {
  name: React.ReactElement<typeof Label>;
  value: React.ReactElement<typeof Label>;
  amount?: React.ReactElement<typeof Label>;
  block?: boolean;
  customClassName?: string;
  testId?: string;
}

export const LabelItem: React.FC<LabelItemProps> = ({
  name,
  value,
  amount,
  block = false,
  customClassName,
  testId,
}) => {
  const labelItemsClass = classNames(
    styles.label_item,
    block && styles.vertical,
    customClassName
  );

  return (
    <div className={labelItemsClass} data-testid={testId}>
      {name}

      {amount ? (
        <div>
          {amount} {value}
        </div>
      ) : (
        value
      )}
    </div>
  );
};
