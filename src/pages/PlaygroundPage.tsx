import { PageSection } from '../components/PageSection';
import { SectionHeading } from '../components/SectionHeading';
import { WidgetSimulator } from '../components/WidgetSimulator';

export function PlaygroundPage() {
  return (
    <PageSection className="py-16 lg:py-20">
      <SectionHeading
        eyebrow="Playground"
        title="A focused view of the embedded AI workspace"
        body="This route isolates the strongest interaction story in the project: a premium operator rail, a live product canvas, source-aware assistant output, and an export surface that keeps the demo feeling deployable."
      />
      <div className="mt-10">
        <WidgetSimulator expanded />
      </div>
    </PageSection>
  );
}
