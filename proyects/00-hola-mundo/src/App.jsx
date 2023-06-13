import "./index.css";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const formatUserName = (userName) => `@${userName}`;

const users = [
  {
    userName: "BillGates",
    name: "Bill Gates",
    isFollowing: true,
  },
  {
    userName: "Nasa",
    name: "National Aeronautics",
    isFollowing: true,
  },
  {
    userName: "jgvanrossum",
    name: "Guido Van Rossum",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            formatUserName={formatUserName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
