import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import { NavigationProgress } from '@mantine/nprogress';
import { ModalsProvider } from '@mantine/modals';

// import { getUser } from "./session.server";
import appStylesheetUrl from "./styles/app.css";
import { NotificationsProvider } from "@mantine/notifications";


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: appStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Cine Chill",
  viewport: "width=device-width,initial-scale=1",
});

createEmotionCache({ key: 'cine-chill' });

// export async function loader({ request }: LoaderArgs) {
//   return json({
//     user: await getUser(request),
//   });
// }

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NavigationProgress />
        <ModalsProvider>
          <NotificationsProvider>
          <html lang="en" className="h-full">
            <head>
              <StylesPlaceholder />
              <Meta />
              <Links />
            </head>
            <body className="h-full font-sans antialiased text-white bg-black">
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </body>
          </html>
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}
