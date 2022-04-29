import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const CoolButton: FC<Props> = ({ children, ...attributes }) => {
  return <>
    <button
      className="border border-slate-700 bg-slate-200 text-slate-700 px-1 mx-1 rounded hover:bg-slate-100 hover:text-slate-900 transition-colors drop-shadow"
      {...attributes}
    >
      {children}
    </button>
  </>
}

export default CoolButton
