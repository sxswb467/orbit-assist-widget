import type { PropsWithChildren } from 'react';

type PageSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
}>;

export function PageSection({ id, className = '', innerClassName = '', children }: PageSectionProps) {
  return (
    <section id={id} className={`page-section ${className}`.trim()}>
      <div className={`section-inner ${innerClassName}`.trim()}>{children}</div>
    </section>
  );
}
