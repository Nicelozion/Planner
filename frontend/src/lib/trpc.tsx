import type { TrpcRouter } from "@planer/backend/src/trpc";
import { createTRPCReact } from '@trpc/react-query';

const trpc = createTRPCReact<TrpcRouter>()

