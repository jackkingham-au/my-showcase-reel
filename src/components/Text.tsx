const Text = ({className, children, style} : { className?: string, children: string, style?: any }) => {

  return (
    <p style={style} className={"text-8xl text-white font-semibold" + className}>{children}</p>
  )
}

export default Text;