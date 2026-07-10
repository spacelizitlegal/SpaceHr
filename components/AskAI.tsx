"use client";

import { useState, useCallback } from "react";
import { ExternalLink } from "lucide-react";
import SpotlightBorderCard from "@/components/SpotlightBorderCard/SpotlightBorderCard";

interface AIProvider {
  id: string;
  name: string;
  url: string;
  icon: string;
  promptUrl: string | null;
  brandColor: string;
}

const providers: AIProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chat.openai.com",
    icon: "/ai-icons/chatgpt-icon.svg",
    promptUrl: "https://chatgpt.com/?q=",
    brandColor: "#10a37f",
  },
  {
    id: "claude",
    name: "Claude",
    url: "https://claude.ai",
    icon: "/ai-icons/claude-ai-icon.svg",
    promptUrl: "https://claude.ai/new?q=",
    brandColor: "#d97757",
  },
  {
    id: "gemini",
    name: "Google Gemini",
    url: "https://gemini.google.com",
    icon: "/ai-icons/google-gemini-icon.svg",
    promptUrl: "https://gemini.google.com/?q=",
    brandColor: "#4285f4",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    icon: "/ai-icons/perplexity-ai-icon.svg",
    promptUrl: "https://www.perplexity.ai/?q=",
    brandColor: "#2080e0",
  },
  {
    id: "grok",
    name: "Grok",
    url: "https://grok.com",
    icon: "/ai-icons/grok-icon.svg",
    promptUrl: "https://grok.com/?q=",
    brandColor: "#1da1f2",
  },
];

const PROMPT = `Analyze Space HR.

Website:
https://spacehr.net

Please provide:
- A summary of what Space HR is.
- Its key HR and HRMS features.
- AI-powered capabilities.
- Primary use cases.
- Target audience.
- Unique advantages.
- Why businesses should choose Space HR.

Present the response in a professional business report format.`;

export function AskAI() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleClick = useCallback(async (provider: AIProvider) => {
    setLoadingId(provider.id);
    await new Promise((resolve) => setTimeout(resolve, 200));
    window.open(provider.promptUrl + encodeURIComponent(PROMPT), "_blank", "noopener,noreferrer");
    setLoadingId(null);
  }, []);

  return (
    <SpotlightBorderCard className="mt-10 p-5 sm:p-6">
      <div className="text-center mb-5">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">
          Ask AI About Space HR
        </h3>
        <p className="text-sm text-gray-500 max-w-lg mx-auto">
          Open your preferred AI assistant with a ready-made Space HR prompt.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {providers.map((provider) => (
          <SpotlightBorderCard
            key={provider.id}
            borderRadius={12}
            glowRadius={15}
            glowIntensity={0.3}
            spotlightSize={250}
            className="p-0"
          >
            <button
              onClick={() => handleClick(provider)}
              disabled={loadingId === provider.id}
              className="group relative flex flex-col items-center gap-2.5 w-full p-3.5 sm:p-4 disabled:opacity-60 disabled:cursor-wait"
            >
              {loadingId === provider.id && (
                <div className="absolute inset-0 rounded-xl bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-10">
                  <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${provider.brandColor}15` }}
              >
                <img
                  src={provider.icon}
                  alt={`${provider.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                  {provider.name}
                </span>
                <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
              </div>
            </button>
          </SpotlightBorderCard>
        ))}
      </div>
    </SpotlightBorderCard>
  );
}
