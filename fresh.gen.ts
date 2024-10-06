// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $about from "./routes/about.tsx";
import * as $contact from "./routes/contact.tsx";
import * as $index from "./routes/index.tsx";
import * as $AboutIsland from "./islands/AboutIsland.tsx";
import * as $FooterIsland from "./islands/FooterIsland.tsx";
import * as $HomeIsland from "./islands/HomeIsland.tsx";
import * as $JoinForm from "./islands/JoinForm.tsx";
import * as $NavIsland from "./islands/NavIsland.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/about.tsx": $about,
    "./routes/contact.tsx": $contact,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AboutIsland.tsx": $AboutIsland,
    "./islands/FooterIsland.tsx": $FooterIsland,
    "./islands/HomeIsland.tsx": $HomeIsland,
    "./islands/JoinForm.tsx": $JoinForm,
    "./islands/NavIsland.tsx": $NavIsland,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
