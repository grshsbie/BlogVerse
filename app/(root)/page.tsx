import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      _id: 1,
      description: "This is a description",
      image: "https://via.placeholder.com/800",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Contact with Entrepreneurs
        </h1>
        <p className="sub-heading !max-2-3xl">Submit Ideas, Vote on Pitches, and Get Notices in Vitrual Competitions</p>

        <SearchForm query={query} />
      </section>


      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search result for "${query}"` : 'All Startups' }
        </p>

        <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>


      </section>



    </>
  );
}
