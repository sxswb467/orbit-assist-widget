import { DesignTokenPanel } from '../components/DesignTokenPanel';
import { SectionHeading } from '../components/SectionHeading';

export function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Design system"
        title="Design tokens, reusable structure, and handoff notes"
        body="This route highlights the project as a Figma-to-code capable frontend system. The goal is not to mimic a huge component library, but to show clarity, consistency, and the kind of design translation discipline clients want in production work."
      />
      <div className="mt-10">
        <DesignTokenPanel />
      </div>
    </div>
  );
}
