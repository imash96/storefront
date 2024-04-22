import { IconProps } from "types/icon"

const DeliveryIcon: React.FC<IconProps> = ({ width = 16, col, style, ...props }) => {
    return (
        <svg width={width} viewBox="0 0 100 100" {...props} >
            <circle cx={50} cy={50} r={49} fill='none' style={col} strokeWidth={0.7} />
            <path style={style} d='M62.983 69.149c0 1.35.431 1.408 1.8 1.385 1.052-.018 1.539.144 2.631.139 1.846-.01 3.694-.001 5.541-.001-.5 1.042-.067 1.05-1.288 1.621-1.617.756-7.273.457-9.515.457-.63 0-.81-.124-1.233-.111-4.867.145-8.362 1.775-12.806 3.245-1.516.501-2.874.959-4.362 1.455-2.011.67-6.955 2.37-9.44 1.927-2.949-.527-4.962-2.966-6.504-5.268 1.262-.294 2.303-.791 3.226-1.482 1.687-1.263 1.703-2.087 2.313-2.534.648.968 1.033 1.329 2.049 1.968 3.465 2.179 7.08.044 10.884-1.223 2.739-.912 9.926-3.515 12.274-3.515h6.925c.877 0 1.316.285 1.385 1.108-.588 0-2.921-.114-3.353.109-.206.107-.525.44-.525.721zm-9.971-3.047V40.62h8.864v7.755c0 .617.561 1.246 1.108 1.246.426 0 3.871-1.991 4.386-2.124.843-.218 3.381 1.985 4.755 1.985.448 0 .831-.601.831-1.108v-7.755h8.864v27.698H69.216c0-1.738-1.371-3.324-3.047-3.324-3.533 0-9.936-.437-13.157 1.108zm-29.083 5.816L18.73 61.393c-.02-.358.352-1.364.535-1.756 1.436-3.064 3.795-5.199 6.084-7.489.605-.605 1.708-1.841 2.32-2.251l3.637 3.011c1.133 1.009 1.758 1.706 3.014.038l2.767-3.465 1.399 3.448c.519 1.267 1.827 1.042 2.191.144.283-.699 1.042-3.092 1.533-3.452.132.493.825 1.287 1.167 1.74.269.358.401.579.626.897.309.437.494.547 1.114.547.928 0 1.25-1.025 1.563-1.76.301-.708.93-1.801 1.068-2.394.962.08 1.714.554 2.77.554v17.727c-.72.06-2.476.759-3.27 1.023-1.144.38-2.203.685-3.257 1.036-2.421.807-4.792 2.044-6.792 1.427-1.945-.6-2.889-2.836-3.985-4.74l-2.385-4.124c-.297-.505-.448-.994-1.222-.994-.848 0-1.402.797-1.122 1.524l2.816 4.68c.288.457.408.544.278 1.016-.35 1.264-1.66 2.723-2.668 3.3-2.034 1.165-2.987.835-4.982.835zm4.155-24.651 2.875-2.943c1.644.886 3.132 2.228 4.743 3.081-.137.513-2.613 3.541-2.908 3.739l-3.505-2.866c-.351-.297-.977-.703-1.203-1.012zm15.65-1.939c.494.132 2.054 1.767 2.355 2.216-.299.565-.824 1.315-.97 1.938-.403-.269-1.114-1.357-1.489-1.838-.869-1.112-.008-.959.105-2.317zm-3.877 4.154-1.36-2.657c-.21-.288-.361-.341-.579-.667 2.058 0 1.913-.31 3.185-.416-.093 1.117-.982 2.607-1.246 3.739zm24.236-2.908v-5.955h6.648v5.955c-.541-.286-2.781-1.523-3.324-1.523-.544 0-2.783 1.238-3.324 1.523zM26.422 33.972c0-.894.265-1.947 1.023-2.163.481-.137 8.868-.053 9.779-.053 3.685 0 4.567.11 7.097-2.736.527-.593.893-1.435 1.489-1.834.146 1.759.554 2.279.554 5.263 0 1.558-.201 3.398-.536 4.588-1.012 3.594-2.487 5.808-6.216 6.663-4.36 1-8.087-1.834-9.436-5.588-.251-.699-.357-1.417-.893-1.738-.573-.344-2.861-.131-2.861-2.402zm21.328-8.725c.754-.176 3.645-2.469 5.857-.318 3.543 3.444-1.638 4.611-5.165 4.611 0-1.732-.507-2.845-.693-4.293zM33.901 29.54l1.878-2.415c.688-.883 1.325-1.423 2.247-2.047C40.282 23.552 42.405 24 45.673 24l-2.098 2.196c-1.67 2.046-2.099 3.358-5.241 3.345-1.477-.006-2.955 0-4.433 0zm-3.047-7.202c0 .684-.144 1.662 1.108 1.662 1.231 0 1.099-1.236 1.283-2.317.178-1.043.427-1.843.956-2.645 1.519-2.301 4.154-3.254 6.902-2.102.557.233 1.396.68 1.835 1.074 1.098.983 1.797 2.126 2.181 3.774-4.701 0-5.852-.65-9.557 2.215-1.173.907-1.774 1.94-2.668 3.149-1.795 2.429-2.889 2.392-5.086 2.392-.99 0-1.385-.395-1.385-1.385 0-4.526-.61-7.016 1.901-9.455 1.157-1.124 2.933-1.617 4.746-2.04-.66 1.247-2.216 2.789-2.216 5.678zm-6.648 0v6.371c0 1.116.555 1.459.97 2.077-1.466 1.687-1.752 6.091 1.928 7.351.685.235.571.142.852.81.146.347.301.799.497 1.165l1.293 2.031c-.659.983-3.672 3.558-4.103 4.21-.531.802-.199 1.25.225 1.884l-5.572 5.784c-1.716 1.925-3.845 5.012-3.845 7.649 0 .578 4.568 9.405 5.216 10.71.367.739.365 1.137 1.21 1.422.575.194 1.721.333 2.438.333 0 1.236-.139 1.926-.139 3.185 0 2.757-.409 4.155 1.246 4.155 1.493 0 1.108-2.402 1.108-3.878.975.653 2.208 2.684 5.381 3.621 4.351 1.285 13.225-2.389 17.693-3.952l3.377-1.193.027 4.682c.173.861.739.858 1.22.858 1.174 0 1.115-1.297 1.109-2.492-.007-1.2-.001-2.402-.001-3.602 1.691-.141 2.203-.556 5.263-.554h5.817c2.264 0 3.583.161 5.218-.598 1.733-.804 2.398-1.781 2.398-3.834h7.894c.949 0 1.108-.859 1.108-1.8V39.512c0-.506-.382-1.108-.831-1.108H51.628c-1.218 0-.831 2.448-.831 3.739v4.709c-.481-.04-1.381-.284-1.83-.386-1.067-.24-.873-.15-1.529-.825-.636-.654-1.881-1.736-2.319-2.39.258-.384.481-.497.776-.886.761-1.008 1.401-2.394 1.768-3.634.735-2.489.92-4.121.92-6.974 13.074 0 8.443-9.971 3.324-9.971h-4.57c0-1.471-1.038-3.404-1.906-4.465-2.417-2.956-5.284-3.29-9.174-3.29-4.126 0-8.724 1.281-10.805 4.429-.591.893-1.244 2.398-1.244 3.88z' />
            <path d='M55.124 61.119c0 .554.103 1.469.881 1.469h5.288c1.183 0 1.183-2.35 0-2.35h-5.288c-.354 0-.881.527-.881.881zm0-3.526c0 1.861.839 1.469 3.82 1.469 1.183 0 1.183-2.351 0-2.351-1.402 0-3.82-.361-3.82.882z' fill='currentColor' />
        </svg>
    )
}

export default DeliveryIcon;