import { DesignTokenPanel } from '../components/DesignTokenPanel';
import { PageSection } from '../components/PageSection';
import { SectionHeading } from '../components/SectionHeading';

export function DesignSystemPage() {
  return (
    <PageSection className="py-16 lg:py-20">
      <SectionHeading
        eyebrow="Design System"
        title="Tokens, surface tiers, and handoff-ready UI rules"
        body="This route documents the darker AI-platform direction behind the redesign: how the shell, support panels, spacing rhythm, and accent behavior work together as one product system."
      />
      <div className="mt-10">
        <DesignTokenPanel />
      </div>
    </PageSection>
  );
}
