import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Pin, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface RecentNotesProps {
  title: string;
  note: string;
}

const RecentNotes: React.FC<RecentNotesProps> = ({ title, note }) => {
  return (
    <Card className="w-80">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="inline-flex">
            {title}
            <Pin className="w-4 h-4" />
          </CardTitle>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <MoreHorizontal />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-36">
              <div className="flex flex-col items-start">
                <Button variant="ghost" className="w-full">
                  <Edit className="mr-2 w-4 h-4" />
                  Edit
                </Button>

                <Button variant="ghost" className="w-full">
                  <Trash2 className="mr-2 w-4 h-4" />
                  Delete
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">{note}</CardContent>
    </Card>
  );
};

export default RecentNotes;
