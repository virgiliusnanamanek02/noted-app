import React from "react";
import {
  Home,
  BellDot,
  StickyNote,
  Trash2,
  Settings,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NotesMenu } from "@/data/notes-menu";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  menus: NotesMenu[];
}

const Sidebar: React.FC<SidebarProps> = ({ className, menus }) => {
  return (
    <div className={cn("pb-12", className)}>
      <div className="py-4 space-y-4">
        <div className="py-2 px-4">
          <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
            NotedApp
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="justify-start w-full"
            >
              <Home className="mr-2 w-4 h-4" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="justify-start w-full">
              <BellDot className="mr-2 w-4 h-4" />
              Notifications
            </Button>
          </div>
        </div>
        <div className="py-2 px-4">
          <Button variant="ghost" size="sm" className="justify-start w-full">
            <FolderOpen className="mr-2 w-4 h-4" />
            Notes
          </Button>
          <ScrollArea className="px-2 h-[300px]">
            <div className="p-2 space-y-1">
              {menus?.map((menu, i) => (
                <Button
                  key={`${menu}-${i}`}
                  variant="ghost"
                  size="sm"
                  className="justify-start w-full font-normal"
                >
                  <StickyNote className="mr-2 w-4 h-4" />
                  {menu}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="py-2 px-4">
        <Button variant="ghost" size="sm" className="justify-start w-full">
          <Trash2 className="mr-2 w-4 h-4" />
          Trash
        </Button>

        <Button variant="ghost" size="sm" className="justify-start w-full">
          <Settings className="mr-2 w-4 h-4" />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
