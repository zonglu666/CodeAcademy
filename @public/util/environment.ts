export type Environment = "prod" | "staging" | "dev";

export const parseEnvironment = (environment: string): Environment => {
  switch (environment) {
    case "prod":
      return "prod";
    case "staging":
      return "staging";
    default:
      return "dev";
  }
};
