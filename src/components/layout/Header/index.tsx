import { Container } from "@/components/common/Container";
import { ImageRatio } from "@/components/common/ImageRatio";
import { MenuCategory } from "@/components/layout/Header/MenuCategory";
import ThemeToggle from "@/components/layout/Header/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { LogOut, Search, Settings, ShoppingCart } from "lucide-react";
import React, { memo } from "react";

const Header = () => {
  return (
    <div>
      <Container className="py-2 flex items-center justify-between">
        <ImageRatio
          src="next.svg"
          className="h-[30px] aspect-[5] bg-background"
          imageProps={{
            className: "dark:invert",
          }}
        />
        <div className="flex items-center rounded-md border-2 border-gray-500 px-2 w-[30%]">
          <Search />
          <Input
            className="focus:outline-none focus-visible:ring-0 border-0 shadow-none h-8"
            placeholder="Tìm kiếm sản phẩm"
          />
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex space-x-1 items-center cursor-pointer">
            <ShoppingCart />
            <p className="font-medium select-none">(0)</p>
          </div>
          <ThemeToggle />
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
      <div className="bg-gray-700 dark:bg-gray-400 py-1 justify-center flex">
        <MenuCategory />
      </div>
    </div>
  );
};

export default memo(Header);
