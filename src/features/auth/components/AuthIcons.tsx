import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <rect height="14" rx="2" stroke="currentColor" strokeWidth="1.7" width="18" x="3" y="5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

export function EyeIcon({ open = true, ...props }: IconProps & { open?: boolean }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      {!open && <path d="m4 4 16 16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />}
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <rect height="10" rx="2" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="10" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <circle cx="12" cy="15" fill="currentColor" r="1.2" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 48 48" {...props}>
      <path d="m5 18 19-9 19 9-19 9L5 18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
      <path d="M12 22v9c4.2 3.7 9.1 5.5 12 5.5S31.8 34.7 36 31v-9M43 19v10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
      <circle cx="43" cy="31" fill="currentColor" r="1.8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 48 48" {...props}>
      <path d="M24 5 39 11v10c0 10.2-6.4 17.8-15 22-8.6-4.2-15-11.8-15-22V11L24 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      <path d="m17.5 24 4.3 4.3L31 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8 12 2.7 2.7L16.5 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function GoogleIcon() {
  return <span aria-hidden="true" className="flex h-[22px] w-[22px] items-center justify-center text-base font-bold leading-none text-[var(--color-feedback-info)]">G</span>;
}
