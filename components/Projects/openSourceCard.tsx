import cn from "classnames";
import { useEffect, useState } from "react";
import getRepoStats from "./getRepoStat";

interface IPR {
  prLink: string;
  prTitle: string;
  prDescription: string;
}

export interface IOpenSource {
  owner: string;
  repo: string;
  logo: string;
  description: string;
  additionalContext?: string;
  PRs?: IPR[];
}

interface IStats {
  issues: number;
  stargazers: number;
  forks: number;
}

export default function openSourceCard(props: IOpenSource) {
  const segment = `${props.owner}/${props.repo}`;
  const [stats, setStats] = useState<IStats>();

  useEffect(() => {
    (async () => {
      const res = await getRepoStats(props.owner, props.repo);
      setStats(res);
    })();
  });

  return (
    <>
      <div
        className={cn(
          "mx-auto flex w-full max-w-[800px] flex-col gap-3 rounded-sm bg-anotherBlack p-6 shadow-sm"
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-3",
            "xs:grid xs:auto-rows-auto xs:grid-cols-[105px,repeat(2,1fr)]",
            "md:grid-cols-[105px,repeat(5,1fr)] md:grid-rows-2"
          )}
        >
          <div
            className={cn(
              "h-[100px] w-[100px]",
              "col-[1] row-[1/3]",
              "md:col-[1] md:row-[1/-1]"
            )}
          >
            <img className="rounded-sm object-cover" src={props.logo} />
          </div>
          {/* make the title change it's font size depending on the name of the repo */}
          <a
            className={cn(
              "text-md mt-2.5 font-bold text-[#39a3ef]",
              "col-[2/-1] row-[1]",
              "md:col-[2/4] md:row-[1]"
            )}
            href={`https://github.com/${segment}`}
            target="_blank"
          >
            {segment}
          </a>

          <div
            className={cn(
              "flex gap-4",
              "col-[2/-1] row-[2]",
              "md:col-[2/4] md:row-[2]"
            )}
          >
            <Stat img="star" numbers={stats?.stargazers} />
            <Stat img="issues" numbers={stats?.issues} />
            <Stat img="fork" numbers={stats?.forks} />
          </div>

          <div
            className={cn(
              "border-y-[1px] border-[#383636] py-2",
              "col-[1/-1] row-[3]",
              "md:col-[4/-1] md:row-[1/-1] md:border-y-[0px] md:border-l-[1px] md:pl-6"
            )}
          >
            <p className="my-2.5 text-sm sm:text-base">{props.description}</p>
          </div>
        </div>
        <div
          className={cn(
            "xs:grid xs:auto-rows-auto xs:grid-cols-[105px,repeat(2,1fr)]",
            "space-y-4 md:grid-cols-[105px,repeat(5,1fr)] md:grid-rows-1"
          )}
        >
          {props.additionalContext && (
            <p className="col-[1/-1] row-[1] text-sm sm:text-base">
              {props.additionalContext}
            </p>
          )}
          {props.PRs && <PRsList PRs={props.PRs} />}
        </div>
      </div>
    </>
  );
}

const Stat = ({
  img,
  numbers,
}: {
  img: string;
  numbers: number | undefined;
}) => {
  return (
    <div className="flex gap-1">
      <div className="h-5 w-5">
        <img src={`assests/${img}.svg`} />
      </div>
      <span className="leading-6">{numbers}</span>
    </div>
  );
};

const PRsList = ({ PRs }: { PRs: IPR[] }) => (
  <div className="col-[1/-1] row-[2]">
    <span className="text-base sm:text-lg">PRs:</span>
    <ul className="flex flex-col gap-4 text-sm sm:text-base">
      {PRs.map((PR: IPR, index: React.Key) => (
        <li key={index}>
          <a
            href={PR.prLink}
            target="_blank"
            className="font-semibold text-[#306bab]"
          >
            {PR.prTitle}
          </a>
          : {PR.prDescription}
        </li>
      ))}
    </ul>
  </div>
);
