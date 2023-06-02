import React from "react";
import { Plus, Podcast } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateNote: React.FC = () => {
  return (
    <div className="flex justify-center items-center rounded-md border border-dashed h-[450px] shrink-0">
      <div className="flex flex-col justify-center items-center mx-auto text-center max-w-[420px]">
        <Podcast className="w-10 h-10 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">No episodes added</h3>
        <p className="mt-2 mb-4 text-sm text-muted-foreground">
          You have not added any podcasts. Add one below.
        </p>
        <Dialog>
          <DialogTrigger>
            <Button size="sm" className="relative">
              <Plus className="mr-2 w-4 h-4" />
              Add Podcast
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Podcast</DialogTitle>
              <DialogDescription>
                Copy and paste the podcast feed URL to import.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Podcast URL</Label>
                <Input id="url" placeholder="https://example.com/feed.xml" />
              </div>
            </div>
            <DialogFooter>
              <Button>Import Podcast</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CreateNote;
