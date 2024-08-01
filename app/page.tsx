import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience lightning fast responses with our next-gen AI technology",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description:
      "Our Interactive Chat Bot is designed to help you memorize your conversations",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description: "Engage with your PDF files with our interactive PDF Viewer",
    icon: EyeIcon,
  },
  {
    name: "Cloud Storage",
    description: "Restore your files anytime, anywhere with our cloud storage",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Design",
    description: "Access your files on any device with our responsive design",
    icon: MonitorSmartphoneIcon,
  },
];
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white  to-indigo-600 ">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactve PDF Viewer
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform your PDF files into interactive documents
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">
                our next-gen AI technology
              </span>
              <br />
              <br />
              Upload your PDF files and experience lightning fast responses{" "}
              <span className="text-indigo-600">Chat with your PDF files </span>
              turns into an interactive PDF viewer with
              <span className="font-bold"> dynamic PDF viewer</span> enhancing
              your productivity.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
