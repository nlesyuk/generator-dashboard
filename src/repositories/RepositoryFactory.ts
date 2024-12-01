import WifiRepository from "./WifiRepository";

// TODO: avoid any type
const repositories: Record<string, any> = {
  wifi: WifiRepository,
};

export const RepositoryFactory = {
  get: (name: string) => repositories[name]
};

export default RepositoryFactory;
