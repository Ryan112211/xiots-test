import HeroPost from "@/components/common/hero/HeroPost";
import PerksPost from "@/components/common/perks/PerksPost";
import Posts from "@/components/posts/layout";

export default function PostsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroPost />
      <Posts>{children}</Posts>
      <PerksPost />
    </>
  );
}
