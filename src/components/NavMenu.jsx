import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";
  import Image from "next/image";
  import { TypographyH2 } from "@/components/ui/typo/TypographyH2";
  import { TypographyP } from "@/components/ui/typo/TypographyP";
  import { TypographyH1 } from "@/components/ui/typo/TypographyH1";
  import { TypographyBlockquote } from "@/components/ui/typo/TypographyBlockquote";

export default function NavMenu(){
    return (
        <NavigationMenu className='' >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>João Saraiva</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
              <TypographyH1 content='joão saraivaaa'/>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
}