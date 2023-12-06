import { AbsoluteFill } from "remotion";

const AbsoluteCenter = ({children, className, style} : { children: React.ReactNode, className?: string, style?: { [k: string]: string | number } }) => {
    
    return (
        <AbsoluteFill className={"flex items-center justify-center flex-col " + className} style={style}>{children}</AbsoluteFill>
    )
}

export default AbsoluteCenter;