interface TextProps {
  text: string | number;
  color?: string;
  emphasis?: string;
  emphasisColor?: string;
  className?: string;
}

export function Title({
  text,
  className,
} : TextProps) {
  return (
    <h1 className={`${className} uppercase`}>{text}</h1>
  )
}

export function TitleSection({
  text,
  emphasis,
  emphasisColor,
  className,
} : TextProps) {
  return (
    <div className="flex flex-col justify-center items-center leading-[1.5rem]">
      <h2 className={`${className} uppercase`}>{text}</h2>
      <h1 className={`${className} ${emphasisColor} uppercase`}>{emphasis}</h1>
    </div>
  )
}

export function Subtitle({
  text,
  className,
} : TextProps) {
  return (
    <h2 className={`${className} uppercase`}>{text}</h2>
  )
}

export function Paragraph({
  text,
  className
} : TextProps) {
  return (
    <p className={`${className}`}>{text}</p>
  )
}
