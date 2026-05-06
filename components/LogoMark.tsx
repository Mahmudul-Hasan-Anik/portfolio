import type { SVGProps } from 'react';

export function LogoMark(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
            <rect x="1.5" y="1.5" width="29" height="29" rx="9.5" fill="url(#logoGradient)" />
            <path
                d="M9 19L13 10L15 14L17 10L21 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="17" cy="10" r="1.5" fill="white" opacity="0.95" />
        </svg>
    );
}
