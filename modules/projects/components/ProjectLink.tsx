import Link from "next/link";
import React from "react";

import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

type ProjectLinkProps = {
  title?: string;
  link_github?: string;
  link_demo?: string;
};

type LinkComponentProps = {
  url: string;
  text: string;
  icon: JSX.Element;
};

export default function ProjectLink({
  title,
  link_github,
  link_demo,
}: ProjectLinkProps) {
  const LinkComponent = ({ url, text, icon }: LinkComponentProps) => {
    return (
      <Link href={url} target="_blank">
        <div className="flex items-center gap-2 font-medium text-neutral-700">
          <i>{icon}</i>
          <p className="text-sm">{text}</p>
        </div>
      </Link>
    );
  };
  return (
    <div className="flex gap-4">
      {link_github ? (
        <LinkComponent
          url={link_github}
          text="Source Code"
          icon={<GithubIcon size={22} />}
        />
      ) : null}
      {link_github && link_demo ? (
        <span className="text-neutral-400">|</span>
      ) : null}
      {link_demo ? (
        <LinkComponent
          url={link_demo}
          text="Live Demo"
          icon={<LinkIcon size={22} />}
        />
      ) : null}
    </div>
  );
}
