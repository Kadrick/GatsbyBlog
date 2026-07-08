import React from "react";
import { Link as GatsbyLink } from "gatsby";

import Tab from "../layout/tab";

import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationPin } from "react-icons/fa6";
import { IconType } from "react-icons";

type ContactLink = {
  icon: IconType;
  label: string;
  href: string;
};

type SkillGroup = {
  category: string;
  items: string[];
};

type EntryLinkItem = {
  label: string;
  slug?: string;
  href?: string;
};

type TimelineEntry = {
  title: string;
  role: string;
  period: string;
  highlights: string[];
  links?: EntryLinkItem[];
};

type WritingGroup = {
  topic: string;
  posts: { title: string; slug: string }[];
};

const CONTACT: ContactLink[] = [
  { icon: FaLocationPin, label: "대한민국", href: "" },
  {
    icon: HiOutlineMail,
    label: "kbk2581553@gmail.com",
    href: "mailto:kbk2581553@gmail.com",
  },
  {
    icon: FiGithub,
    label: "github.com/Kadrick",
    href: "https://github.com/Kadrick",
  },
  {
    icon: BiLogoLinkedinSquare,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/보권-강-7278a6227/",
  },
];

const SUMMARY =
  "Go, Spring Boot, FastAPI 기반 백엔드와 React/TypeScript 프론트엔드를 함께 다룹니다. 비동기 처리, DB 설계, 클라우드 인프라 PoC, 미디어 보안·문서 처리 도메인에서 제품과 프로젝트를 구현했습니다.";

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Go", "Spring Boot", "FastAPI"],
  },
  {
    category: "Frontend",
    items: ["TypeScript", "React"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "MySQL", "RabbitMQ", "AWS", "Docker"],
  },
];

const EXPERIENCE: TimelineEntry[] = [
  {
    title: "NHN Cloud",
    role: "Intern — Cloud Infrastructure PoC / Research",
    period: "2025.07 – 2025.10",
    links: [{ label: "블로그 글 보기", slug: "experience/nhn-cloud" }],
    highlights: [
      "AWX Operator 기반 K8s 파일럿에서 Job 실행, 스케줄링, 로그, RBAC 운영 시나리오 검증",
      "Vault Active-Standby HA의 버전 불일치, failover, rollback 시나리오 재현 및 체크리스트 정리",
      "Rego, opa eval, Bundle, REST API, Decision Log를 실습해 Zero Trust 정책 엔진 PoC 수행",
    ],
  },
  {
    title: "Markany",
    role: "Developer — Industrial Technical Personnel",
    period: "2022.04 – 2024.08",
    links: [{ label: "블로그 글 보기", slug: "experience/markany" }],
    highlights: [
      "상용 미디어 워터마크 CMS 유지보수 및 신규 구축, Vue → React 전환, Go 백엔드 연동",
      "콘텐츠 업로드 → 워터마크 처리 → S3 저장 비동기 파이프라인을 Lambda, Step Functions, API Gateway, RDS로 구성",
      "Widevine DRM 기반 HLS/DASH E2E PoC, AWS Media 서비스, CloudFront, Lambda@Edge, 커스텀 라이선스 서버, MSE/EME 플레이어 연동",
      "PDF 객체/콘텐츠 스트림 파싱으로 텍스트, 좌표, 폰트 정보를 추출하고 CMap/CID, 한글 인코딩 예외 검증",
    ],
  },
];

