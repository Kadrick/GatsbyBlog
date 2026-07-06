import React, { useEffect, useState, RefObject, useCallback } from "react";
import { Box, Link, Text, VStack } from "@chakra-ui/react";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3 | 4;
};

type PostTocProps = {
  contentRef: RefObject<HTMLElement | null>;
};

const slugify = (text: string): string => {
  const base = text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "");
  return base || "section";
};

const ensureHeadingIds = (root: HTMLElement) => {
  const used = new Set<string>();

  root.querySelectorAll<HTMLElement>("h2, h3, h4").forEach((el) => {
    if (
      (el.tagName === "H3" || el.tagName === "H4") &&
      el.closest("section[id]")
    ) {
      return;
    }

    if (el.id) {
      used.add(el.id);
      return;
    }

    let base = slugify(el.textContent || "section");
    let id = base;
    let suffix = 1;
    while (used.has(id) || document.getElementById(id)) {
      id = `${base}-${suffix++}`;
    }

    el.id = id;
    used.add(id);
  });
};

const collectTocItems = (root: HTMLElement): TocItem[] => {
  ensureHeadingIds(root);

  const toc: TocItem[] = Array.from(
    root.querySelectorAll<HTMLElement>("h2[id], h3[id], h4[id], section[id]")
  )
    .filter((el) => {
      if (
        (el.tagName === "H3" || el.tagName === "H4") &&
        el.closest("section[id]")
      ) {
        return false;
      }
      return true;
    })
    .map((el) => {
      if (el.tagName === "SECTION") {
        const heading = el.querySelector("h2, h3");
        return {
          id: el.id,
          text: heading?.textContent?.trim() || el.id,
          level: 2 as const,
        };
      }
      const level = el.tagName === "H2" ? 2 : el.tagName === "H3" ? 3 : 4;
      return {
        id: el.id,
        text: el.textContent?.trim() || el.id,
        level: level as 2 | 3 | 4,
      };
    });

  const seen = new Set<string>();
  return toc.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

const PostToc: React.FC<PostTocProps> = ({ contentRef }) => {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  const refreshItems = useCallback(() => {
    const root = contentRef.current;
    if (!root) return;
    setItems(collectTocItems(root));
  }, [contentRef]);

  useEffect(() => {
    refreshItems();

    const root = contentRef.current;
    if (!root) return;

    const observer = new MutationObserver(() => refreshItems());
    observer.observe(root, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [contentRef, refreshItems]);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <Box
      as={"nav"}
      aria-label={"목차"}
      position={"sticky"}
      top={"80px"}
      maxH={"calc(100vh - 100px)"}
      overflowY={"auto"}
    >
      <Text
        fontSize={"xs"}
        fontWeight={"semibold"}
        color={"gray.400"}
        letterSpacing={"wider"}
        mb={3}
      >
        목차
      </Text>
      <VStack align={"stretch"} spacing={1}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            fontSize={item.level === 4 ? "xs" : "sm"}
            pl={item.level === 2 ? 0 : item.level === 3 ? 3 : 6}
            py={1}
            lineHeight={"1.5"}
            color={activeId === item.id ? "red.500" : "gray.600"}
            fontWeight={activeId === item.id ? "medium" : "normal"}
            _hover={{ color: "red.500", textDecoration: "none" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {item.text}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default PostToc;
