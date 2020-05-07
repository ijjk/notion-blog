export default ({
  type,
  className,
  PrimaryClassName,
  container,
  style,
  title,
  miniContent,
  children,
}) => {
  return (
    <section className={'section_' + type + ' ' + className} style={style}>
      <div
        className={
          PrimaryClassName !== undefined ? PrimaryClassName : 'container'
        }
        style={{ maxWidth: container }}
      >
        {miniContent !== undefined && miniContent}
        <div className={'section_' + type + '_content'}>
          {title}
          {children}
        </div>
      </div>
    </section>
  )
}
