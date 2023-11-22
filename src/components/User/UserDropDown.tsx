"use client";

import { UserButton } from "@clerk/clerk-react";

function UserDropDown() {
  return <UserButton afterSignOutUrl='/' />;
}

export default UserDropDown;