const PROJECTS: TimelineEntry[] = [
  {
    title: "KNU Online Judge",
    role: "1인 개발 / 운영 중",
    period: "2024.08 – 2026.08",
    links: [{ label: "블로그 글 보기", slug: "projects/judge" }],
    highlights: [
      "교내 강의용 온라인 채점 시스템을 Go API, React SPA, PostgreSQL, RabbitMQ, Docker로 개발·운영",
      "동기 채점 병목을 RabbitMQ Worker pool 비동기 구조로 전환해 API 응답과 채점 실행 분리",
      "레거시 채점 데이터 통합 후 created_at 기준 월별 RANGE 파티셔닝과 운영 절차 구성",
    ],
  },
  {
    title: "AI를 활용한 자동 로그 분석 및 대응",
    role: "1인 개발 / AI-Enabled 해커톤 대상",
    period: "2025.10 – 2025.12",
    links: [{ label: "블로그 글 보기", slug: "projects/logscope" }],
    highlights: [
      "에러 로그 텍스트와 CPU/Memory/Latency 메트릭을 함께 쓰는 멀티모달 장애 분류 모델 PoC 제안·구현",
      "10개 장애 클래스를 정의하고 동일 로그라도 메트릭 문맥에 따라 다른 원인을 추론하는 시나리오 검증",
    ],
  },
  {
    title: "AI 기반 프로젝트 자동 문서화 도구",
    role: "팀장 / 캡스톤",
    period: "2025.03 – 2025.07",
    links: [{ label: "블로그 글 보기", slug: "projects/torch" }],
    highlights: [
      "VS Code Extension, React Webview, FastAPI, Gemini API, RabbitMQ, PostgreSQL 연동",
      "API/Webview 메시지 인터페이스 조율, VSIX 패키징, GitHub Actions, Marketplace 배포 완료",
      "산학협력 경진대회 우수상 수상",
    ],
  },
  {
    title: "화학물질 안전관리 / 감귤 영농일지",
    role: "Back-end Developer — 외주",
    period: "2024.08 – 2024.12",
    links: [
      { label: "화학물질 안전관리", slug: "projects/hadong" },
      { label: "감귤 영농일지", slug: "projects/gyuli" },
    ],
    highlights: [
      "화학물질 안전관리: Spring Boot/MySQL 통합 백엔드, GPS 위험구역 감지, QR 화학물질 조회, 안전 자료·제보·공지 API",
      "감귤 영농일지: 영농 기록·기후·품종별 재배 데이터 관리 API, WeasyPrint 기반 표준 PDF 리포트 생성",
    ],
  },
];

const ACTIVITIES: TimelineEntry[] = [
  {
    title: "경북대학교 알고리즘 동아리",
    role: "회원 · 회장 (2021, 2025)",
    period: "2020.03 – 2026.08",
    highlights: [
      "재학 기간 내내 활동, 2021년·2025년 회장 역임",
      "주간 알고리즘 스터디 운영 및 Goricon 대회 운영",
      "2021 Goricon B/C/E/K 문제 출제",
      "2024 한국 대학생 프로그래밍 경시대회(ICPC) 본선 참가",
    ],
  },
  {
    title: "임베디드소프트웨어공학연구실 (Software Testing LAB)",
    role: "학부연구생 — 이우진 교수",
    period: "2024.01 – 2026.08",
    links: [
      { label: "연구실", href: "https://selab.knu.ac.kr/" },
      {
        label: "지도교수",
        href: "https://cse.knu.ac.kr/bbs/board.php?bo_table=sub2_1&wr_id=21",
      },
      { label: "KNU Online Judge", slug: "projects/judge" },
    ],
    highlights: [
      "교내 프로그래밍 강의 실습을 위한 온라인 채점 시스템 구축 및 운영",
      "기존 채점 인프라를 분석하고 강의 환경에 맞는 차세대 채점 시스템을 설계·구현",
      "이후 KNU Online Judge로 이어져 1인 개발·운영",
    ],
  },
];

const AWARDS = [
  { title: "AI-Enabled 해커톤 대상", year: "2025" },
  { title: "산학협력 경진대회 우수상", year: "2025" },
];

