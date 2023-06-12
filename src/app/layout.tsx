import { Roboto } from "next/font/google";
import { Layout } from "@ratatouille/modules/app/react/Layout";
import { AppWrapper } from "@ratatouille/modules/app/react/AppWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Ratatouille",
  description: "Réservation de tables de restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <AppWrapper>
          <Layout>{children}</Layout>
        </AppWrapper>
      </body>
    </html>
  );
}
