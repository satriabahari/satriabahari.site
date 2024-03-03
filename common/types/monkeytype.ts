export type TypingStats = {
  completedTests: number;
  startedTests: number;
  timeTyping: number;
};

export type PersonalBests = {
  time: {
    [key: number]: PersonalBestsTime[];
  };
  words: {
    [key: number]: PersonalBestsTime[];
  };
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

export type detailsProfile = {
  bio: string;
  keyboard: string;
  socialProfiles: {
    [key: string]: string;
  };
};

export type AllTimeLbs = {
  time: {
    [key: number]: {
      [language: string]: number | null;
    };
  };
};

export type socialProfiles = {
  github: string;
  twitter: string;
  website: string;
};

export type MonkeytypeData = {
  name: string;
  addedAt: number;
  typingStats: TypingStats;
  personalBests: PersonalBests;
  xp: number;
  streak: number;
  maxStreak: number;
  details: detailsProfile;
  allTimeLbs: AllTimeLbs;
  uid: string;
};

export type EntryData = {
  _id: string;
  wpm: number;
  acc: number;
  timestamp: number;
  raw: number;
  consistency: number;
  uid: string;
  name: string;
  rank: number;
  badgeId: null;
};

export type MonkeytypeLeaderboard = {
  count: number;
  rank: number;
  entry: EntryData;
};
