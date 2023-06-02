import React from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PlusCircle } from "lucide-react";
import { notes } from "@/data/notes";
import RecentNotes from "../recent";
import CreateNote from "../create-note";

const Hero: React.FC = () => {
  return (
    <div className="col-span-3 py-4 lg:col-span-4 lg:border-lg">
      <Tabs defaultValue="music" className="space-y-6 h-full">
        <div className="flex items-center space-between">
          <TabsList>
            <TabsTrigger value="music" className="relative">
              Music
            </TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            <TabsTrigger value="live" disabled>
              Live
            </TabsTrigger>
          </TabsList>
          <div className="mr-4 ml-auto">
            <Button>
              <PlusCircle className="mr-2 w-4 h-4" />
              Add music
            </Button>
          </div>
        </div>
        <TabsContent value="music" className="p-0 border-none outline-none">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Listen Now
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex pb-4 space-x-4">
                {notes.map((note) => (
                  <RecentNotes
                    key={note.id}
                    title={note.title}
                    note={note.note}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Made for You
            </h2>
            <p className="text-sm text-muted-foreground">
              Your personal playlists. Updated daily.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex pb-4 space-x-4">
                {/* {madeForYouAlbums.map((album) => ( */}
                {/*   <AlbumArtwork */}
                {/*     key={album.name} */}
                {/*     album={album} */}
                {/*     className="w-[150px]" */}
                {/*     aspectRatio="square" */}
                {/*     width={150} */}
                {/*     height={150} */}
                {/*   /> */}
                {/* ))} */}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent
          value="podcasts"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                New Episodes
              </h2>
              <p className="text-sm text-muted-foreground">
                Your favorite podcasts. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <CreateNote />
        </TabsContent>
      </Tabs>{" "}
    </div>
  );
};

export default Hero;
