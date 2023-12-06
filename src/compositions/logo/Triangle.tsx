
const Triangle = ({ size, opacity, scale }: { size: number, opacity: number, scale: number }) => {

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
            <svg
                width={size}
                height={size}
                style={{ opacity, transform: `scale(${scale}) rotate(90deg)` }}
                viewBox="-100 -100 400 400"
            >
                <defs>
                    <linearGradient id="gradient">
                        <stop stopColor="#42e9f5" stopOpacity={1} offset="0" />
                        <stop stopColor="#4290f5" stopOpacity={1} offset="100%" />
                    </linearGradient>
                </defs>
                <g stroke="url(#gradient)" strokeWidth="100" strokeLinejoin="round">
                    <path
                        fill="url(#gradient)"
                        d="M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Triangle;