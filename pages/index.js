import Head from "next/head";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        "background-image":
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero.jpeg)",
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <h1 className="text-6xl font-bold text-white max-w-lg">
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 className="text-2xl text-white mt-4 mb-8">
          Watch anywhere. Cancel anytime.
        </h3>
        <p className="text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex mt-4">
          <input
            placeholder="Email address"
            className="bg-white p-4 min-w-max"
          />
          <button className="bg-red-500 text-white text-xl flex items-center px-8">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
