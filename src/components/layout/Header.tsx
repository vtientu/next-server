"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { memo } from "react";

const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Container className="py-2">
      {theme === "light" ? (
        <Button className="p-2 h-auto" onClick={() => setTheme("dark")}>
          <Sun />
        </Button>
      ) : (
        <Button className="p-2 h-auto" onClick={() => setTheme("light")}>
          <Moon />
        </Button>
      )}
    </Container>
  );
};

export default memo(Header);
