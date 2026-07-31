function MagicSection() {
  return (
    <section className="dark-section">
      <h2>One URL change. Full control.</h2>
      <p className="dark-sub">
        No SDK rewrite. No vendor lock-in. Point your existing agents at Xilos and instantly get routing, caching, guardrails, and complete visibility into every LLM call.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="code-block">
          <div><span className="code-comment"># Point any OpenAI-compatible client at Xilos</span></div>
          <div><span className="code-keyword">export</span> OPENAI_BASE_URL=<span className="code-string">"https://api.xilos.ai/api/v1"</span></div>
          <div><span className="code-keyword">export</span> OPENAI_API_KEY=<span className="code-string">your-xilos-key</span></div>
          <div>&nbsp;</div>
          <div><span className="code-comment"># Your agents now get:</span></div>
          <div><span className="code-arrow">→</span> Smart routing to the best model for each query</div>
          <div><span className="code-arrow">→</span> Semantic cache — 60-73% lower token costs</div>
          <div><span className="code-arrow">→</span> PII detection & guardrails, locally</div>
          <div><span className="code-arrow">→</span> Full audit trail of every interaction</div>
          <div><span className="code-arrow">→</span> Works with OpenAI, Anthropic, Google, Meta, 18+ providers</div>
        </div>
      </div>
    </section>
  );
}

export default MagicSection;
