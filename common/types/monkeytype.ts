export type TypingStats = {
  completedTests: number;
  startedTests: number;
  timeTyping: number;
};

export type PersonalBests = {
  time: {
    [key: string]: PersonalBestsTime[];
  };
  words: {};
};

export type PersonalBestsTime = {
  acc: number;
  consistency: number;
  difficulty: string;
  lazyMode: boolean;
  language: string;
  punctuation: boolean;
  raw: number;
  wpm: number;
  timestamp: number;
};

export type AllTimeLbs = {
  time: {
    [key: string]: number | null;
  };
};

export type MonkeytypeData = {
  name: string;
  addedAt: number;
  typingStats: TypingStats;
  personalBests: PersonalBestsTime;
  xp: number;
  streak: number;
  maxStreak: number;
  allTimeLbs: AllTimeLbs;
  uid: string;
};
