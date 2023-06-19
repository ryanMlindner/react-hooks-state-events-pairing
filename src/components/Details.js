export default function Details({title, views, uploaded}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {`Views: ${views} | Uploaded: ${uploaded}`}
      </div>
    </div>
  )
}