import {
  Html,
  Head,
  Body,
  Link,
  Script,
} from "@wroud/vite-plugin-ssg/react/components";
import indexStyles from "./index.css?url";
import App from "./App.jsx";

export default function Index() {
  const themeScript = `
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    }
  `;

  const tailwindConfig = `
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#6366f1'
          }
        }
      }
    }
  `;

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <Link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script forceNonce>{themeScript}</Script>
        <Script src="https://cdn.tailwindcss.com" data-mode="watch" />
        <Script forceNonce>{tailwindConfig}</Script>
        <Link rel="stylesheet" href={indexStyles} />
        <title>FlowGlow Analytics</title>
      </Head>
      <Body className="font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <App />
      </Body>
    </Html>
  );
}
