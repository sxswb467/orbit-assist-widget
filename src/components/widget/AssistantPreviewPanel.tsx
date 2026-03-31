import { AnimatePresence, motion } from 'framer-motion';
import { chatMessages } from '../../data/mockContent';
import type { WidgetConfig } from '../../lib/types';
import { inputClassName } from './constants';

type AssistantPreviewPanelProps = {
  config: WidgetConfig;
  isOpen: boolean;
  reduceMotion: boolean;
};

export function AssistantPreviewPanel({ config, isOpen, reduceMotion }: AssistantPreviewPanelProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.aside
          id="assistant-preview-panel"
          key="chat-panel"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 32 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.28 }}
          className="surface-subtle rounded-[14px] p-4"
          aria-label="AI chat panel"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Assistant stream</div>
              <div className="mt-1 text-lg font-semibold text-white">Previewed support conversation</div>
            </div>
            <div className="rounded-[8px] border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white" style={{ backgroundColor: `${config.brandColor}22`, color: '#efeaff' }}>
              {config.tone}
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-[10px] border border-brand/20 bg-brand/10 p-4 text-sm leading-6 text-[#efeaff]">
              {config.greeting}
            </div>
            {chatMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-[10px] p-4 text-sm leading-6 ${
                  message.role === 'assistant'
                    ? 'border border-white/8 bg-white/[0.03] text-slate-200'
                    : 'ml-auto max-w-[90%] border border-brand/20 bg-[#1b1733] text-[#e6e0ff]'
                }`}
              >
                <div className="mb-1 text-[11px] uppercase tracking-[0.24em] text-slate-500">{message.role}</div>
                {message.text}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[10px] border border-white/8 bg-[#090b14] p-3">
            <label htmlFor="chat-input" className="sr-only">
              Message input
            </label>
            <div className="flex gap-3">
              <input
                id="chat-input"
                name="chatInput"
                autoComplete="off"
                placeholder="Ask the assistant a question..."
                className={inputClassName}
              />
              <button
                type="button"
                className="focus-ring rounded-[10px] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-200 hover:brightness-110"
                style={{ backgroundColor: config.brandColor }}
              >
                Send
              </button>
            </div>
            {config.showSources && (
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-[8px] border border-white/8 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.08em] text-slate-400">docs/help-center/setup</span>
                <span className="rounded-[8px] border border-white/8 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.08em] text-slate-400">account-policies/security</span>
                <span className="rounded-[8px] border border-white/8 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.08em] text-slate-400">product/changelog/q2</span>
              </div>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
