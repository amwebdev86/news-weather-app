import Search from "../pages/components/search"
export default function SearchPage({ pageContext: { weather } }) {
  return (
    <Search data={weather} />
    /**
     * Wire this up with the weather object.
     */
  )
}
