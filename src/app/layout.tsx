// import type { Metadata } from "next";
// import { Theme } from "@radix-ui/themes";
// import "@radix-ui/themes/styles.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import DarkModeProvider from "@/context/DarkModeContext";
// import { Toaster } from "sonner";
// import { Analytics } from "@vercel/analytics/react";
// // import { Meteors } from "@/components/ui/meteors";
// import "./globals.css";
// import FluidCursor from "@/components/ui/fluid-Cursor";

// export const metadata: Metadata = {
//   title: " Shivansh Gupta - Full Stack Web Developer",
//   description:
//     "Shivansh Gupta is a Full Stack Web Developer specializing in building impactful web applications from scratch. Explore my portfolio to see my projects and skills.",
//   keywords:
//     "Shivansh Gupta, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js",
//   authors: [{ name: "Shivansh Gupta" }],
//   openGraph: {
//     title: "Shivansh Gupta - Full Stack Web Developer",
//     description:
//       "Explore the portfolio of Shivansh Gupta, showcasing innovative web applications and development skills.",
//     // url: "https://ShivanshGupta.onrender.com",
//     siteName: "Shivansh Portfolio",
//     // images: [
//     //   {
//     //     url: "https://ucarecdn.com/-/preview/1000x996/",
//     //     width: 800,
//     //     height: 600,
//     //     alt: "Shivansh Gupta Portfolio",
//     //   },
//     // ],
//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <DarkModeProvider>
//         <body className="bg-white dark:bg-black relative overflow-hidden">
//           <Toaster position="bottom-right" />
//           <Theme className="dark:!bg-black">
//             <div className="relative z-10">
//               <Navbar />
//               {children}
//               <Analytics />
//               <Footer />
//             </div>
//             <div className='bg-zinc-100 dark:bg-zinc-900 w-full flex items-center justify-center text-center h-[350px] z-10'>
//       </div>
//       <FluidCursor />

//           </Theme>
//         </body>
//       </DarkModeProvider>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import FluidCursor from "@/components/ui/fluid-cursor"; // Import FluidCursor here

import "./globals.css";

export const metadata: Metadata = {
  title: "Shivansh Gupta - Full Stack Web Developer",
  description:
    "Shivansh Gupta is a Full Stack Web Developer specializing in building impactful web applications from scratch. Explore my portfolio to see my projects and skills.",
  keywords:
    "Shivansh Gupta, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js",
  authors: [{ name: "Shivansh Gupta" }],
  openGraph: {
    title: "Shivansh Gupta - Full Stack Web Developer",
    description:
      "Explore the portfolio of Shivansh Gupta, showcasing innovative web applications and development skills.",
    siteName: "Shivansh Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className="bg-white dark:bg-black relative overflow-hidden">
          <Toaster position="bottom-right" />
          <Theme className="dark:!bg-black">
            {/* Main content */}
            <div className="relative z-10">
              <Navbar />
              {children}
              <Analytics />
              <Footer />
            </div>

            {/* FluidCursor applied globally */}
            <div className="fixed inset-0 z-50 pointer-events-none">
              <FluidCursor />
            </div>
          </Theme>
        </body>
      </DarkModeProvider>
    </html>
  );
}

