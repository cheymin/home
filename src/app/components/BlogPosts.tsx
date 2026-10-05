"use client";

import { useEffect, useState } from "react";

type Post = { title: string; link: string; date: string; excerpt: string };

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}.${month}.${day}`;
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data: { posts?: Post[] }) => {
        if (alive) setPosts(data.posts ?? []);
      })
      .catch(() => {
        if (alive) setPosts([]);
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section id="blog" className="section">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="left">
          <div>
            <p className="eyebrow">BLOG</p>
            <h2 className="h-title mt-3">
              最近<span className="accent">文章</span>
            </h2>
          </div>
          <a
            href="https://blog.cheymin.top"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--glass"
          >
            访问博客
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {posts === null && <p className="lead">正在加载文章…</p>}

          {posts?.length === 0 && <p className="lead">暂时没能取到文章，稍后再来看看。</p>}

          {posts?.map((post, index) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`card card-link group d${index % 3} flex flex-col`}
              data-reveal="up"
            >
              <p className="mono text-xs tracking-wider text-[color:var(--color-dim)]">
                {formatDate(post.date)}
              </p>
              <h3 className="mt-3 text-lg font-bold leading-snug transition-colors group-hover:text-[color:var(--color-accent)]">
                {post.title}
              </h3>
              {post.excerpt && <p className="lead mt-3 flex-1 text-sm">{post.excerpt}…</p>}
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)]">
                阅读全文
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}