import dayjs from "dayjs";

const getEpochTimestamp = (): number => dayjs().unix();

export const timeUtils = { getEpochTimestamp };
