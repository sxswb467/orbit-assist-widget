import { motion, AnimatePresence } from 'framer-motion';
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
          className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4"
          aria-label="AI chat panel"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-slate-500">AI panel</div>
              <div className="mt-1 text-lg font-semibold text-white">Assistant preview</div>
            </div>
            <div className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: config.brandColor }}>
              {config.tone}
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200">
              {config.greeting}
            </div>
            {chatMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl p-4 text-sm leading-6 ${
                  message.role === 'assistant'
                    ? 'border border-white/10 bg-white/5 text-slate-200'
                    : 'ml-auto max-w-[90%] bg-brand/20 text-white'
                }`}
              >
                <div className="mb-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">{message.role}</div>
                {message.text}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900 p-3">
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
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:brightness-110"
                style={{ backgroundColor: config.brandColor }}
              >
                Send
              </button>
            </div>
            {config.showSources && (
              <div className="mt-3 rounded-2xl bg-white/5 px-3 py-2 text-xs leading-5 text-slate-400">
                Sources: docs/help-center/setup · account-policies/security · product/changelog/q2
              </div>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
