import { useState } from 'react';
import { Link } from 'react-router-dom';
import TheShadowAICrisis from '../../assets/TheShadowAICrisis.svg';
import filtersIcon from '../../assets/filters.svg';

function FiltersNews() {
  const [resources] = useState([
    { 
      id: 1, 
      title: 'The Shadow AI Crisis', 
      category: 'Collateral', 
      topic: 'AI Fundamentals',
      date: 'October 26, 2025',
      description: 'Mill Pond Research\'s comprehensive analysis of the shadow AI crisis, revealing critical enterprise vulnerabilities and introducing Xilos.AI as an integrated governance platform that observes, secures, and orchestrates AI deployments across organizations.',
      image: TheShadowAICrisis, 
    },
    
  ]);

  const categories = ['Collateral', 'Blog', 'Case Study', 'eBook', 'Whitepaper', 'Video'];
  const topics = ['AI Fundamentals', 'AI Strategy', 'Business Strategy', 'Company Overview', 'Data Governance', 'Data Privacy', 'Enterprise AI', 'Future of AI', 'Legal & Compliance', 'Security', 'Technology', 'WorkBench', 'Xilos'];

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

  // Filter resources based on selected filters
  const filteredResources = resources.filter(resource => {
    // Category match: no category selected OR category matches OR show all categories
    const categoryMatch = selectedCategories.size === 0 || selectedCategories.has(resource.category) || showAllCategories;
    
    // Topic match: no topic selected OR topic matches OR show all topics OR resource has no topic
    const topicMatch = selectedTopics.size === 0 || selectedTopics.has(resource.topic) || showAllTopics || !resource.topic;
    
    return categoryMatch && topicMatch;
  });

  return (
    <>
      <div className="flex justify-start gap-4 px-6 pt-6 pb-4 max-w-7xl mx-auto">
        <button 
          className={`button-filter ${showFilters ? 'selected' : ''}`}
          style={showFilters ? { backgroundColor: '#4B4B4B', color: '#FFFFFF', border: 'none' } : { backgroundColor: 'transparent', color: '#4B4B4B', border: '1px solid #4B4B4B' }}
          onClick={() => setShowFilters(!showFilters)}
        >
          <img 
            src={filtersIcon} 
            alt="Filters" 
            className="w-4 h-4" 
            style={showFilters ? { filter: 'brightness(0) invert(1)' } : { filter: 'brightness(0) saturate(100%)', color: '#4B4B4B' }}
          />
          Filters
        </button>
        <button 
          className="button-filter"
          style={{ backgroundColor: 'transparent', color: '#4B4B4B', border: '1px solid #4B4B4B' }}
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
      
      {/* Filters */}
      {showFilters && (
      <div className="flex flex-col gap-2 px-6 pt-4 pb-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <p className="small-font font-medium text-left">By Category</p>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            <button 
              className={`button-filter ${showAllCategories ? 'selected' : ''}`}
              onClick={() => toggleCategory('All')}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`button-filter ${selectedCategories.has(category) ? 'selected' : ''}`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="small-font font-medium text-left">By Topic</p>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            <button 
              className={`button-filter ${showAllTopics ? 'selected' : ''}`}
              onClick={() => toggleTopic('All')}
            >
              All
            </button>
            {topics.map(topic => (
              <button
                key={topic}
                className={`button-filter ${selectedTopics.has(topic) ? 'selected' : ''}`}
                onClick={() => toggleTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Display filtered resources */}
      <div className="px-6 pt-12 pb-6 max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map(resource => (
            <article
              key={resource.id}
              className="flex h-full flex-col justify-between rounded-2xl bg-[#FBFAF8] text-left shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-left text-sm font-semibold gap-4">
                  <span className="rounded-full bg-white px-3 py-1 text-[#4B4B4B]">{resource.category}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-[#4B4B4B]">{resource.topic}</span>
                </div>
                <p className="subheader mt-4 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>{resource.title}</p>
                <p className="small-font" style={{ color: "#567C8D" }}>{resource.date}</p>
                <p className="small-font mt-4" style={{ color: "#4B4B4B" }}>{resource.description}</p>
              </div>
              {resource.image && (
                <div className="relative">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-auto"
                  />
                  <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#F5EFE7] group" style={{ color: 'var(--color-primary)' }}>
                    Read More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
        {filteredResources.length === 0 && (
          <p className="text-center py-12" style={{ color: 'var(--color-slate)' }}>No resources match the selected filters.</p>
        )}
      </div>
    </>
  );
}

export default FiltersNews;

