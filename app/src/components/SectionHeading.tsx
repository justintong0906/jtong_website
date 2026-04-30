import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string;
  children?: ReactNode;
  color?: string; 
}

function SectionHeading({ title, children, color = "text-white" }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className={`text-5xl font-semibold ${color}`}>
        {title}
      </h2>
      
      {children ? (
        <p className="mt-4 leading-8 text-slate-300">{children}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading;