import React from 'react';
import {Text} from 'uinix-ui';

import {Tooltip} from './ui/index.js';
import {Stats} from './stats.js';

export const ItemTooltip = ({children, description}) => {
  const tooltip = description.map((section, i) => (
    <Text key={i} as="div">
      {section.map(({color, stats, text}, j) => (
        <Text key={j} as="div" color={color}>
          {stats ? <Stats stats={stats} template={text} /> : text}
        </Text>
      ))}
      {i < description.length - 1 && <br />}
    </Text>
  ));

  return <Tooltip tooltip={tooltip}>{children}</Tooltip>;
};
