import SearchForm from "../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Contact with Entrepreneurs
        </h1>
        <p className="sub-heading !max-2-3xl">Submit Ideas, Vote on Pitches, and Get Notices in Vitrual Competitions</p>

        <SearchForm query={query} />
      </section>



    </>
  );
}
