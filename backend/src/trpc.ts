import { initTRPC } from "@trpc/server";

const ideas = [
  {
    nick: "cool-idea-nick-1",
    name: "Idea 1",
    description: "Description of idea 1...",
  },
  {
    nick: "awesome-idea-nick-2",
    name: "Idea 2",
    description: "Description of idea 2...",
  },
  {
    nick: "awesome-idea-nick-3",
    name: "Idea 3",
    description: "Description of idea 3...",
  },
  {
    nick: "unique-idea-nick-4",
    name: "Idea 4",
    description: "Description of idea 4...",
  },
  {
    nick: "funny-idea-nick-5",
    name: "Idea 5",
    description: "Description of idea 5...",
  },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
});

export type TrpcRouter = typeof trpcRouter;

