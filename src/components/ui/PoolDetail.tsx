import { ReactNode } from "react";

type PoolDetailProps = {
  title: string;
  body: ReactNode;
};

export default function PoolDetail({ title, body }: PoolDetailProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-1">
      <span className="text-sm text-neutral-400">{title}</span>
      <span className="text-xl font-medium">{body}</span>
    </div>
  );
}
