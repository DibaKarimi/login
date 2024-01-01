import { getSession } from "next-auth/react";

function Dashboard() {
  return <div>dashboard</div>;
}

export default Dashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return { props: { session } };
}
