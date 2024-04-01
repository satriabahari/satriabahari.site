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
      english: {
        rank: number;
        count: number;
      };
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