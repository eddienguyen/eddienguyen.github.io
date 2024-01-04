// /**
//  * fix: "Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?"
//  * https://github.com/vercel/next.js/issues/7915
//  */
import Link from "next/link";
import { forwardRef } from "react";

const CustomComponent = forwardRef((props, ref) => (
  <a className={`${props.className} app-link`} href={props.link} ref={ref} {...props}>
    <style jsx>{`
      .app-link {
        display: ${props.display};
      }
    `}</style>
    {props.children}
  </a>
));
CustomComponent.displayName= "AppLinkCustomizedComponent";

const AppLink = ({
  children,
  directLink = false,
  prefetch = false,
  href,
  display = "inline-block",
  ref,
  target = "",
  ...props
}) => {
  const _class = props.className + " app-link";
  const useA = (
    <CustomComponent
      link={href}
      display={display}
      target={target}
      ref={ref}
      {...props}
      className={_class}
    >
      {children}
    </CustomComponent>
  );

  const useLink = (
    <Link href={href} passHref legacyBehavior prefetch={prefetch} {...props}>
      <CustomComponent
        display={display}
        ref={ref}
        target={target}
        className={_class}
        // className={props.className}
      >
        {children}
      </CustomComponent>
    </Link>
  );

  return directLink ? useA : useLink;
};

export default AppLink;
