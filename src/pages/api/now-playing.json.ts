import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const API_KEY = import.meta.env.LASTFM_API_KEY;
  const USERNAME = import.meta.env.LASTFM_USERNAME;

  if (!API_KEY || !USERNAME) {
    return new Response(
      JSON.stringify({ error: "Missing API Key or Username" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (
      data.error ||
      !data.recenttracks ||
      !data.recenttracks.track ||
      data.recenttracks.track.length === 0
    ) {
      return new Response(
        JSON.stringify({ error: data.message || "No recent tracks found" }),
        {
          status: 200, // Return 200 but with error info to handle it in UI
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const track = data.recenttracks.track[0];

    const nowPlaying = {
      title: track.name,
      artist: track.artist["#text"],
      album: track.album["#text"],
      image: track.image[3]["#text"] || track.image[2]["#text"] || "",
      isPlaying: track["@attr"]?.nowplaying === "true",
      url: track.url,
    };

    return new Response(JSON.stringify(nowPlaying), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=10, stale-while-revalidate=5",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch music data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
