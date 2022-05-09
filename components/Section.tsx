import { GenericComponentProps } from '../types'

export type SectionProps = GenericComponentProps

export function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      className={`flex w-full flex-col items-center justify-center py-12 px-4 md:py-12 md:px-8 lg:py-16 xl:py-24 lg:px-12 ${props.className}`}
    >
      {props.children}
    </section>
  )
}

Section.defaultProps = {
  id: '',
  className: '',
  children: null,
}
