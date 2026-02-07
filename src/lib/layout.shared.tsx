import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

function Logo() {
  return (
    <span className="text-lg font-normal tracking-tight" style={{ fontFamily: 'var(--font-audiowide)' }}>
      <span className="text-[hsl(var(--fd-primary))]">modl</span>
      <span>.gg</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: 'https://modl.gg',
    },
  };
}
