export async function getServerSideProps() {
  const res = await fetch(`${process.env.POSTGRES_URL}/api/projects`)
  const projects = await res.json()
  return { props: { projects } }
}
export default function LandingImage({ projects }: any) {
  return <div>{projects}</div>
}
