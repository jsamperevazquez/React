import { useState } from "react";

/* eslint-disable react/prop-types */
export function TwitterFollowCard({
  formatUserName,
  userName,
  children,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const imageSrc = `https://unavatar.io/${userName}`;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Avatar twitter"
        />
        <div className="tw-followCard-div">
          <strong>{children}</strong>
          <span className="tw-followCard-span">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollowing">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
