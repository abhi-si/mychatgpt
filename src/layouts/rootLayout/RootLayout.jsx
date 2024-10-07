import React from "react";
import "./rootLayout.css"
import { Link, Outlet } from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn,  UserButton } from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className="rootLayout">
      <header>
        <Link to="/" className="Logo">
          {/* note:If the image is stored in the public folder, you should be able to access it using an absolute path
          By using /logo.png, you're specifying the absolute path from the root of the public directory. This will ensure that the image is correctly loaded regardless of the current route. */}
          <img src="/logo.png" alt="" />
          <span>ABHI AI</span>
        </Link>
          <div className="user">
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </header>
      <main>
        <React.Fragment>
          <Outlet />
        </React.Fragment>
      </main>
    </div>
    </ClerkProvider>
  );
};

export default RootLayout
