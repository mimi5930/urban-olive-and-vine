import { type Event } from "~/components/Events";
import {
  aldoGroup,
  coltonWarrenGroup,
  conorMoorLiveGroup,
  empireNightGroup,
  jazzSavvyGroup,
  jefferySmithGroup,
  jimAndNancyBiermaGroup,
  pegMeyerGroup,
  sarahVanValkenburgGroup,
  stCroixAcousticGroup,
  tommyBentzGroup,
} from "./musiciansData";

export const urbanSummerEvents: Event[] = [
  {
    id: 1,
    startTime: new Date("Saturday, May 03, 2025, 2:00 PM").toISOString(),
    endTime: new Date("Saturday, May 03, 2025, 4:00:00 pm").toISOString(),
    ...coltonWarrenGroup,
  },
  {
    id: 2,
    startTime: new Date("May 10, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 10, 2025, 4:00:00 pm").toISOString(),
    ...jefferySmithGroup,
  },
  {
    id: 3,
    startTime: new Date("May 17, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 17, 2025, 4:00:00 pm").toISOString(),
    ...sarahVanValkenburgGroup,
  },
  {
    id: 4,
    startTime: new Date("May 24, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 24, 2025, 4:00:00 pm").toISOString(),
    ...aldoGroup,
  },
  {
    id: 5,
    startTime: new Date("May 31, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 31, 2025, 4:00:00 pm").toISOString(),
    ...jimAndNancyBiermaGroup,
  },
  {
    id: 6,
    startTime: new Date("June 7, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 7, 2025, 4:00:00 pm").toISOString(),
    ...jefferySmithGroup,
  },
  {
    id: 7,
    startTime: new Date("June 14, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 14, 2025, 4:00:00 pm").toISOString(),
    ...conorMoorLiveGroup,
  },
  {
    id: 8,
    startTime: new Date("June 21, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 21, 2025, 4:00:00 pm").toISOString(),
    ...stCroixAcousticGroup,
  },
  {
    id: 9,
    startTime: new Date("June 28, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 28, 2025, 4:00:00 pm").toISOString(),
    ...jazzSavvyGroup,
  },
  {
    id: 12,
    startTime: new Date("July 19, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("July 19, 2025, 4:00:00 pm").toISOString(),
    ...stCroixAcousticGroup,
  },
  {
    id: 13,
    startTime: new Date("July 26, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("July 26, 2025, 4:00:00 pm").toISOString(),
    ...empireNightGroup,
  },
  {
    id: 14,
    startTime: new Date("August 2, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 2, 2025, 4:00:00 pm").toISOString(),
    ...pegMeyerGroup,
  },
  {
    id: 15,
    startTime: new Date("August 9, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 9, 2025, 4:00:00 pm").toISOString(),
    ...tommyBentzGroup,
  },
  {
    id: 16,
    startTime: new Date("August 16, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 16, 2025, 4:00:00 pm").toISOString(),
    ...jefferySmithGroup,
  },
  {
    id: 17,
    startTime: new Date("August 23, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 23, 2025, 4:00:00 pm").toISOString(),
    ...stCroixAcousticGroup,
  },
  {
    id: 18,
    startTime: new Date("August 30, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 30, 2025, 4:00:00 pm").toISOString(),
    ...aldoGroup,
  },
];
