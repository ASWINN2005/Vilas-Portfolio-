export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"SF Pro Display"',
                    '"SF Pro Text"',
                    '"SF Pro"',
                    'Inter',
                    'system-ui',
                    'sans-serif'
                ],
                mono: [
                    '"SF Mono"',
                    'JetBrains Mono',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'monospace'
                ],
            },
            colors: {
                apple: {
                    black: '#000000',
                    dark: '#0a0a0c',
                    card: '#161617',
                    elevated: '#1c1c1e',
                    surface: '#242426',
                    white: '#f5f5f7',
                    gray: '#86868b',
                    grayLight: '#a1a1a6',
                    grayMuted: '#6e6e73',
                    blue: '#0071e3',
                    blueHover: '#0077ed',
                    blueLight: '#2997ff',
                    purple: '#bf5af2',
                    green: '#30d158',
                    teal: '#64d2ff',
                },
                background: "#000000",
                primary: "#0071e3",
                secondary: "#86868b",
            },
            boxShadow: {
                'apple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
                'apple-glow': '0 0 50px -10px rgba(0, 113, 227, 0.3)',
                'apple-pill': '0 8px 24px -4px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            },
            letterSpacing: {
                'apple-tight': '-0.035em',
                'apple-headline': '-0.04em',
                'apple-subhead': '-0.015em',
            },
            transitionTimingFunction: {
                'apple-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.06)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                }
            },
            animation: {
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s infinite linear',
            }
        },
    },
    plugins: [],
}
