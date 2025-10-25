import React from 'react';
import Icons from './icons';
import { twMerge } from 'tailwind-merge';
import { iconTheme } from './theme';
export interface IconProps {
  name: keyof typeof Icons;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', className }) => {
  const IconComponent = Icons[name];

  const allClass = twMerge(iconTheme.base, iconTheme.size[size], className);

  if (!IconComponent) console.log('Icon missing: ', name);

  return <span className={allClass}>{IconComponent ? <IconComponent /> : name}</span>;
};

export default Icon;
