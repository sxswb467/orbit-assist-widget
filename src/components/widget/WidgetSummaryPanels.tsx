type WidgetSummaryPanelsProps = {
  embedCode: string;
};

export function WidgetSummaryPanels({ embedCode }: WidgetSummaryPanelsProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="surface-panel rounded-[28px] p-5">
        <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Embed export</div>
        <pre className="mt-3 overflow-x-auto rounded-3xl bg-slate-950 p-4 text-sm leading-6 text-slate-200">
          <code>{embedCode}</code>
        </pre>
      </div>
      <div className="surface-panel rounded-[28px] p-5 text-sm leading-6 text-slate-300">
        <div className="text-sm uppercase tracking-[0.22em] text-slate-500">What this demonstrates</div>
        <ul className="mt-3 space-y-2 pl-5">
          <li>One operator rail for configuration, naming, and trust controls.</li>
          <li>Preview-first layout changes when the AI panel opens or closes.</li>
          <li>Draggable overlays without nesting editable content inside buttons.</li>
          <li>Privacy-sensitive redaction options and source-aware answer framing.</li>
        </ul>
      </div>
    </div>
  );
}
