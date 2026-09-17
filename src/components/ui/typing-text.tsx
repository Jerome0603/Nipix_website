import { ReactNode, useEffect, useMemo, useState } from "react";

interface TypingTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

type LetterNode = {
  char: string;
  className?: string;
};

function extractLetters(node: ReactNode, parentClass?: string): LetterNode[] {
  if (typeof node === "string") {
    return node.split("").map((char) => ({
      char,
      className: parentClass,
    }));
  }

  if (Array.isArray(node)) {
    return node.flatMap((n) => extractLetters(n, parentClass));
  }

  if (typeof node === "object" && node && "props" in node) {
    const el = node as any;
    const cls = el.props?.className || parentClass;
    return extractLetters(el.props?.children, cls);
  }

  return [];
}

export default function TypingText({
  children,
  delay = 0,
  duration = 2,
  className = "",
}: TypingTextProps) {
  const letters = useMemo(() => extractLetters(children), [children]);
  const [count, setCount] = useState(0);

  const interval = duration / letters.length;

  useEffect(() => {
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        setCount((c) => {
          if (c >= letters.length) {
            clearInterval(timer);
            return c;
          }
          return c + 1;
        });
      }, interval * 2000);

      return () => clearInterval(timer);
    }, delay * 100);

    return () => clearTimeout(start);
  }, [letters.length, duration, delay]);

  return (
    <span className={className}>
      {letters.slice(0, count).map((l, i) => (
        <span key={i} className={l.className}>
          {l.char}
        </span>
      ))}
    </span>
  );
}
