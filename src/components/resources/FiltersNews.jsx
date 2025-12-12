import { useState } from 'react';
import { Link } from 'react-router-dom';
import TheShadowAICrisis from '../../assets/TheShadowAICrisis.svg';
import filtersIcon from '../../assets/filters.svg';
import CompanyOverviewMillPondResearch from '../../assets/CompanyOverviewMillPondResearch.svg';
import XilosDataSheet from '../../assets/XilosDataSheet.svg';
import TheSecretWarofBigToken from '../../assets/TheSecretWarofBigToken.svg';
import TheEmergenceofaShadowAICrisis from '../../assets/TheEmergenceofaShadowAICrisis.svg';
import MillPondResearchCapabilityStatement from '../../assets/MillPondResearchCapabilityStatement.svg';
import XilosQuickIntroduction from '../../assets/XilosQuickIntroduction.svg';
import XilosDefinitiveAnswer from '../../assets/XilosDefinitiveAnswer.svg';
import MillPondResearch1MinutePitchTechCrunchDisrupt2025 from '../../assets/MillPondResearch1MinutePitchTechCrunchDisrupt2025.svg';
import WorkBenchBrochure from '../../assets/WorkBenchBrochure.svg';
import XilosBrochure from '../../assets/XilosBrochure.svg';
import SoWhatHappensAfterAGI from '../../assets/SoWhatHappensAfterAGI.svg';
import HowEnterprisesCanSecurelyUnlockAIsPower from '../../assets/HowEnterprisesCanSecurelyUnlockAIsPower.svg';
import TheCanaryLeavingTheCoalMine from '../../assets/TheCanaryLeavingTheCoalMine.svg';
import TheContextDilemma from '../../assets/TheContextDilemma.svg';
import NavigatingAICopyrightComplianceUnderTheNewUSPTOGuidelines from '../../assets/NavigatingAICopyrightComplianceUnderTheNewUSPTOGuidelines.svg';
import HarnessingthePowerofAIwithSecureInfrastructure from '../../assets/HarnessingthePowerofAIwithSecureInfrastructure.svg';
import XilosTheMissingPieceforSecureEnterpriseAIinanAgenticWorld from '../../assets/XilosTheMissingPieceforSecureEnterpriseAIinanAgenticWorld.svg';
import TheDataHarvestTheBiggestThreatinAI from '../../assets/TheDataHarvestTheBiggestThreatinAI.svg';
import DataSovereigntyinTheAIEraNavigatingtheParadigmShift from '../../assets/DataSovereigntyinTheAIEraNavigatingtheParadigmShift.png';
import TheIntelligenceSolution from '../../assets/TheIntelligenceSolution.svg';
import AnImportantLimitationofAI from '../../assets/AnImportantLimitationofAI.svg';
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1
};

