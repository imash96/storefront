import { IconProps } from "types/icon"

const FeedbackIcon: React.FC<IconProps> = ({ width = 16, color, style, ...props }) => {
    return (
        <svg width={width} viewBox="0 0 100 100" {...props} >
            <circle cx={50} cy={50} r={49} fill='none' stroke='currentColor' strokeWidth={0.7} />
            <path style={color} d='M29.448 72.538c-2.428 0-6.288.567-6.288-2.3 0-2.908 3.949-2.301 6.288-2.301 1.621 0 2.691.915 2.671 2.277-.022 1.52-1.131 2.324-2.671 2.324zm46.931-42.33c0 3.142-3.084 2.454-6.595 2.454-3.137 0-2.954-4.448-.153-4.448h4.755c.941 0 1.994 1.054 1.994 1.994z' />
            <path style={color} d='M67.512 62.077c-.892-.448-1.006.011-1.722.727l-2.811 2.814c-.515.518-1.12 1.114-1.433 1.335-.407-.229-8.097-8.03-8.657-8.589-.712-.71-1.304-1.371-1.607-2.715a4.665 4.665 0 0 1-.039-1.865c.441-2.397 2.796-2.007 5.379-3.869.351-.253.866.181 1.306.367 2.434 1.027 2.63 4.154 5.168 1.621.603-.601 1.371-1.466 2.53-1.805 1.238-.363 2.491-.319 3.613.215 1.721.819 3.321 3.085 2.432 5.83-.396 1.22-1.135 1.871-1.8 2.535-1.391 1.391-1.859 1.486-1.391 2.433.749.295 1.002-.043 1.373-.421.357-.363.653-.655 1.012-1.016.636-.64 1.304-1.284 1.794-2.263 2.757-5.513-3.434-11.501-8.98-7.877-.95.621-1.371 1.301-2.135 1.913-.724-.427-1.327-1.527-2.75-2.276-.235-.123-.705-.629-.775-.337-.451 1.871-7.165 2.271-7.449 2.773a6.165 6.165 0 0 0-.711 4.074c.382 2.276 1.812 3.388 2.898 4.473l7.331 7.331c.227.227.601.707 1.023.828.628.181 1.106-.057 1.448-.347l4.617-4.603c.346-.342.624-.617.334-1.285z' strokeWidth={0.5} />
            <path fill='none' style={style} strokeWidth={1.5} d='M73.119 75.246h2.708c4.559 0 8.289-3.73 8.289-8.289V49.134c0-4.559-3.73-8.289-8.289-8.289H60.998v2.05c0 4.559-3.731 8.289-8.289 8.289H39.005l-.002.002v15.771c0 4.559 3.73 8.289 8.289 8.289h13.704c.946.961 1.893 1.921 2.896 2.951 1.004 1.03 2.066 2.129 2.789 2.866s1.107 1.111 1.399 1.362c.292.251.492.378.69.479.197.102.391.178.621.232.23.053.494.081.736.081.241-.002.459-.033.651-.079s.358-.105.538-.194c.18-.089.374-.207.53-.32.155-.113.273-.22.392-.351a3.394 3.394 0 0 0 .601-.943 3.533 3.533 0 0 0 .239-.922c.018-.155.028-.317.033-1.177.004-.861.004-2.422.004-3.984z' />
            <path fill='none' style={style} strokeWidth={1.5} d='M26.88 51.184h-2.708c-4.559 0-8.289-3.73-8.289-8.289V25.072c0-4.559 3.73-8.289 8.289-8.289h28.529c4.559 0 8.289 3.73 8.289 8.289v17.823c0 4.559-3.731 8.289-8.289 8.289H39.004c-.946.961-1.893 1.921-2.897 2.951-1.004 1.03-2.066 2.129-2.789 2.866-.723.737-1.107 1.111-1.399 1.362a3.32 3.32 0 0 1-.69.479 2.576 2.576 0 0 1-.621.232c-.23.053-.494.081-.736.081a2.893 2.893 0 0 1-.651-.079 2.407 2.407 0 0 1-.538-.194 3.883 3.883 0 0 1-.53-.32 2.48 2.48 0 0 1-.393-.351 3.482 3.482 0 0 1-.342-.449 3.168 3.168 0 0 1-.414-.959 3.502 3.502 0 0 1-.084-.457c-.018-.155-.028-.317-.033-1.177-.005-.861-.005-2.423-.005-3.985z' />
            <path style={color} d='M34.416 30.441v10.951c0 .161.56.326.797.42 2.067.821 5.016 1.3 7.301 1.3h2.266c1.131 0 2.208-.72 2.745-1.493.529-.763.525-1.068.693-1.909.092-.464.173-.977.25-1.429.112-.664.719-3.934.719-4.442 0-.643-.013-.872-.263-1.499-.153-.385-.287-.563-.515-.869-.363-.487-1-.945-1.617-1.152-.786-.263-1.531-.214-2.555-.214h-2.811l.237-.686c.376-1.145.61-3.213.141-4.391-.409-1.029-1.431-2.055-2.602-2.055-.507 0-.848.052-1.121.6-.685 1.379.326 2.651-1.308 4.693-.551.689-1.244 1.31-1.954 1.823-.115.084-.402.215-.402.353zm-6.714.419v10.574c0 .229.075.433.155.6.056.116.23.353.323.432.286.241.61.436 1.115.436.667 0 2.339.088 2.812-.126.511-.231.965-.725.965-1.343V30.859c0-.653-.693-1.427-1.72-1.427h-1.93c-1.026 0-1.72.757-1.72 1.427z' />
        </svg>
    )
}

export default FeedbackIcon;