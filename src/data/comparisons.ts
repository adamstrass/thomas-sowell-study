export interface Disagreement { sowell: string; other: string; }
export interface BookLink { title: string; href: string; }

export interface Comparison {
  id: string;
  title: string;
  subtitle: string;
  otherName: string;
  sowellSummary: string;
  otherSummary: string;
  sowellArguments: string[];
  otherArguments: string[];
  agreements: string[];
  disagreements: Disagreement[];
  relatedBooks?: BookLink[];
}

export const comparisons: Comparison[] = [
  {
    id: "sowell-vs-friedman",
    title: "Sowell vs. Milton Friedman",
    subtitle: "Two Chicago School economists who agree on markets but diverge on emphasis, method, and policy details.",
    otherName: "Milton Friedman",
    sowellSummary: "Sowell approaches economics empirically and historically. He emphasizes cultural and institutional factors in explaining economic outcomes, and is deeply skeptical that even well-designed policy can overcome the knowledge problem. His focus is on tracing unintended consequences through historical case studies and cross-cultural comparisons.",
    otherSummary: "Friedman approaches economics through rigorous quantitative analysis and monetarist theory. He trusts market mechanisms but is more willing to propose specific policy reforms — school vouchers, negative income tax, floating exchange rates — believing that well-designed market-based policies can replace failed government programs.",
    sowellArguments: [
      "Cultural and institutional factors matter as much as market mechanisms — economic theory alone cannot explain why some societies prosper and others don't.",
      "Historical evidence and cross-cultural comparison are more reliable guides than econometric models, which can be manipulated to support predetermined conclusions.",
      "The knowledge problem is so severe that even well-intentioned, market-oriented reforms can produce unintended consequences. Caution is warranted.",
      "Intellectuals and policy elites are part of the problem — their incentive structure rewards clever ideas over practical results.",
      "Race and culture require their own analysis beyond pure economics. Market forces interact with cultural patterns in complex ways.",
    ],
    otherArguments: [
      "Monetary policy is the primary driver of macroeconomic outcomes. The Great Depression was caused by Federal Reserve errors, not inherent market failure.",
      "Market-based policy reforms — vouchers, negative income tax, abolishing licensing — can improve on government programs while preserving freedom of choice.",
      "Quantitative empirical methods and statistical analysis are essential for distinguishing causation from correlation in economics.",
      "The role of government should be limited to enforcing contracts, preventing monopoly, and managing the money supply — but these functions are important.",
      "Free markets and free societies are inseparable. Economic freedom is a prerequisite for political freedom.",
    ],
    agreements: [
      "Free markets allocate resources more efficiently than central planning. The price system coordinates knowledge that no central authority can possess.",
      "Government intervention typically produces unintended consequences worse than the problems it addresses. Minimum wage, rent control, and tariffs all harm their intended beneficiaries.",
      "Individual freedom and limited government are foundational values. Both oppose the expansion of state power over individual choice.",
      "The Federal Reserve's monetary policy failures have caused enormous economic damage, including contributing to the Great Depression.",
      "School choice through vouchers or similar mechanisms would improve education by introducing competition into a monopoly system.",
    ],
    disagreements: [
      { sowell: "Cultural and historical factors explain economic disparities better than pure economic models.", other: "Economic models and quantitative analysis are the primary tools for understanding economic outcomes." },
      { sowell: "Even well-designed reforms are dangerous because of the knowledge problem. Incremental caution is usually better than bold policy proposals.", other: "Bold market-based reforms — negative income tax, abolishing the Fed, school vouchers — should be proposed and advocated forcefully." },
      { sowell: "Intellectuals are a distinct class whose incentives diverge from those of the public. Their influence is primarily harmful.", other: "Public intellectuals have a responsibility to educate the public about economics and advocate for better policy." },
      { sowell: "Empirical analysis should rely primarily on historical comparison and case studies rather than econometric modeling.", other: "Econometric methods and statistical analysis are essential for rigorous economic research." },
      { sowell: "The drug war has produced consequences worse than the drugs themselves — mass incarceration, violence, corruption.", other: "Drug legalization is worth considering on libertarian grounds but the social costs of increased drug use must be weighed carefully." },
    ],
    relatedBooks: [
      { title: "Basic Economics", href: "/books/economics/basic-economics" },
      { title: "Applied Economics", href: "/books/economics/applied-economics" },
      { title: "A Conflict of Visions", href: "/books/political-philosophy/conflict-of-visions" },
    ],
  },
  {
    id: "sowell-vs-piketty",
    title: "Sowell vs. Thomas Piketty",
    subtitle: "Fundamentally opposed views on inequality — is it a problem to solve or a natural outcome of freedom?",
    otherName: "Thomas Piketty",
    sowellSummary: "Sowell argues that inequality is the natural result of people making different choices with different cultural capital in a free system. Income statistics are misleading because they track brackets, not people — most Americans move through income quintiles over their lifetimes. The relevant question is not whether outcomes are equal but whether the poor are getting richer, which they are under capitalism.",
    otherSummary: "Piketty argues that capitalism has an inherent tendency toward increasing inequality because the rate of return on capital (r) exceeds the rate of economic growth (g). Without intervention — specifically progressive wealth taxes and global coordination — inequality will return to 19th-century levels, undermining democracy and social stability.",
    sowellArguments: [
      "Income quintile data is misleading — it compares statistical brackets, not actual people. Most individuals move through brackets over their lifetimes as they age and gain experience.",
      "Inequality of outcomes is the natural result of different people making different choices with different abilities and cultural capital. Equal rules produce unequal results.",
      "Absolute well-being matters more than relative inequality. The poor in capitalist countries live better than the middle class of previous centuries.",
      "Wealth taxes and redistribution reduce the incentive to create wealth, making everyone poorer. The pie shrinks when you focus on dividing it rather than growing it.",
      "Historical comparisons of inequality ignore the dramatic improvement in living standards for all classes under capitalism.",
    ],
    otherArguments: [
      "When r > g (return on capital exceeds growth), wealth concentrates automatically over time regardless of individual merit or effort.",
      "Extreme inequality undermines democratic governance because concentrated wealth translates into concentrated political power.",
      "Progressive wealth taxes are necessary to prevent the emergence of a hereditary oligarchy incompatible with democratic ideals.",
      "The period of reduced inequality (1914-1980) was an exception caused by wars and policy, not a natural tendency of capitalism.",
      "Global coordination on taxation is necessary to prevent capital flight from undermining national redistribution efforts.",
    ],
    agreements: [
      "Both acknowledge that significant inequality exists in modern capitalist economies.",
      "Both agree that inherited wealth can create advantages that compound over generations.",
      "Both recognize that the post-WWII period saw reduced inequality compared to the Gilded Age.",
    ],
    disagreements: [
      { sowell: "Income mobility data shows most people move through brackets — the 'rich' and 'poor' are often the same people at different ages.", other: "Wealth concentration is structural and self-reinforcing. The r > g dynamic means inequality grows automatically without intervention." },
      { sowell: "Absolute improvement in living standards matters more than relative inequality. A rising tide lifts all boats.", other: "Relative inequality matters because it determines political power and social stability, not just material comfort." },
      { sowell: "Wealth taxes punish success, reduce investment, and shrink the total pie — making everyone worse off.", other: "Progressive wealth taxes are essential to prevent democratic erosion by concentrated economic power." },
      { sowell: "Historical inequality statistics are misleading because they compare different people at different points and ignore dramatic improvements in living standards.", other: "Historical data shows capitalism naturally tends toward extreme concentration absent wars or progressive policy." },
      { sowell: "Government redistribution creates perverse incentives and dependency. Market processes produce better outcomes for the poor than any transfer program.", other: "Market processes naturally concentrate wealth. Without redistribution, capitalism produces feudal-level inequality." },
    ],
    relatedBooks: [
      { title: "Discrimination and Disparities", href: "/books/race-culture/discrimination-and-disparities" },
      { title: "Basic Economics", href: "/books/economics/basic-economics" },
      { title: "The Quest for Cosmic Justice", href: "/books/social-policy/quest-for-cosmic-justice" },
      { title: "Social Justice Fallacies", href: "/books/social-policy/social-justice-fallacies" },
    ],
  },
  {
    id: "sowell-vs-kendi",
    title: "Sowell vs. Ibram X. Kendi",
    subtitle: "Diametrically opposed frameworks for understanding racial disparities — culture and choices vs. systemic racism.",
    otherName: "Ibram X. Kendi",
    sowellSummary: "Sowell argues that racial disparities are primarily explained by cultural, demographic, and geographic differences between groups — not by discrimination. He demonstrates that disparities exist in every society, including between groups where discrimination against the less successful group is impossible. The 'invincible fallacy' that disparities prove discrimination leads to policies that harm their intended beneficiaries.",
    otherSummary: "Kendi argues that any racial disparity is by definition the result of racist policy. There is no such thing as a 'not racist' policy — every policy either produces racial equity or racial inequity, making it either antiracist or racist. The solution is to pass antiracist policies that produce equal outcomes and to create antiracist institutions with the power to enforce equity.",
    sowellArguments: [
      "Disparities exist between every group in every society — even groups with no history of discrimination against each other. They are the statistical norm, not evidence of racism.",
      "Multiple factors — median age, family structure, geographic distribution, cultural attitudes toward education — explain group differences without invoking discrimination.",
      "Affirmative action and other race-based policies harm their intended beneficiaries through mismatch effects, stigma, and the creation of dependency.",
      "Black Americans who adopted strong cultural patterns around education and family advanced rapidly — proving the system rewards productivity regardless of race.",
      "The period of greatest Black economic progress (1940-1960) preceded the civil rights legislation and affirmative action programs that are credited with it.",
    ],
    otherArguments: [
      "Any racial disparity in outcomes is the result of racist policy. If outcomes are unequal, the system producing them is racist by definition.",
      "Individual behavior cannot explain group-level disparities. Attributing outcomes to culture or choices is itself a racist framework.",
      "Antiracist policies must produce equitable outcomes. A policy that doesn't close racial gaps, regardless of intent, is a racist policy.",
      "An antiracist constitutional amendment and Department of Antiracism should monitor and enforce equity across all institutions.",
      "The idea of a 'not racist' middle ground between racist and antiracist does not exist. Neutrality is complicity.",
    ],
    agreements: [
      "Both agree that racial disparities in income, wealth, education, and incarceration exist and are significant.",
      "Both agree that explicit racial discrimination (Jim Crow, slavery) was morally wrong and had lasting effects.",
      "Both believe their framework is the one that actually helps Black Americans — they disagree on what helps.",
    ],
    disagreements: [
      { sowell: "Disparities are the statistical norm in every society and usually reflect differences in age, culture, geography, and family structure.", other: "Any racial disparity is by definition the product of racist policy. There is no non-racist explanation for unequal outcomes." },
      { sowell: "Cultural factors — attitudes toward education, work, family — explain most outcome differences. Acknowledging this is not racist; it's empirical.", other: "Attributing outcomes to culture or behavior is itself a form of racism that blames victims for structural inequities." },
      { sowell: "Affirmative action harms its intended beneficiaries through mismatch, stigma, and dependency. The evidence is global and consistent.", other: "Antiracist policies producing equal outcomes are the only acceptable response. Opposing them is supporting racism." },
      { sowell: "Black economic progress was greatest before civil rights legislation — proving that internal factors drive advancement.", other: "Without antiracist policy intervention, racist structures will reproduce inequality indefinitely." },
      { sowell: "Concentrating power in antiracist institutions is dangerous — history shows such concentrated power is inevitably abused.", other: "A Department of Antiracism with enforcement power is necessary to achieve racial equity across all institutions." },
    ],
    relatedBooks: [
      { title: "Discrimination and Disparities", href: "/books/race-culture/discrimination-and-disparities" },
      { title: "Black Rednecks and White Liberals", href: "/books/race-culture/black-rednecks-white-liberals" },
      { title: "Social Justice Fallacies", href: "/books/social-policy/social-justice-fallacies" },
      { title: "Affirmative Action Around the World", href: "/books/social-policy/affirmative-action-around-world" },
    ],
  },
  {
    id: "sowell-vs-krugman",
    title: "Sowell vs. Paul Krugman",
    subtitle: "Free markets vs. Keynesian intervention — do economies self-correct or need government management?",
    otherName: "Paul Krugman",
    sowellSummary: "Sowell argues that markets are self-correcting through the price mechanism and that government intervention typically makes downturns longer and more severe. He traces how political incentives — favoring visible short-term action over invisible long-term consequences — systematically produce bad economic policy. The 2008 crisis, in Sowell's view, was caused by government housing policies, not by market failure.",
    otherSummary: "Krugman, a Nobel laureate and Keynesian economist, argues that markets frequently fail and that government intervention — fiscal stimulus during recessions, regulation of financial markets, and progressive taxation — is essential to maintain full employment, prevent crises, and reduce inequality. Austerity during recessions is economically destructive.",
    sowellArguments: [
      "Markets self-correct through price adjustment. Government intervention prolongs downturns by preventing the necessary reallocation of resources.",
      "The 2008 financial crisis was caused by government policies — the Community Reinvestment Act, Fannie Mae and Freddie Mac — that pressured banks to make risky loans, not by deregulation.",
      "Fiscal stimulus creates the illusion of recovery by borrowing from the future. The money must eventually be repaid or inflated away.",
      "Political incentives favor visible short-term action (stimulus spending) over invisible long-term costs (debt, malinvestment, inflation).",
      "Keynesian economics gives politicians a theoretical justification for doing what they want to do anyway — spend money and expand power.",
    ],
    otherArguments: [
      "Markets frequently produce sub-optimal outcomes — unemployment, inequality, financial crises — that require government correction.",
      "During recessions, government spending fills the demand gap that private sector cannot. This is not theoretical — it's proven by the recovery from the 2008 crisis.",
      "Austerity during recessions is self-defeating. Cutting spending when demand is already insufficient deepens the downturn.",
      "Income inequality reduces aggregate demand because the wealthy spend a smaller fraction of income than the poor. Redistribution boosts growth.",
      "Financial deregulation, not government housing policy, was the primary cause of the 2008 crisis. Banks took excessive risks because regulation was insufficient.",
    ],
    agreements: [
      "Both acknowledge that the 2008 financial crisis caused enormous economic damage and that policy failures contributed to it.",
      "Both agree that inflation is harmful and that monetary policy matters for economic outcomes.",
      "Both support free trade as generally beneficial — though they differ on the role of government in managing its effects.",
      "Both are highly credentialed economists who engage with empirical evidence, even as they reach opposite conclusions from it.",
    ],
    disagreements: [
      { sowell: "Markets self-correct. Government intervention prolongs recessions by preventing necessary adjustment.", other: "Markets fail regularly. Government stimulus is essential to restore full employment during recessions." },
      { sowell: "The 2008 crisis was caused by government housing policies that forced banks to make bad loans.", other: "Financial deregulation allowed banks to take excessive risks. More regulation was needed, not less." },
      { sowell: "Fiscal stimulus borrows from the future and creates an illusion of recovery. The debt must be repaid.", other: "During recessions, deficit spending is not just acceptable but essential. The cost of inaction is higher than the cost of debt." },
      { sowell: "Keynesian theory gives politicians a justification for expanding government power under the guise of economic management.", other: "Keynesian economics is established science. Opposing stimulus during recessions is ideological, not empirical." },
      { sowell: "Inequality is the natural result of freedom and differing productivity. Redistribution reduces total wealth creation.", other: "Extreme inequality reduces aggregate demand and undermines growth. Redistribution is economically efficient as well as just." },
    ],
    relatedBooks: [
      { title: "Basic Economics", href: "/books/economics/basic-economics" },
      { title: "Applied Economics", href: "/books/economics/applied-economics" },
      { title: "The Vision of the Anointed", href: "/books/political-philosophy/vision-of-the-anointed" },
    ],
  },
  {
    id: "sowell-vs-rawls",
    title: "Sowell vs. John Rawls",
    subtitle: "The constrained vs. unconstrained vision applied to justice — fair processes or fair outcomes?",
    otherName: "John Rawls",
    sowellSummary: "Sowell represents the constrained vision of justice: justice means fair processes — the same rules applied to everyone — accepting that equal rules produce unequal outcomes because people differ. Attempts to equalize outcomes require concentrating power in those who presume to know what 'fair' results look like, which is both impossible (the knowledge problem) and dangerous (power corrupts).",
    otherSummary: "Rawls' 'justice as fairness' argues that the just society is one designed behind a 'veil of ignorance' — not knowing your position in society. From this perspective, rational people would choose a system where inequalities are only permitted if they benefit the least advantaged (the 'difference principle'). This justifies redistribution and social insurance.",
    sowellArguments: [
      "Justice means equal rules, not equal outcomes. A fair game has winners and losers — making the score equal requires rigging the game.",
      "The 'veil of ignorance' is an intellectual exercise with no real-world application. Actual policy is made by people who know exactly who benefits and who pays.",
      "Concentrating power in redistributive institutions creates new injustices — the administrators become a privileged class accountable to no one.",
      "The knowledge problem makes it impossible for anyone to determine what 'fair' outcomes should look like across millions of unique circumstances.",
      "Historically, societies focused on equal processes have produced more prosperity for everyone — including the poorest — than societies focused on equal outcomes.",
    ],
    otherArguments: [
      "The 'veil of ignorance' reveals what truly impartial justice requires: no rational person would choose a system allowing extreme inequality if they might be at the bottom.",
      "The difference principle — inequalities permitted only if they benefit the least advantaged — is the rational basis for a just society.",
      "Equal opportunity is insufficient without equal starting conditions. Inherited wealth and social advantage undermine fair competition.",
      "Social institutions should be designed to maximize the position of the worst-off members. This is not charity but justice.",
      "Primary goods — rights, liberties, income, wealth, and the social bases of self-respect — should be distributed equally unless unequal distribution benefits everyone.",
    ],
    agreements: [
      "Both value individual liberty and agree that basic rights — speech, assembly, conscience — should be protected for everyone.",
      "Both acknowledge that completely equal outcomes are neither achievable nor desirable.",
      "Both recognize that the circumstances of one's birth (family, country, era) profoundly affect life outcomes in ways the individual did not choose.",
    ],
    disagreements: [
      { sowell: "Justice is procedural — the same rules for everyone. Fair processes, not fair outcomes, define a just society.", other: "Justice requires evaluating outcomes. Procedures that produce unjust distributions are themselves unjust." },
      { sowell: "The veil of ignorance is a thought experiment with no practical application. Real policy is made by interested parties.", other: "The veil of ignorance reveals what impartial rationality demands — it is the foundation of just institutional design." },
      { sowell: "Redistribution concentrates power dangerously. Those who redistribute become a privileged elite accountable to no one.", other: "Democratic redistribution through just institutions is the requirement of fairness, not a danger to it." },
      { sowell: "Equal processes produce more total prosperity for everyone, including the poor. Focusing on distribution shrinks the pie.", other: "Inequalities are only justified if they benefit the least advantaged. Prosperity that bypasses the worst-off is not just." },
      { sowell: "No one has the knowledge to determine what outcomes are 'fair' across millions of unique situations. The pretense of such knowledge is dangerous.", other: "The difference principle provides a clear, rational standard: does this inequality benefit those at the bottom? If not, it is unjust." },
    ],
    relatedBooks: [
      { title: "A Conflict of Visions", href: "/books/political-philosophy/conflict-of-visions" },
      { title: "The Quest for Cosmic Justice", href: "/books/social-policy/quest-for-cosmic-justice" },
      { title: "The Vision of the Anointed", href: "/books/political-philosophy/vision-of-the-anointed" },
      { title: "Social Justice Fallacies", href: "/books/social-policy/social-justice-fallacies" },
    ],
  },
];

export function getComparison(id: string): Comparison | undefined {
  return comparisons.find((c) => c.id === id);
}
