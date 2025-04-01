import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const APP_NAME = "Zephyr";
const APP_DEFAULT_TITLE = "Zephyr: AI powered chat application";
const APP_TITLE_TEMPLATE = "%s - Zephyr";
const APP_DESCRIPTION = "Zephyr is a feature-rich chat application built using the Next.js and Firebase.  It offers a comprehensive suite of communication tools, including one-on-one and group chat, video calls, voice calls, status updates, and AI chat interface.  Zephyr is highly customizable, allowing users to personalize their experience.";
const APP_KEYWORDS="ai chat, ai assistant, chat application, messaging app, video call, voice call, video chat, voice chat, group chat, group messaging, status updates, realtime chat, instant messaging, communication platform, online chat, next.js, firebase, react, javascript, web application, fullstack, frontend, backend, realtime database, cloud functions, authentication, artificial intelligence chat, ai powered communication, intelligent assistant, daniel, daniel chat app, u22099, developer, chatbot, conversational ai, natural language processing, customizable chat, personalized experience, user friendly chat, modern chat app, secure messaging, private chat, end-to-end encryption, file sharing, screen sharing, push notifications, cross-platform chat, web chat, browser chat, rich communication, whatsapp alternative, slack alternative, discord alternative, telegram alternative, microsoft teams alternative, google chat alternative, personal chat, social messaging, team communication, collaboration tool, remote work chat, community chat, developer chat tool, tech chat app, communication, connect, social, network, digital communication, online messaging, internet chat, web based chat, app, software, platform, tool, utility, nextjs firebase chat example, ai chat interface, realtime communication app, video and voice over ip, group video conferencing, chat application with status, modern messaging platform, firebase powered chat, react chat application, ai for communication, customizable ui chat, feature-rich messenger, zephyr messaging, zephyr chat app, zephyr ai, zephyr communication, zephyr nextjs, zephyr firebase, pwa chat, serverless chat, scalable chat app, interactive chat, multimedia messaging"
const ICONS = [
  { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
  { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
  { url: "/apple-touch-icon.png", type: "image/png" }, // Assuming no specific sizes are defined
  { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  { url: "/favicon.ico", type: "image/x-icon" } // Assuming .ico is for favicon
];


export const metadata = {
  applicationName: APP_NAME,
  icons: ICONS,
  keywords: APP_KEYWORDS,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="ywf36zwCP8gL7diq_4kjlwQRxUoYk67n9km8L_MwY0w" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