const WRITING: WritingGroup[] = [
  {
    topic: "Database",
    posts: [
      {
        title: "PostgreSQL vs MySQL 동시성 비교",
        slug: "computer/database/postgresql-mysql-concurrency",
      },
      {
        title: "PostgreSQL 테이블 파티셔닝",
        slug: "computer/database/postgresql-partitioning",
      },
    ],
  },
  {
    topic: "Messaging",
    posts: [
      {
        title: "Message Queue — RabbitMQ 선택",
        slug: "computer/messaging/message-queue",
      },
    ],
  },
  {
    topic: "Media & DRM",
    posts: [
      {
        title: "영상 저장과 HLS·DASH 기초",
        slug: "computer/media/video-basics",
      },
      { title: "MSE와 EME", slug: "computer/media/mse-eme" },
      { title: "HLS와 DASH", slug: "computer/media/hls-dash" },
      {
        title: "AWS Widevine DRM 스트리밍 파이프라인",
        slug: "computer/aws/media-streaming-drm",
      },
    ],
  },
  {
    topic: "Infrastructure & Security",
    posts: [
      {
        title: "Ansible과 AWX",
        slug: "computer/infrastructure/ansible-awx",
      },
      {
        title: "Vault와 HA 구성",
        slug: "computer/infrastructure/vault-ha",
      },
      { title: "OPA와 Rego 이해하기", slug: "computer/security/opa-rego" },
    ],
  },
  {
    topic: "Document Processing",
    posts: [
      {
        title: "PDF 파일 구조와 텍스트 추출",
        slug: "computer/common/pdf-format",
      },
    ],
  },
];

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <Box
    w={"100%"}
    p={{ base: 5, md: 6 }}
    borderWidth={"1px"}
    borderColor={"gray.200"}
    borderRadius={"lg"}
    bg={"white"}
  >
    <Heading size={"sm"} mb={4} color={"gray.700"} letterSpacing={"wide"}>
      {title}
    </Heading>
    {children}
  </Box>
);

