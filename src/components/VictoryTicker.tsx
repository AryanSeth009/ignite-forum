'use client';

export default function VictoryTicker() {
    const highlights = [
        '🏆 Insight 2026 Overall Champions (Sports & Cultural)',
        "🚀 'Mind to Market' Startup Initiative Active",
        '🏭 Industrial Visits: Lokmat Press & Dinshaw’s Completed',
        '🤝 Leadership Transition: President Joe Francis Takes the Helm',
        "🎨 'Stroke of Art' Victors",
        '⚽ Undefeated Streak: Football & Volleyball',
    ];

    return (
        <div className="bg-red relative z-10 my-8 overflow-hidden border-y-4 border-black py-2">
            <div className="animate-marquee flex whitespace-nowrap">
                {[...highlights, ...highlights].map((text, i) => (
                    <span
                        key={i}
                        className="mx-8 text-xl font-black uppercase tracking-tighter text-white"
                    >
                        {text}
                    </span>
                ))}
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
