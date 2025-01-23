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
const APP_KEYWORDS="Chat app, Messaging app, Video calling app, Voice calling app, Group chat app, MERN stack, Next.js, Real-time communication, AI-powered chat, Customizable chat interface, One-on-one chat, Text messaging, Media sharing, Status updates, AI-driven features, Personalized chat experience, Theme customization, Color customization, Chat settings, User interface customization, Best chat apps for group conversations, Video calling apps for personal use, Customizable messaging apps for Android, AI-powered chat apps for business, Real-time communication apps for teams, MERN stack chat app development, Next.js chat app tutorial, Chat app with AI-driven features, Personalized chat interface for Android, Customizable chat app for iOS, Chat apps like WhatsApp, Best alternatives to Facebook Messenger, Group chat apps for large teams, Video calling apps for long-distance relationships, AI-powered chatbots for customer support, Customizable chat interfaces for businesses, Real-time communication apps for remote teams, MERN stack development for chat apps, Next.js tutorial for chat app development, Chat app with AI-driven features for business, Zephyr Chat App, Daniel (Developer), MERN stack, Next.js, MongoDB, Express.js, React, Node.js, AI-powered chat, Customizable chat interface."
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
