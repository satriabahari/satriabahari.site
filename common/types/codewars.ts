type RankOverall = {
  rank: number;
  name: string;
  color: string;
  score: number;
};

type RankLanguage = {
  rank: number;
  name: string;
  color: string;
  score: number;
};

type CodewarsRank = {
  overall: RankOverall;
  languages: {
    [key: string]: RankLanguage;
  };
};

export type CodeChallenges = {
  totalAuthored: number;
  totalCompleted: number;
};

export type CodewarsData = {
  id: string;
  username: string; 
  name: string;
  honor: number;
  clan: string;
  leaderboardPosition: number;
  skills: string[];
  ranks: CodewarsRank;
  codeChallenges: CodeChallenges;
};
