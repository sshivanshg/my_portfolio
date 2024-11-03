import React from "react";
import { Link, Avatar as Picture } from "@radix-ui/themes";

const Avatar = () => {
  return (
    <Link
      href="https://www.instagram.com/shivvansh_1101/profilecard/?igsh=MXZtNjhldGoxbDA4MQ=="
      target="_blank"
    >
      <Picture src="/ShivanshG.jpg" fallback="A" size="6" radius="full" />
    </Link>
  );
};

export default Avatar;
