import { GenericComponentProps } from "../types";
import classnames from 'classnames'

export type ListCellProps = GenericComponentProps & {
    key?: string
    isSelected: boolean
    onClick: ()=>void
}

export function ListCell(props:ListCellProps) {
    const selectedClasses = classnames({
        'bg-[#ea580c] text-black hover-[#ea580c]': props.isSelected,
        'bg-none text-white/75 hover:bg-white/10': !props.isSelected,
    })
    return (
        <li className="py-0.5 px-4 flex w-full" key={props.key}>
            <button className={`font-monospace flex w-full py-1.5 px-4 rounded-xl font-semibold text-white transition-colors duration-200 ${selectedClasses} `} onClick={() => props.onClick()}>
                {props.children}
            </button>
        </li>
    )
}

ListCell.defaultProps = {
    className: '',
    children: null,
  }
  