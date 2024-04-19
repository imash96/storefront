import { IconProps } from "types/icon"

const ReturnIcon: React.FC<IconProps> = ({ width = 16, color, style, ...props }) => {
    return (
        <svg width={width} viewBox="0 0 100 100" {...props} >
            <circle cx={50} cy={50} r={49} fill='none' style={color} strokeWidth={0.7} />
            <path fill='none' style={style} strokeWidth={2} d='M41.673 16.987c.866.159 1.731.318 2.685.453.956.135 2 .246 3.322.319 1.322.073 2.921.107 4.309.052a33.483 33.483 0 0 0 3.586-.348 85.248 85.248 0 0 0 2.768-.458m-18.101-.624c-1.129.194-3.33.74-5.201 1.299-1.87.559-3.409 1.13-5.308 1.889a418.82 418.82 0 0 0-6.434 2.661c-2.277.957-4.573 1.925-5.912 2.555-1.338.63-1.719.922-1.978 1.205a1.828 1.828 0 0 0-.469.894c-.073.336-.083.733.128 1.741.211 1.007.642 2.625 1.119 4.395.477 1.77 1.001 3.694 1.349 4.941.348 1.247.521 1.817.798 2.305.277.488.66.895.972 1.138.312.243.554.323 1.621.265 1.067-.058 2.96-.252 4.261-.394 1.301-.141 2.012-.23 2.452-.284.44-.054.61-.074.691.08.081.155.072.484-.083 5.865-.155 5.38-.458 15.812-.628 21.628-.17 5.817-.208 7.021-.227 7.781-.019.76-.019 1.077.044 1.455.062.378.187.818.317 1.15.13.331.264.554.553.843.29.289.735.643 1.211.902.477.259.984.424 1.669.613.684.189 1.546.401 2.972.697 1.427.296 3.418.675 5.223.947 1.805.273 3.424.44 5.143.562 1.719.122 3.537.199 5.494.194 1.957-.004 4.052-.09 5.289-.149a40.42 40.42 0 0 0 2.766-.208c1.15-.116 3.07-.316 5.067-.653a71.991 71.991 0 0 0 5.35-1.133c1.278-.324 1.761-.5 2.205-.772.444-.273.85-.643 1.163-1.13.313-.486.532-1.089.613-2.562.081-1.473.024-3.817-.146-9.795-.17-5.977-.453-15.588-.599-20.559-.146-4.97-.154-5.3-.073-5.455.081-.155.251-.134 1.179-.029.929.105 2.616.296 3.753.438 1.138.142 1.726.237 2.161.287.435.05.718.055 1.073-.032a2.494 2.494 0 0 0 1.153-.623c.372-.359.69-.901 1.347-2.999s1.652-5.754 2.187-7.814c.534-2.06.607-2.526.599-2.916a2.372 2.372 0 0 0-.219-.969 1.896 1.896 0 0 0-.574-.72c-.292-.235-.717-.487-3.555-1.71-2.839-1.223-8.091-3.417-11.267-4.671-3.176-1.255-4.275-1.57-5.567-1.929a225.81 225.81 0 0 0-3.684-.994c-.907-.233-1.238-.297-1.442-.22-.204.077-.282.295-.614.908s-.92 1.619-1.42 2.319c-.5.7-.913 1.092-1.368 1.443a8.885 8.885 0 0 1-1.471.92 7.676 7.676 0 0 1-1.702.613 10.9 10.9 0 0 1-2.121.283 7.37 7.37 0 0 1-1.966-.207 9.586 9.586 0 0 1-1.988-.712c-.647-.318-1.252-.716-1.719-1.031s-.794-.547-1.237-1.192c-.443-.644-1.003-1.7-1.307-2.308a16.85 16.85 0 0 1-.213-.441v-.001c-.12-.263-.154-.374-.191-.484-.053-.158-.111-.315-1.24-.121z' />
            <path fill='currentColor' d='M48.007 42.163a1.64 1.64 0 1 1-.012 3.28l.012-3.28zm-7.482-.028 7.482.028-.012 3.28-7.482-.028.005-3.28h.007zm-.012 3.28a1.64 1.64 0 1 1 .012-3.28l-.012 3.28zm-2.59-1.651 3.28.023-1.641-1.651h.957l.002 3.28h-.957l-1.641-1.651zm1.641 1.651a1.64 1.64 0 1 1-.002-3.28l.002 3.28zm1.699-10.056-.06 8.427-3.28-.023.06-8.427 3.28.023zm-3.28-.023a1.639 1.639 0 1 1 3.279.023l-3.28-.023zm2.966 9.239a1.641 1.641 0 0 1-2.773-1.753l2.772 1.753zm9.05-8.62v3.28l-.41.006-.398.017-.386.028-.373.039-.362.05-.351.06-.339.07-.33.08-.32.09-.31.1-.302.109-.293.119-.287.129-.28.138-.273.148-.267.158-.262.168-.257.178-.252.188-.249.199-.245.21-.241.221-.238.232-.235.243-.232.255-.23.266-.227.277-.224.289-.222.3-.22.313-.219.324-.216.335-2.772-1.753.251-.389.256-.379.261-.37.268-.362.274-.352.28-.342.287-.333.294-.323.302-.313.31-.302.318-.292.326-.28.335-.269.345-.257.353-.245.362-.232.371-.219.38-.206.389-.192.398-.179.407-.165.416-.151.425-.137.433-.122.442-.108.451-.093.46-.079.468-.064.477-.05.485-.035.495-.022.503-.007zm0 0a1.64 1.64 0 1 1 0 3.28v-3.28zm13.85 11.71-3.234.545-.093-.483-.113-.474-.133-.464-.153-.454-.172-.444-.19-.434-.208-.423-.226-.412-.243-.4-.259-.388-.275-.376-.291-.363-.306-.35-.32-.336-.334-.322-.348-.307-.361-.292-.373-.276-.384-.26-.396-.243-.407-.227-.416-.209-.426-.191-.436-.173-.444-.154-.452-.135-.46-.115-.467-.095-.474-.075-.48-.054-.486-.033-.491-.011v-3.28l.639.015.633.043.626.071.618.098.61.125.6.151.591.176.58.202.568.225.557.25.544.273.53.295.516.317.502.339.486.36.47.38.453.4.436.419.418.438.399.456.379.474.36.491.339.507.317.523.295.538.272.553.249.567.224.58.199.593.174.605.147.617.12.627zm0 0a1.641 1.641 0 0 1-3.235.545l3.234-.545zM51.993 57.837a1.64 1.64 0 1 1 .012-3.28l-.012 3.28zm7.481.028-7.481-.028.012-3.28 7.481.028-.005 3.28h-.007zm.012-3.28a1.64 1.64 0 1 1-.012 3.28l.012-3.28zm2.59 1.651-3.28-.023 1.641 1.651h-.957l-.002-3.28h.957l1.641 1.651zm-1.641-1.651a1.64 1.64 0 1 1 .002 3.28l-.002-3.28zm-1.698 10.056.06-8.427 3.28.023-.06 8.427-3.28-.023zm3.28.023a1.639 1.639 0 1 1-3.279-.023l3.28.023zm-2.967-9.239a1.641 1.641 0 0 1 2.773 1.753l-2.772-1.753zM50 64.045v-3.28l.41-.006.398-.017.386-.028.373-.039.362-.05.351-.06.339-.07.33-.08.32-.09.31-.1.302-.109.293-.119.287-.129.28-.138.273-.148.267-.158.262-.168.257-.178.252-.188.249-.199.245-.21.241-.221.238-.232.235-.243.232-.255.23-.266.227-.277.224-.289.222-.3.22-.313.219-.324.216-.335 2.772 1.753-.251.389-.256.379-.261.37-.268.362-.274.352-.28.342-.287.333-.294.323-.302.313-.31.302-.318.292-.326.28-.335.269-.345.257-.353.245-.362.232-.372.22-.38.206-.389.192-.398.179-.407.165-.416.151-.425.137-.433.122-.442.108-.451.093-.46.079-.468.064-.477.05-.485.035-.495.022-.503.007zm0 0a1.64 1.64 0 1 1 0-3.28v3.28zm-13.849-11.71 3.234-.545.093.483.113.474.133.464.153.454.172.445.19.434.208.423.226.412.243.401.259.388.275.376.291.363.306.35.32.336.334.322.348.307.361.292.373.276.384.26.396.243.407.227.416.209.426.191.436.173.444.154.452.135.46.115.467.095.474.075.48.054.486.033.491.011v3.28l-.639-.015-.633-.043-.626-.071-.618-.098-.61-.125-.6-.151-.591-.176-.58-.202-.568-.225-.557-.25-.544-.273-.53-.295-.516-.317-.502-.339-.486-.36-.47-.38-.453-.4-.436-.419-.418-.438-.399-.456-.379-.474-.36-.491-.339-.507-.317-.523-.295-.538-.272-.553-.248-.567-.224-.58-.199-.594-.174-.606-.147-.617-.12-.627zm0 0a1.641 1.641 0 0 1 3.235-.545l-3.234.545z' />
        </svg>
    )
}

export default ReturnIcon;