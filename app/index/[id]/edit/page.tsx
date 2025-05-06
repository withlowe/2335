import EditWrapper from "./edit-wrapper"

export default function EditIndexEntryPage({ params }: { params: { id: string } }) {
  return <EditWrapper id={params.id} />
}
