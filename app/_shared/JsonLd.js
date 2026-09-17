// Server component wrapper around the `<script type="application/ld+json">`
// boilerplate that was being hand-written (with an eslint-disable each time)
// at every call site. Accepts one schema object or an array, and skips
// nullish entries so callers can pass `cond ? schema : null` inline.
export default function JsonLd({ data }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!items.length) return null;

  return items.map((schema, i) => (
    <script
      key={i}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
