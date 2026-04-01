import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowsByMaky — AI Automation Agency",
  description: "Smart automations for businesses ready to scale without limits. AI-powered workflows, data pipelines and intelligent agents. Built from anywhere. Delivered worldwide.",
  keywords: ["AI automation", "workflow automation", "n8n", "Python", "data pipelines", "chatbots", "AI agents"],
  openGraph: {
    title: "FlowsByMaky — AI Automation Agency",
    description: "Smart automations for businesses ready to scale without limits.",
    url: "https://flowsbymaky.vercel.app",
    siteName: "FlowsByMaky",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
