import { ComponentProps } from 'react';

export type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export const ButtonOrLink = ({ href, ...props }: ButtonOrLinkProps) => {
  const isLink = typeof href !== 'undefined';

  return isLink ? <a href={href} {...props} /> : <button {...props} />;
};
