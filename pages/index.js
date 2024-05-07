import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home(results) {
  console.log(results)

  return (
    <p>hallo dunia</p>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        countries {
          name
          native
          capital
        }
      }
    `,
  });

  return {
    props: {
      data: data.countries,
    },
  };
}
