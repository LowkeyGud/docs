import Link from "next/link";
import { Navbar } from "./navbar";

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed inset-x-0 top-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <Link href="/documents/1" className="text-blue-500 hover:underline">
          Click here to go to document 1
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
