"use client";

import { Container } from "@/components/common/Container";
import { ImageRatio } from "@/components/common/ImageRatio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { memo } from "react";

const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Container className="py-2">
      <ImageRatio src="123" />
      <div className="flex space-x-3 items-center">
        {theme === "light" ? (
          <Button className="p-2 h-auto" onClick={() => setTheme("dark")}>
            <Sun />
          </Button>
        ) : (
          <Button className="p-2 h-auto" onClick={() => setTheme("light")}>
            <Moon />
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:outline-none select-none">
            <Avatar className="cursor-pointer">
              <AvatarImage />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Văn Tiến Tú</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="focus:font-semibold">
              Cài đặt
              <DropdownMenuShortcut>
                <Settings width={20} height={20} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 focus:font-semibold focus:text-red-600">
              Đăng xuất
              <DropdownMenuShortcut>
                <LogOut width={20} height={20} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Container>
  );
};

export default memo(Header);
