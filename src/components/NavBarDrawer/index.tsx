import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import clsx from "clsx";
import Link from "next/link";
import { NextRouter } from "next/router";
import routing from "../../utils/routing";
import { signOut, useSession } from "next-auth/react";

export const NavBarDrawer = ({
  isOpen,
  onClose,
  router,
}: NavBarDrawerProps) => {
  const buttons = routing.filter((route) => route.isButton);
  const { status } = useSession();
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />

        <DrawerBody className="h-full w-full flex flex-col justify-center items-center">
          {routing.map((route) => {
            if (route.isButton) return null;
            if (status == "unauthenticated" && route.name == "Déconnexion")
              return (
                <li key={route.name}>
                  <Link
                    className={clsx(
                      "text-gray-500 transition hover:text-primary text-base",
                      "font-sans",
                      router.pathname == route.path && "text-primary",
                      route.isButton &&
                        "bg-primary text-white px-5 py-3 rounded-lg hover:text-white hover:bg-blue-800"
                    )}
                    href={route.path}
                    onClick={() => signOut()}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            return (
              <div key={route.path} className="p-4">
                <Link
                  className={clsx(
                    "text-gray-500 transition hover:text-primary text-base",
                    "font-sans",
                    router.pathname == route.path && "text-primary"
                  )}
                  href={route.path}
                >
                  {route.name}
                </Link>
              </div>
            );
          })}
        </DrawerBody>
        <DrawerFooter w="100%">
          <>
            {buttons.map((route) => {
              return (
                <button
                  key={route.name}
                  className="font-body font-bold px-5 py-3 w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm  text-center  dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800"
                >
                  <Link href={route.path}>{route.name}</Link>
                </button>
              );
            })}
          </>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export interface NavBarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  router: NextRouter;
}
