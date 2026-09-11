import { getDictionary } from "@/lib/dictionary";
import SlideDeck from "@/components/SlideDeck";

export default async function FrenchHomePage() {
  const dict = await getDictionary("fr");
  return <SlideDeck dict={dict} lang="fr" />;
}
