// import xss from 'xss';

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import './style.css';

type TSafeHTMLRenderProps = {
  htmlContent: string;
  isStyleContent?: boolean;
  className?: HTMLAttributes<HTMLDivElement>;
} & Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'dangerouslySetInnerHTML'>;

function SafeHTMLRender({
  htmlContent,
  className,
  isStyleContent = false,
  ...props
}: TSafeHTMLRenderProps) {
  const htmlContentValid = htmlContent || '';
  // const sanitizedHtml = xss(htmlContentValid, { css: true });

  return (
    <div
      {...props}
      className={cn({ 'pmc-content-html': isStyleContent }, className)}
      dangerouslySetInnerHTML={{ __html: htmlContentValid }}
    />
  );
}

export default SafeHTMLRender;
