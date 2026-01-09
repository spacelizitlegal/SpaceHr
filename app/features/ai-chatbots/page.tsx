import { Button } from "@/components/ui/Button";
import { Check, ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI HR Chatbot | 24/7 Employee Self-Service Support",
  description:
    "Automate employee support with AI chatbots. Instant answers to policy, leave, payroll, and benefits questions. Reduce HR workload by 70%.",
  keywords: [
    "AI HR chatbot",
    "employee self-service chatbot",
    "HR automation",
    "AI employee support",
    "payroll chatbot",
    "policy automation",
    "leave management chatbot",
    "24/7 HR support",
    "conversational AI HR",
    "automated HR concierge",
  ],
  openGraph: {
    title: "AI HR Chatbot | Space HR",
    description:
      "24/7 automated employee support for policies, leave, payroll, and benefits.",
    images: ["/og-chatbot.png"],
  },
};

export default function AIChatbotsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      {/* HEADER */}
      <div className="pt-24 px-6 container mx-auto">
        <Link
          href="/features"
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Features
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" /> 24/7 HR Concierge
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Instant Answers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Zero HR Bottlenecks.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Relieve your HR team from repetitive queries. Our 24/7 AI
              Concierge answers employee questions about policy, leave balances,
              and payroll instantly.
            </p>
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-lg cursor-pointer"
            >
              See the Chatbot in Action
            </Button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900">
              <Image
                src="/images/features/ai-chatbot.png"
                alt="AI Chatbot Interface"
                width={800}
                height={600}
                className="w-full h-auto opacity-50 grayscale"
              />
              {/* Overlay Chat Interface */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-sm bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="bg-purple-600 p-4 text-white font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>{" "}
                    HR Concierge
                  </div>
                  <div className="p-4 space-y-4 h-[300px] overflow-y-auto bg-gray-50 dark:bg-[#0f172a]">
                    <div className="flex justify-end">
                      <div className="bg-purple-600 text-white rounded-l-xl rounded-tr-xl p-3 text-sm">
                        How many sick days do I have left?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-r-xl rounded-tl-xl p-3 text-sm border border-gray-100 dark:border-gray-700">
                        You have 5 sick days remaining for 2025. Would you like
                        to request leave?
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="h-10 bg-gray-100 dark:bg-gray-800 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
            Always-On Employee Support
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Policy Expert",
                desc: "Trained on your specific employee handbook and documents.",
              },
              {
                title: "Action Oriented",
                desc: "Can execute tasks like 'Book leave for next Friday' directly from the chat.",
              },
              {
                title: "Privacy First",
                desc: "Handles sensitive inquiries with discretion and logs interactions for HR review.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
