"use client";

import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import { useAuth, useClerk } from "@clerk/nextjs";

const items = [
  {
    title: "History",
    url: "/playlists/history",
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: "Liked video",
    url: "/playlist/liked",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All Playlist",
    url: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
];

const PersonalSection = () => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>you</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // TODO: Change to look at current pathname
                onClick={(e) => {
                  if (!isSignedIn && item.auth) {
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default PersonalSection;
