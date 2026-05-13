"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";

export function ChatLauncher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname !== "/") return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {!open && (
          <motion.div
            key="chat-launcher"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-40 lg:bottom-8 lg:right-8"
          >
            <DialogPrimitive.Trigger asChild>
              <button
                type="button"
                className="text-mono group flex items-center gap-3 border border-rule bg-bg-elevated px-4 py-3 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <MessageSquare className="h-4 w-4" aria-hidden />
                <span>Talk to Aurixys</span>
              </button>
            </DialogPrimitive.Trigger>
          </motion.div>
        )}
      </AnimatePresence>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 border border-rule bg-bg-elevated p-6 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
        >
          <div className="mb-5 flex items-start justify-between">
            <div>
              <DialogPrimitive.Title className="font-display text-d-sm uppercase tracking-[-0.02em] text-ink">
                Talk to Aurixys
              </DialogPrimitive.Title>
              <p className="text-mono mt-2 text-ink-mute">
                Procurement · Partnership · Press · Research collaborations
              </p>
            </div>
            <DialogPrimitive.Close
              aria-label="Close"
              className="inline-flex h-9 w-9 items-center justify-center border border-rule text-ink hover:border-accent hover:text-accent"
            >
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>

          <PromptInputBox
            placeholder="Describe your mission, site, or partnership interest..."
            onSend={(message) => {
              if (typeof window !== "undefined") {
                console.log("[Aurixys chat] message:", message);
              }
            }}
          />

          <p className="text-mono mt-4 text-ink-mute">
            For verified procurement enquiries: <a className="text-ink hover:text-accent" href="mailto:info@aurixys.com">info@aurixys.com</a>
          </p>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
