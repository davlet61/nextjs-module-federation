import Link from 'next/link';
import { ComponentProps } from 'react';

export type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export const ButtonOrLink = ({ href, ...props }: ButtonOrLinkProps) => {
  const isLink = typeof href !== 'undefined';

  const { ref, children, ...linkProps } = { ...props };

  return isLink ? (
    <Link href={href} {...linkProps}>
      {children}
    </Link>
  ) : (
    <button {...props} />
  );
};
