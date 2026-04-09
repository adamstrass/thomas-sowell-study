import ColumnPage from "@/components/ColumnPage";

const data = {
  id: "wealth-poverty",
  title: "Wealth & Poverty",
  href: "/topics/economics/wealth-poverty",
  summary: "Sowell challenges the widespread assumption that wealth is taken from the poor by the rich — that economics is zero-sum. He argues that wealth is created through productivity, not redistributed through exploitation. Geographic, cultural, and institutional factors explain why some nations and groups prosper while others don't, and that the history of the human race is a history of poverty, not prosperity. Prosperity is the anomaly that requires explanation; poverty is the default state that persists wherever the conditions for wealth creation are absent.",
  keyArguments: [
    "Wealth is created through productivity, not extracted from others. Economics is not zero-sum — trade and innovation create new wealth that didn't exist before.",
    "The history of the human race is a history of poverty. Prosperity is the anomaly requiring explanation, not poverty.",
    "Geographic factors — navigable waterways, climate, natural harbors — profoundly shape economic development by determining the ease of trade and cultural exchange.",
    "Cultural attitudes toward work, education, saving, and entrepreneurship vary enormously between groups and explain much of the variation in outcomes.",
    "Institutional factors — property rights, rule of law, contract enforcement — are prerequisites for sustained wealth creation. Resource-rich nations without good institutions remain poor.",
    "Income statistics mislead because they track brackets, not people. Most Americans in the bottom 20% at age 25 are not there at age 50.",
    "Foreign aid cannot substitute for the internal conditions — institutions, culture, human capital — that produce wealth. Aid often subsidizes the policies that perpetuate poverty.",
  ],
  caseStudies: [
    { title: "Resource Curse", description: "Nigeria and Venezuela have vast oil wealth but remain poor due to weak institutions and corruption. Japan and Switzerland have virtually no natural resources but are wealthy because of human capital and strong institutions." },
    { title: "Hong Kong", description: "A barren rock with no natural resources became one of the world's wealthiest places through free markets, rule of law, and human capital — proving that wealth comes from what people do, not what the land contains." },
    { title: "Income Mobility in the U.S.", description: "A University of Michigan study tracked actual individuals over time: 95% of those in the bottom 20% in 1975 had moved to a higher bracket by 1991. 'The poor' and 'the rich' are largely the same people at different ages." },
    { title: "Navigable Waterways", description: "Africa has a shorter coastline relative to its area than Europe, fewer natural harbors, and fewer navigable rivers. This geographic isolation limited trade and cultural exchange, slowing economic development for millennia — long before colonialism." },
  ],
  myths: [
    { myth: "The rich get richer and the poor get poorer.", reality: "When actual people are tracked (not statistical brackets), most move up over time. The 'rich' and 'poor' categories contain different people at different points." },
    { myth: "Poverty is caused by exploitation.", reality: "Poverty is the default state of humanity. It requires no explanation. Wealth requires explanation — and the explanation is productivity, institutions, and human capital." },
    { myth: "Natural resources determine national wealth.", reality: "Resource-rich nations (Nigeria, Venezuela) are often poor. Resource-poor nations (Japan, Switzerland, Singapore) are often rich. Institutions and culture matter more." },
    { myth: "Foreign aid can lift nations out of poverty.", reality: "Decades of aid have not produced development where institutions are bad. Aid often subsidizes corrupt governments and removes incentives to reform." },
  ],
  quotes: [
    { text: "The history of the human race has been a history of poverty, not prosperity. Prosperity requires explanation — poverty does not.", source: "Wealth, Poverty and Politics" },
    { text: "Despite a voluminous and often fervent literature on income distribution, the cold fact is that most income is not distributed: it is earned.", source: "Basic Economics" },
    { text: "Too much of what is called education is little more than an expensive isolation from reality.", source: "Wealth, Poverty and Politics" },
  ],
  relatedBooks: [
    { title: "Basic Economics", href: "/books/economics/basic-economics" },
    { title: "Applied Economics", href: "/books/economics/applied-economics" },
    { title: "Conquests and Cultures", href: "/books/history-culture/conquests-and-cultures" },
    { title: "Ethnic America", href: "/books/history-culture/ethnic-america" },
  ],
  discussionQuestions: [
    "If poverty is the default and prosperity the anomaly, what changes about how we approach development policy?",
    "Why do resource-rich nations often remain poor while resource-poor nations prosper?",
    "How does tracking actual people over time change our understanding of income inequality?",
    "What role does geography play in development, and can its effects be overcome?",
  ],
  counterarguments: [
    "'The rich exploit the poor.' Wealth is created through productivity and voluntary exchange. In a market transaction, both sides benefit or they wouldn't trade.",
    "'Inequality proves the system is rigged.' Inequality is the natural result of different people making different choices with different cultural capital. Equal rules produce unequal outcomes.",
    "'More foreign aid is needed.' Decades of aid have failed where institutions are bad. The Marshall Plan worked because institutional prerequisites already existed in Europe.",
  ],
  quiz: [
    { question: "What does Sowell say is the default state of humanity?", options: ["Prosperity", "Equality", "Poverty — it requires no explanation; prosperity does", "Conflict"], correctIndex: 2, explanation: "Poverty has been the norm throughout history. What's unusual is prosperity — and understanding what creates it is the key question." },
    { question: "Why are some resource-rich nations poor?", options: ["Resources are overvalued", "They lack the institutions — property rights, rule of law — needed to convert resources into wealth", "They were exploited by colonizers", "Resources cause conflict"], correctIndex: 1, explanation: "Nigeria has oil; Switzerland has rocks. The difference is institutions, not resources." },
    { question: "What do income mobility studies show?", options: ["The poor stay poor forever", "95% of those in the bottom 20% moved to higher brackets over 16 years", "Income is fixed at birth", "Only education changes income"], correctIndex: 1, explanation: "Tracking actual people reveals most move through brackets. 'The poor' are largely young people who will earn more later." },
    { question: "How does geography affect development?", options: ["It doesn't", "Navigable waterways and harbors enable trade and cultural exchange, accelerating development", "Only climate matters", "Geography determines intelligence"], correctIndex: 1, explanation: "Trade is the engine of development. Geographic features that facilitate trade — rivers, harbors, coastline — give regions a developmental advantage." },
    { question: "Why does Sowell say most income is 'earned, not distributed'?", options: ["To defend the rich", "Because income results from productivity and voluntary exchange, not from a central authority parceling out shares", "To oppose all redistribution", "It's a technical economic term"], correctIndex: 1, explanation: "The language of 'distribution' implies someone is handing out shares. In reality, people earn income by producing things others value." },
    { question: "What does Hong Kong demonstrate about wealth?", options: ["Natural resources are essential", "A barren rock became wealthy through free markets, rule of law, and human capital", "British colonialism was beneficial", "Small countries have advantages"], correctIndex: 1, explanation: "Hong Kong had nothing but people and institutions — proving wealth comes from what people do, not what the land contains." },
    { question: "Why does foreign aid often fail?", options: ["Not enough is given", "Aid subsidizes bad governments and removes incentives to reform — it treats symptoms, not causes", "Aid is stolen by middlemen", "Recipient countries reject it"], correctIndex: 1, explanation: "Aid flows to governments. When those governments pursue bad policies, aid subsidizes the very conditions that perpetuate poverty." },
    { question: "What cultural factors affect wealth creation?", options: ["None — culture is irrelevant", "Attitudes toward work, education, saving, and entrepreneurship vary between groups and explain outcome differences", "Only Western culture creates wealth", "Culture is determined by race"], correctIndex: 1, explanation: "Groups with strong work ethics, educational emphasis, and savings habits create wealth wherever they go — regardless of race or location." },
    { question: "How do income statistics mislead?", options: ["They're accurate", "They track brackets, not people — comparing the bottom 20% today to the bottom 20% decades ago compares different individuals", "They overcount the rich", "They ignore inflation"], correctIndex: 1, explanation: "A 25-year-old earning entry-level wages and a 50-year-old at peak earnings aren't in the same bracket — but they may be the same person." },
    { question: "What is the 'zero-sum fallacy' about wealth?", options: ["A mathematical concept", "The false belief that one person's gain requires another's loss — when in fact trade and innovation create new wealth", "That all wealth sums to zero", "A theory about balanced budgets"], correctIndex: 1, explanation: "When two people trade voluntarily, both gain. When an entrepreneur creates a new product, new wealth exists that wasn't there before. Economics is not zero-sum." },
  ],
};

export default function WealthPoverty() {
  return <ColumnPage {...data} />;
}
