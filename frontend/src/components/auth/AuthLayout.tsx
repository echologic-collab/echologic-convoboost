import { Link } from '@tanstack/react-router';
import { MessageSquare } from 'lucide-react';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
}

export const AuthLayout = ({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkTo,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 p-4 relative overflow-hidden">

      {/* --- BRAND WATERMARK --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
        <span className="text-[18vw] font-black text-gray-200/40 dark:text-zinc-900/10 leading-none uppercase tracking-tighter">
          ConvoBoost
        </span>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          {/* Logo Branding */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black text-white dark:bg-white dark:text-black shadow-2xl">
              <MessageSquare className="w-8 h-8 fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase dark:text-white">
              ConvoBoost
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {subtitle}
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 p-8">
          {children}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-500">
          {footerText}{' '}
          <Link
            to={footerLinkTo}
            className="font-bold text-black dark:text-white hover:underline transition-all"
          >
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
};