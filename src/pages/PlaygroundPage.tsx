import { PageSection } from '../components/PageSection';
import { SectionHeading } from '../components/SectionHeading';
import { WidgetSimulator } from '../components/WidgetSimulator';

export function PlaygroundPage() {
  return (
    <PageSection className="py-16 lg:py-20">
      <SectionHeading
        eyebrow="Playground"
        title="The widget experience with room for focused exploration"
        body="This route isolates the strongest interaction story in the repo: operator controls, live preview, source-aware chat, and a host canvas that updates as the configuration changes."
      />
      <div className="mt-10">
        <WidgetSimulator expanded />
      </div>
    </PageSection>
  );
}
