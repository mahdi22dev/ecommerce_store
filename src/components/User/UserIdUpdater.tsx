"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { userId, userIsSignedIn } from "@/lib/redux/User/userSlice";

function UserIdUpdater() {
  const user: any = useUser();
  const { isSignedIn } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    const id = user?.user?.id;
    dispatch(userId(id));
    dispatch(userIsSignedIn(isSignedIn));
  }, [user, isSignedIn]);
  return <></>;
}

export default UserIdUpdater;
