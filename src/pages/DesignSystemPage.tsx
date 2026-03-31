import { DesignTokenPanel } from '../components/DesignTokenPanel';
import { PageSection } from '../components/PageSection';
import { SectionHeading } from '../components/SectionHeading';

export function DesignSystemPage() {
  return (
    <PageSection className="py-16 lg:py-20">
      <SectionHeading
        eyebrow="Design System"
        title="Tokens, surface rules, and handoff-ready decisions"
        body="This route now reflects the same architecture as the rest of the app: shared section framing, reusable surfaces, and a token story that backs the UI instead of existing only as a presentation artifact."
      />
      <div className="mt-10">
        <DesignTokenPanel />
      </div>
    </PageSection>
  );
}
