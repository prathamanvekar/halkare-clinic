import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
  href?: string;
  /** If true, opens in a new tab (sets target and rel defaults). */
  newTab?: boolean;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, newTab = false, target, rel, children, href, ...rest }, ref) => {
    const finalTarget = newTab ? (target ?? "_blank") : target;
    const finalRel = newTab ? (rel ?? "noopener noreferrer") : rel;

    const linkTo = to ?? href ?? "#";

    return (
      <a ref={ref} href={linkTo} target={finalTarget} rel={finalRel} {...rest}>
        {children}
      </a>
    );
  },
);
