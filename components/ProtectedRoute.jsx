// import { useRouter } from "next/router";
// import { getSession } from "next-auth/react";

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }

// function ProtectedRoute({ children }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return <>{children}</>;
// }

// export default ProtectedRoute;
