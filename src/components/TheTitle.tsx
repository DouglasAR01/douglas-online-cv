interface Props {
  title: string,
  lead: string
}

export default function TheTitle({title, lead}: Props) {
  return (
    <section className="m-4 p-4 text-center">
      <h1 className="display-5 mb-0">{title}</h1>
      <p className="lead">{lead}</p>
    </section>
  )
}