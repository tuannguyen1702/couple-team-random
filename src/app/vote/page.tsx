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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function Vote() {
  return (
    <>
      <div>
        <div className="md:hidden mb-4">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="account">
                Tham gia{" "}
                <span className="text text-shadow-default text-base text-blue-500 ml-2">
                  23
                </span>
              </TabsTrigger>
              <TabsTrigger value="password">
                Xin vắng{" "}
                <span className="text text-shadow-default text-base text-red-500 ml-2">
                  23
                </span>
              </TabsTrigger>
              <TabsTrigger value="password1">
                Chưa bình chọn{" "}
                <span className="text text-shadow-default text-base text-orange-500 ml-2">
                  23
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <ScrollArea className="vote-content vote-content-mobile">
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester. And then, one
                day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And
                once they started laughing, they couldn't stop. Jokester began
                sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup,
                even in the royal toilet. The king was furious, but he couldn't
                seem to stop Jokester. And then, one day, the people of the
                kingdom discovered that the jokes left by Jokester were so funny
                that they couldn't help but laugh. And once they started
                laughing, they couldn't stop.Jokester began sneaking into the
                castle in the middle of the night and leaving jokes all over the
                place: under the king's pillow, in his soup, even in the royal
                toilet. The king was furious, but he couldn't seem to stop
                Jokester. And then, one day, the people of the kingdom
                discovered that the jokes left by Jokester were so funny that
                they couldn't help but laugh. And once they started laughing,
                they couldn't stop.Jokester began sneaking into the castle in
                the middle of the night and leaving jokes all over the place:
                under the king's pillow, in his soup, even in the royal toilet.
                The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the
                jokes left by Jokester were so funny that they couldn't help but
                laugh. And once they started laughing, they couldn't
                stop.Jokester began sneaking into the castle in the middle of
                the night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester. And then, one
                day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And
                once they started laughing, they couldn't stop.Jokester began
                sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup,
                even in the royal toilet. The king was furious, but he couldn't
                seem to stop Jokester. And then, one day, the people of the
                kingdom discovered that the jokes left by Jokester were so funny
                that they couldn't help but laugh. And once they started
                laughing, they couldn't stop.Jokester began sneaking into the
                castle in the middle of the night and leaving jokes all over the
                place: under the king's pillow, in his soup, even in the royal
                toilet. The king was furious, but he couldn't seem to stop
                Jokester. And then, one day, the people of the kingdom
                discovered that the jokes left by Jokester were so funny that
                they couldn't help but laugh. And once they started laughing,
                they couldn't stop.
              </ScrollArea>
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
            <TabsContent value="password1">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex-1 z-10 py-4 text-left hidden md:block">
          <div className="flex">
            <h2 className="md:text-lg flex-1">
              Chi tiết bình chọn tham gia trận đấu ngày <b>10/12/2023</b> - Sân
              C1
            </h2>
          </div>
          <div className="z-10 pt-4  mt-2 grid text-center md:w-full grid-cols-3 md:text-left space-x-2 md:space-x-4">
            <div>
              <div className="relative rounded-lg px-2 py-1 md:p-4 bg-blue-100 text-left">
                Tham gia{" "}
                <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-blue-500 -bottom-2 right-4 drop-shadow-3xl">
                  23
                </span>
              </div>
              <ScrollArea className="vote-content">
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester. And then, one
                day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And
                once they started laughing, they couldn't stop.
              </ScrollArea>
            </div>
            <div>
              <div className="relative rounded-lg px-2 py-1 md:p-4  bg-red-100 text-left">
                Xin vắng{" "}
                <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-red-500 -bottom-2 right-4 drop-shadow-3xl">
                  13
                </span>
              </div>
              <ScrollArea className="vote-content">
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester. And then, one
                day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And
                once they started laughing, they couldn't stop.
              </ScrollArea>
            </div>
            <div>
              <div className="relative rounded-lg px-2 py-1 md:p-4 bg-orange-100 text-left">
                Chưa bình chọn{" "}
                <span className="absolute text text-shadow-default text-[20px] md:text-[70px] text-orange-500 -bottom-2 right-4 drop-shadow-3xl">
                  10
                </span>
              </div>
              <ScrollArea className="vote-content">
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester. And then, one
                day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And
                once they started laughing, they couldn't stop.
              </ScrollArea>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="w-full">
              Đổi Bình Chọn
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[90%] w-[500px] rounded-lg">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">sssss</div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
