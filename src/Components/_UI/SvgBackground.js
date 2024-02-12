const SvgBackground = (props) => {
    return (
        <div style={{
            position:"absolute",
            top:props.top,
            left:props.left,
            width:"100%",
            zIndex:"-100"
        }}>
            {props.children}
        </div>
    )
}
export default SvgBackground;