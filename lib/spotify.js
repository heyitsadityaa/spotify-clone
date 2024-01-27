import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  // "user-library-read",
  "user-top-read",

  //
  // "user-read-playback-position",
  // "streaming",
  "app-remote-control",
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  // "playlist-read-private",
  // "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-read-playback-position",
  // "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
  "user-soa-link",
  "user-soa-unlink",
  "user-manage-entitlements",
  "user-manage-partner",
  "user-create-partner",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
