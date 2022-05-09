import { GenericComponentProps } from '../types'

export type SpecimenProps = {
  sample: string
  sample2?: string
  description: string
  title: string
} & GenericComponentProps

export function Specimen(props: SpecimenProps) {
  return (
    <span
      className={`glint-top max-w-6xl flex justify-between w-full rounded-3xl bg-gray-800 overflow-hidden ${props.className}`}
    >
      <div className="p-8">
        <div className="max-w-md">
          <caption>SPECIMEN</caption>
          <h5 className="mt-1 mb-4">{props.title}</h5>
          <p>{props.description}</p>
        </div>
        {/* <pre>{props.sample}</pre> */}
      </div>
      <div
        className=" w-[400px] h-[400px]"
        dangerouslySetInnerHTML={{ __html: props.sample }}
      />
    </span>
  )
}

Specimen.defaultProps = {
  className: '',
}
