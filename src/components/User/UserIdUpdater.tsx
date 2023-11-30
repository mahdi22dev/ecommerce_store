"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { userId } from "@/lib/redux/User/userSlice";

function UserIdUpdater() {
  const user: any = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    const id = user?.user?.id;
    dispatch(userId(id));
  }, [user]);
  return <></>;
}

export default UserIdUpdater;
