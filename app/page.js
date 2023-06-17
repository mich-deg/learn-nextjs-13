import Link from "next/link";

export const metadata = {
  title: "NextJS",
};

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
