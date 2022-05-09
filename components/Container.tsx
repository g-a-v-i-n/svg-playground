import { GenericComponentProps } from '../types'

export function Container(props: GenericComponentProps) {
  return (
    <main
      className={`relative w-full flex-col items-center justify-center overflow-hidden ${props.className}`}
    >
      {props.children}
    </main>
  )
}

Container.defaultProps = {
  className: '',
  children: null,
}