function FiltersNews() {
  const [resources] = useState([
    { 
      id: 1, 
      title: 'The Shadow AI Crisis', 
      category: 'Collateral', 
      topic: 'Product Collateral',
      date: 'October 26, 2025',
      description: 'Mill Pond Research\'s comprehensive analysis of the shadow AI crisis, revealing critical enterprise vulnerabilities and introducing Xilos.AI as an integrated governance platform that observes, secures, and orchestrates AI deployments across organizations.',
      image: TheShadowAICrisis, 
      link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/The%20Shadow%20AI%20Crisis%20-%20Xilos%20-%20Mill%20Pond%20Research.pdf',
    },
    {
      id: 2,
      title: 'Company Overview - Mill Pond Research Inc',
      category: 'Collateral',
      topic: 'Product Collateral',
      date: 'October 26, 2025',
      description: 'Mill Pond Research delivers the world\'s only end-to-end platform for deploying, securing, and orchestrating agentic AI at enterprise scale through WorkBench and Xilos—patented solutions that enable CIOs and CISOs to safely harness AI efficiency while protecting proprietary data and ensuring compliance across their networks.',
      image: CompanyOverviewMillPondResearch,
      link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/Company%20Overview%20-%20Mill%20Pond%20Research%20Inc.pdf',
    },
    {
      id: 3,
      title: 'Xilos - Data Sheet',
      category: 'Collateral',
      topic: 'Product Collateral',
      date: 'October 26, 2025',
      description: 'Xilos: Mill Pond Research\'s comprehensive AI governance platform that provides complete visibility, security, and orchestration for enterprise agentic AI systems while preventing data leakage, reducing costs, and enabling secure cross-departmental collaboration.',
      image: XilosDataSheet,
      link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/Xilos%20-%20Data%20Sheet%20-%20Mill%20Pond%20Research.pdf',
    },
    {
      id: 4,
      title: 'The Secret War or \"Big Token\"',
      category: 'Blog',
      topic: 'AI Strategy',
      date: 'September 1, 2025',
      description: 'The arrival of "Big Token" AI models has revolutionized enterprise capabilities, enabling unprecedented efficiency and insight extraction…',
      image: TheSecretWarofBigToken,
      link: 'https://blog.millpondresearch.com/the-rise-of-big-token-a700f967edac',
    },
    {
      id: 5,
      title: 'Mill Pond Research Capability Statement',
      category: 'Case Study',
      topic: 'Company Overview',
      date: 'Augest 24, 2025',
      description: 'Comprehensive overview of Mill Pond Research\'s capabilities, expertise, and proven track record in AI security and orchestration.',
      image: MillPondResearchCapabilityStatement,
      link: 'https://www.millpondresearch.com/resources/files/Mill%20Pond%20Research%20Capability%20Statement.pdf',
    },
    {
      id: 6,
      title: 'The Emergence of a Shadow AI Crisis',
      category: 'Whitepaper',
      topic: 'Security',
      date: 'Augest 5, 2025',
      description: 'A comprehensive whitepaper examining the growing challenge of shadow AI in enterprise environments and strategies for mitigation.',
      image: TheEmergenceofaShadowAICrisis,
      link: '#top',
    },
    {
      id: 7,
      title: 'Xilos - Quick Introduction',
      category: 'Video',
      topic: 'Xilos',
      date: 'Augest 4, 2025',
      description: 'A quick introduction to Xilos, the AI security and orchestration platform that gives you complete control over your AI agents.',
      image: XilosQuickIntroduction,
      link: 'https://www.youtube.com/watch?v=nJ1YIbrTL3s&feature=youtu.be',
    },
    {
      id: 8,
      title: 'Xilos: A Definitive Answer to the Shadow AI Crisis',
      category: 'Blog',
      topic: 'Security',
      date: 'July 31, 2025',
      description: 'The $670,000 Question: Why Shadow AI Is the Fastest-Growing Line Item in Your Next Breach.',
      image: XilosDefinitiveAnswer,
      link: 'https://devsecopsai.today/xilos-a-definitive-answer-to-the-shadow-ai-crisis-4793463779ec',
    },
    {
      id: 9,
      title: 'Mill Pond Research 1-Minute Pitch TechCrunch Disrupt 2025',
      category: 'Video',
      topic: 'Company Overview',
      date: 'July 30, 2025',
      description: 'Watch Mill Pond Research\'s 1-minute pitch presentation from TechCrunch Disrupt 2025, showcasing our AI security and orchestration solutions.',
      image: MillPondResearch1MinutePitchTechCrunchDisrupt2025,
      link: 'https://www.youtube.com/watch?v=IvWfC_ELe-w',
    },
    {
      id: 10,
      title: 'WorkBench Brochure',
      category: 'Collateral',
      topic: 'WorkBench',
      date: 'July 30, 2025',
      description: 'Detailed product information for WorkBench, the unified AI authoring platform for enterprise teams.',
      image: WorkBenchBrochure,
      link: 'https://www.millpondresearch.com/resources/files/Workbench%20-%20Brochure.pdf',
    },
    {
      id: 11,
      title: 'Xilos Brochure',
      category: 'Collateral',
      topic: 'Xilos',
      date: 'July 29, 2025',
      description: 'Comprehensive overview of Xilos features, capabilities, and enterprise security solutions for AI orchestration.',
      image: XilosBrochure,
      link: 'https://www.millpondresearch.com/resources/files/Xilos%20-%20Brochure.pdf',
    },
    {
      id: 12,
      title: 'So, What Happens After AGI?',
      category: 'Blog',
      topic: 'Future of AI',
      date: 'June 5, 2025',
      description: 'The digital landscape is transforming before our eyes. AI isn\'t merely a passing trend; it\'s the foundation upon which every application…',
      image: SoWhatHappensAfterAGI,
      link: 'https://blog.millpondresearch.com/so-what-happens-after-agi-a6aecac21b6a',
    },
    {
      id: 13,
      title: 'How Enterprises Can Securely Unlock AI\'s Power',
      category: 'Blog',
      topic: 'Enterprise AI',
      date: 'May 22, 2025',
      description: 'Navigating the complexities of AI governance isn\'t just about avoiding pitfalls; it\'s about building a foundation for innovation. Here\'s a…',
      image: HowEnterprisesCanSecurelyUnlockAIsPower,
      link: 'https://devsecopsai.today/how-enterprises-can-securely-unlock-ais-power-aa2e02329852',
    },
    {
      id: 14,
      title: 'The Canary Leaving the Coal Mine',
      category: 'Blog',
      topic: 'Business Strategy',
      date: 'May 20, 2025',
      description: 'The Existential Threat That Most Businesses Won\'t Survive.',
      image: TheCanaryLeavingTheCoalMine,
      link: 'https://blog.millpondresearch.com/the-canary-leaving-the-coal-mine-7e589d8822d0',
    },
    {
      id: 15,
      title: 'The Context Dilemma',
      category: 'Blog',
      topic: 'Technology',
      date: 'May 12, 2025',
      description: 'How Fragmented Digital Experiences Are Undermining Our AI Future.',
      image: TheContextDilemma,
      link: 'https://devsecopsai.today/the-context-dilemma-2c53a8a9a68f',
    },
    {
      id: 16,
      title: 'Navigating AI Copyright Compliance Under the New USPTO Guidelines',
      category: 'Blog',
      topic: 'Legal & Compliance',
      date: 'May 11, 2025',
      description: 'The New AI Copyright Landscape.',
      image: NavigatingAICopyrightComplianceUnderTheNewUSPTOGuidelines,
      link: 'https://blog.millpondresearch.com/how-to-navigate-ai-copyright-compliance-under-the-new-uspto-guidelines-25bc63505549',
    },
    {
      id: 17,
      title: 'Harnessing the Power of AI with Secure Infrastructure',
      category: 'Whitepaper',
      topic: 'Enterprise AI',
      date: 'May 9, 2025',
      description: 'A detailed whitepaper exploring how organizations can leverage AI capabilities while maintaining robust security and intelligent orchestration.',
      image: HarnessingthePowerofAIwithSecureInfrastructure,
      link: '#top',
    },
    {
      id: 18,
      title: 'Xilos: The Missing Piece for Secure Enterprise AI in an Agentic World',
      category: 'Blog',
      topic: 'Security',
      date: 'July 30, 2025',
      description: 'The Unseen Crisis in Enterprise AI Adoption.',
      image: XilosTheMissingPieceforSecureEnterpriseAIinanAgenticWorld,
      link: 'https://blog.millpondresearch.com/xilos-the-missing-piece-for-secure-enterprise-ai-in-an-agentic-world-a631f714347f',
    },
    {
      id: 19,
      title: 'The Data Harvest: The Biggest Threat in AI',
      category: 'Blog',
      topic: 'Data Privacy',
      date: 'April 22, 2025',
      description: 'State of the User + Provider Agreement.',
      image: TheDataHarvestTheBiggestThreatinAI,
      link: 'https://devsecopsai.today/the-data-harvest-how-llm-providers-leverage-user-interactions-for-model-improvement-75384c878b69',
    },
    {
      id: 20,
      title: 'Data Sovereignty in the AI Era: Navigating the Paradigm Shift',
      category: 'Blog',
      topic: 'Data Governance',
      date: 'February 17, 2025',
      description: 'Over the past few years, Data has become the lifeblood of business operations. The focus is moving away from the indiscriminate…',
      image: DataSovereigntyinTheAIEraNavigatingtheParadigmShift,
      link: 'https://blog.millpondresearch.com/data-sovereignty-in-the-ai-era-navigating-the-paradigm-shift-94cd368cf055',
    },
    {
      id: 21,
      title: 'The Intelligence Solution',
      category: 'Whitepaper',
      topic: 'eBook',
      date: 'March 13, 2025',
      description: 'A comprehensive eBook exploring the future of artificial intelligence and how organizations can harness its transformative power.',
      image: TheIntelligenceSolution,
      link: 'https://www.theintelligencesolution.com',
    },
    {
      id: 22,
      title: 'An Important Limitation of AI',
      category: 'Blog',
      topic: 'AI Fundamentals',
      date: 'February 13, 2025',
      description: 'In the pursuit of understanding artificial intelligence (AI) and its limitations, we must properly frame AI in our collective…',
      image: AnImportantLimitationofAI,
      link: 'https://blog.millpondresearch.com/an-important-limitation-of-ai-457324951af7',
    },
  ]);

  const categories = ['Collateral', 'Blog', 'Case Study', 'eBook', 'Whitepaper', 'Video'];
  const topics = ['AI Fundamentals', 'AI Strategy', 'Business Strategy', 'Company Overview', 'Data Governance', 'Data Privacy', 'Enterprise AI', 'Future of AI', 'Legal & Compliance', 'Product Collateral', 'Security', 'Technology', 'WorkBench', 'Xilos'];

  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedTopics, setSelectedTopics] = useState(new Set());
  const [showAllCategories, setShowAllCategories] = useState(true);
  const [showAllTopics, setShowAllTopics] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (category) => {
    if (category === 'All') {
      setShowAllCategories(!showAllCategories);
      setSelectedCategories(new Set());
    } else {
      const newSelected = new Set(selectedCategories);
      if (newSelected.has(category)) {
        newSelected.delete(category);
      } else {
        newSelected.add(category);
      }
      setSelectedCategories(newSelected);
      setShowAllCategories(false);
    }
  };

  const toggleTopic = (topic) => {
    if (topic === 'All') {
      setShowAllTopics(!showAllTopics);
      setSelectedTopics(new Set());
    } else {
      const newSelected = new Set(selectedTopics);
      if (newSelected.has(topic)) {
        newSelected.delete(topic);
      } else {
        newSelected.add(topic);
      }
      setSelectedTopics(newSelected);
      setShowAllTopics(false);
    }
  };

  const clearAll = () => {
    setSelectedCategories(new Set());
    setSelectedTopics(new Set());
    setShowAllCategories(true);
    setShowAllTopics(true);
  };

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategories.size === 0 || selectedCategories.has(resource.category) || showAllCategories;
    const topicMatch = selectedTopics.size === 0 || selectedTopics.has(resource.topic) || showAllTopics || !resource.topic;
    return categoryMatch && topicMatch;
  });

  return (
    <>
      {/* Top buttons */}
      <div className="max-w-7xl mx-auto pt-6 pb-4 px-6">
        {/* Match Masonry left gutter: container uses -ml-8, columns use pl-12 => net +4rem */}
        <div className="flex justify-start gap-4 pl-16">
          <button
            className={`button-filter ${showFilters ? 'selected' : ''}`}
            style={showFilters ? { backgroundColor: '#4B4B4B', color: '#FFFFFF' } : {}}
            onClick={() => setShowFilters(!showFilters)}
          >
            <img src={filtersIcon} alt="Filters" className="w-4 h-4" />
            Filters
          </button>

          <button
            className="button-filter"
            style={{ backgroundColor: 'transparent', border: '1px solid #4B4B4B' }}
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="flex flex-col gap-6 px-6 max-w-7xl mx-auto pb-6">
          <div>
            <p className="small-font font-medium text-left">By Category</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                className={`button-filter ${showAllCategories ? 'selected' : ''}`}
                onClick={() => toggleCategory('All')}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  className={`button-filter ${selectedCategories.has(c) ? 'selected' : ''}`}
                  onClick={() => toggleCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="small-font font-medium text-left">By Topic</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                className={`button-filter ${showAllTopics ? 'selected' : ''}`}
                onClick={() => toggleTopic('All')}
              >
                All
              </button>
              {topics.map((t) => (
                <button
                  key={t}
                  className={`button-filter ${selectedTopics.has(t) ? 'selected' : ''}`}
                  onClick={() => toggleTopic(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Masonry layout */}
      <div className="px-6 pt-12 pb-36 max-w-7xl mx-auto flex justify-center">
        {filteredResources.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-full -ml-8"
            columnClassName="pl-12 space-y-6"
          >
            {filteredResources.map((resource) => (
              <article
                key={resource.id}
                className="flex flex-col shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all rounded-3xl overflow-hidden bg-[#FBFAF8] text-left"
              >
                <div className="p-6 text-left">
                  <div className="flex gap-3 text-sm font-semibold flex-wrap">
                    <span className="rounded-full bg-white px-3 py-1 text-[#4B4B4B]">
                      {resource.category}
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-[#4B4B4B]">
                      {resource.topic}
                    </span>
                  </div>

                  <p className="subheader mt-4 text-sm leading-relaxed text-[#4B4B4B] text-left">
                    {resource.title}
                  </p>
                  <p className="small-font text-[#567C8D] text-left">{resource.date}</p>
                  <p className="small-font mt-4 text-[#4B4B4B] text-left">{resource.description}</p>
                </div>

                {resource.image && (
                  <div className="relative">
                    <img src={resource.image} alt={resource.title} className="w-full" />

                    {resource.link && (
                      resource.link === '#top' ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="readmore-btn"
                        >
                          Read More →
                        </button>
                      ) : resource.link.startsWith('/') ? (
                        <Link to={resource.link} className="readmore-btn">Read More →</Link>
                      ) : (
                        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="readmore-btn">
                          Read More →
                        </a>
                      )
                    )}
                  </div>
                )}
              </article>
            ))}
          </Masonry>
        ) : (
          <p className="text-center py-12 text-gray-500">
            No resources match the selected filters.
          </p>
        )}
      </div>
    </>
  );
}

export default FiltersNews;