const EntryLink: React.FC<EntryLinkItem> = ({ label, slug, href }) => {
  const content = (
    <HStack
      spacing={1}
      color={"blue.600"}
      fontSize={"sm"}
      _hover={{ color: "blue.700", textDecoration: "underline" }}
    >
      <Text>{label}</Text>
      <Icon as={FiArrowUpRight} boxSize={3.5} />
    </HStack>
  );

  if (slug) {
    return <GatsbyLink to={`/post/${slug}`}>{content}</GatsbyLink>;
  }

  if (href) {
    return (
      <Link href={href} target={"_blank"} _hover={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return null;
};

const TimelineItem: React.FC<{ entry: TimelineEntry }> = ({ entry }) => (
  <Box>
    <Flex
      direction={{ base: "column", sm: "row" }}
      justify={"space-between"}
      align={{ base: "flex-start", sm: "baseline" }}
      gap={2}
    >
      <Box>
        <Heading size={"sm"}>{entry.title}</Heading>
        <Text fontSize={"sm"} color={"gray.600"} mt={0.5}>
          {entry.role}
        </Text>
      </Box>
      <Text
        fontSize={"sm"}
        color={"gray.500"}
        whiteSpace={"nowrap"}
        flexShrink={0}
      >
        {entry.period}
      </Text>
    </Flex>
    <Stack as={"ul"} spacing={2} mt={3} pl={4} style={{ listStyleType: "disc" }}>
      {entry.highlights.map((item, idx) => (
        <Box as={"li"} key={idx}>
          <Text fontSize={"sm"} lineHeight={"1.7"} color={"gray.700"}>
            {item}
          </Text>
        </Box>
      ))}
    </Stack>
    {entry.links && entry.links.length > 0 && (
      <Wrap spacing={4} mt={3}>
        {entry.links.map((link) => (
          <WrapItem key={`${link.label}-${link.slug ?? link.href}`}>
            <EntryLink {...link} />
          </WrapItem>
        ))}
      </Wrap>
    )}
  </Box>
);

const CV: React.FC = () => {
  return (
    <Tab
      tabName={"강보권"}
      description={"Software Engineer"}
    >
      <Box w={"100%"} py={{ base: 4, md: 6 }}>
        <VStack spacing={8} align={"stretch"}>
          <Box textAlign={{ base: "left", md: "center" }}>
            <Wrap spacing={3} justify={{ base: "flex-start", md: "center" }}>
              {CONTACT.map((item) => (
                <WrapItem key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      _hover={{ textDecoration: "none" }}
                    >
                      <HStack
                        spacing={2}
                        px={3}
                        py={1.5}
                        borderWidth={"1px"}
                        borderColor={"gray.200"}
                        borderRadius={"full"}
                        fontSize={"sm"}
                        color={"gray.700"}
                        _hover={{ bg: "gray.50", borderColor: "gray.300" }}
                        transition={"all 0.15s"}
                      >
                        <Icon as={item.icon} boxSize={4} />
                        <Text>{item.label}</Text>
                      </HStack>
                    </Link>
                  ) : (
                    <HStack
                      spacing={2}
                      px={3}
                      py={1.5}
                      borderWidth={"1px"}
                      borderColor={"gray.200"}
                      borderRadius={"full"}
                      fontSize={"sm"}
                      color={"gray.700"}
                    >
                      <Icon as={item.icon} boxSize={4} />
                      <Text>{item.label}</Text>
                    </HStack>
                  )}
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          <Section title={"Summary"}>
            <Text lineHeight={"1.8"} color={"gray.700"}>
              {SUMMARY}
            </Text>
          </Section>

          <Grid
            templateColumns={{ base: "1fr", lg: "280px 1fr" }}
            gap={6}
            alignItems={"start"}
          >
            {/* Sidebar */}
            <VStack spacing={6} align={"stretch"}>
              <Section title={"Skills"}>
                <VStack spacing={4} align={"stretch"}>
                  {SKILL_GROUPS.map((group) => (
                    <Box key={group.category}>
                      <Text
                        fontSize={"xs"}
                        fontWeight={"semibold"}
                        color={"gray.500"}
                        textTransform={"uppercase"}
                        letterSpacing={"wider"}
                        mb={2}
                      >
                        {group.category}
                      </Text>
                      <Wrap spacing={1.5}>
                        {group.items.map((skill) => (
                          <WrapItem key={skill}>
                            <Badge
                              px={2}
                              py={0.5}
                              borderRadius={"md"}
                              colorScheme={"gray"}
                              fontWeight={"normal"}
                              fontSize={"xs"}
                            >
                              {skill}
                            </Badge>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>
                  ))}
                </VStack>
              </Section>

              <Section title={"Education"}>
                <Heading size={"sm"}>경북대학교</Heading>
                <Text fontSize={"sm"} color={"gray.600"} mt={1}>
                  컴퓨터공학과 학사
                </Text>
                <Text fontSize={"sm"} color={"gray.500"} mt={1}>
                  2020.03 – 2026.08
                </Text>
              </Section>

              <Section title={"Awards"}>
                <VStack spacing={3} align={"stretch"}>
                  {AWARDS.map((award) => (
                    <Flex key={award.title} justify={"space-between"} gap={3}>
                      <Text fontSize={"sm"} color={"gray.700"}>
                        {award.title}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"} flexShrink={0}>
                        {award.year}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              </Section>
            </VStack>

            {/* Main column */}
            <VStack spacing={6} align={"stretch"}>
              <Section title={"Experience"}>
                <VStack spacing={6} align={"stretch"} divider={<Divider />}>
                  {EXPERIENCE.map((entry) => (
                    <TimelineItem key={entry.title} entry={entry} />
                  ))}
                </VStack>
              </Section>

              <Section title={"Projects"}>
                <VStack spacing={6} align={"stretch"} divider={<Divider />}>
                  {PROJECTS.map((entry) => (
                    <TimelineItem key={entry.title} entry={entry} />
                  ))}
                </VStack>
              </Section>

              <Section title={"Activity"}>
                <VStack spacing={6} align={"stretch"} divider={<Divider />}>
                  {ACTIVITIES.map((entry) => (
                    <TimelineItem key={entry.title} entry={entry} />
                  ))}
                </VStack>
              </Section>

              <Section title={"Selected Writing"}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  {WRITING.map((group) => (
                    <Box key={group.topic}>
                      <Text
                        fontSize={"xs"}
                        fontWeight={"semibold"}
                        color={"gray.500"}
                        textTransform={"uppercase"}
                        letterSpacing={"wider"}
                        mb={2}
                      >
                        {group.topic}
                      </Text>
                      <VStack align={"stretch"} spacing={1}>
                        {group.posts.map((post) => (
                          <GatsbyLink key={post.slug} to={`/post/${post.slug}`}>
                            <HStack
                              spacing={1}
                              fontSize={"sm"}
                              color={"blue.600"}
                              _hover={{
                                color: "blue.700",
                                textDecoration: "underline",
                              }}
                            >
                              <Text>{post.title}</Text>
                              <Icon as={FiArrowUpRight} boxSize={3} />
                            </HStack>
                          </GatsbyLink>
                        ))}
                      </VStack>
                    </Box>
                  ))}
                </SimpleGrid>
              </Section>
            </VStack>
          </Grid>
        </VStack>
      </Box>
    </Tab>
  );
};

export default CV;
