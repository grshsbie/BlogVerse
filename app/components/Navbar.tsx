import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";

// Navbar component that handles navigation and authentication
// This is an async component that fetches the current auth session
const Navbar = async () => {
  // Get the current authentication session
  const session = await auth();

  return (
    // Header container with styling for padding, background and font
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      {/* Navigation wrapper with flex layout */}
      <nav className="flex justify-between items-center">
        {/* Logo/home link */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* Right side navigation items */}
        <div className="flex items-center gap-5 text-black">
          {/* Conditional rendering based on auth state */}
          {session && session?.user ? (
            <>
              {/* Create new startup link - shows text on larger screens, icon on mobile */}
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              {/* Logout form with server action */}
              <form
                action={async () => {
                  "use server";
                  // Sign out and redirect to home
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              {/* Link to user profile */}
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name }</span>
              </Link>
            </>
          ) : (
            // Login form when user is not authenticated
            <form
              action={async () => {
                "use server";
                // Sign in with GitHub
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;