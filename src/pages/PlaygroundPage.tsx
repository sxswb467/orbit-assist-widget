import { SectionHeading } from '../components/SectionHeading';
import { WidgetSimulator } from '../components/WidgetSimulator';

export function PlaygroundPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Playground"
        title="A dedicated page for the embeddable AI widget experience"
        body="Use this route as the strongest portfolio proof point. It focuses on the exact interaction patterns often requested in SaaS frontend jobs: settings panels, live previews, motion-led layout changes, draggable objects, and AI chat."
      />
      <div className="mt-10">
        <WidgetSimulator expanded />
      </div>
    </div>
  );
}
