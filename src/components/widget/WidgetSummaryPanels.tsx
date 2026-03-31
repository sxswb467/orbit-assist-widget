type WidgetSummaryPanelsProps = {
  embedCode: string;
};

const proofPoints = [
  'One operator rail for configuration, naming, and trust controls.',
  'Preview-first layout changes when the AI panel opens or closes.',
  'Draggable overlays without nesting editable content inside buttons.',
  'Privacy-sensitive redaction options and source-aware answer framing.',
];

export function WidgetSummaryPanels({ embedCode }: WidgetSummaryPanelsProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="surface-panel rounded-[14px] p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Embed export</div>
            <div className="mt-1 text-lg font-semibold text-white">Script payload with runtime theming</div>
          </div>
          <div className="rounded-[8px] border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#cbc3ff]">
            Production posture
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-[10px] border border-white/8 bg-[#070911] p-4 text-sm leading-6 text-slate-200">
          <code>{embedCode}</code>
        </pre>
      </div>
      <div className="surface-panel rounded-[14px] p-5 sm:p-6 text-sm leading-6 text-slate-300">
        <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Capability proof</div>
        <ul className="mt-4 space-y-3">
          {proofPoints.map((item) => (
            <li key={item} className="surface-subtle rounded-[10px] px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
