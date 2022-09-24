import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Page: FC<Props> = ({ title, children }: Props) => (
  <>
    <Head>
      <title>Iggarna - {title}</title>
      <meta name="description" content="Iggarna i topp!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);

export default Page;
