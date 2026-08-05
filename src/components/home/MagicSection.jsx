function MagicSection() {
  return (
    <section className="dark-section">
      <h2>One URL change. Full control.</h2>
      <p className="dark-sub">
        No SDK rewrite. No vendor lock-in. Point your existing agents at Xilos and instantly get routing, caching, guardrails, and complete visibility into every LLM call.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div className="text-left px-2">
          <p className="text-lg font-semibold mb-3" style={{ color: '#C8D9E6', fontFamily: 'var(--font-sora)' }}>
            How it works
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-geist)' }}>
            Xilos speaks OpenAI's protocol natively. Any existing client that can set
            <code className="mx-1 px-1.5 py-0.5 rounded text-sm" style={{ background: 'rgba(200,217,230,0.1)', color: '#C8D9E6' }}>OPENAI_BASE_URL</code>
            can point at Xilos in seconds. No agent rewrites, no new SDKs, no migration projects.
          </p>
          <ul className="mt-4 space-y-3">
            {[
              'Smart routing to the best model for each query',
              'Semantic cache — 60-73% lower token costs',
              'PII detection & guardrails, locally',
              'Full audit trail of every interaction',
              'Works with OpenAI, Anthropic, Google, Meta, 18+ providers',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-geist)' }}>
                <span className="text-[#567C8D] font-bold mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="code-block">
          <div><span className="code-comment"># Point any OpenAI-compatible client at Xilos</span></div>
          <div><span className="code-keyword">export</span> OPENAI_BASE_URL=<span className="code-string">"https://api.xilos.ai/api/v1"</span></div>
          <div><span className="code-keyword">export</span> OPENAI_API_KEY=<span className="code-string">your-xilos-key</span></div>
        </div>
      </div>
    </section>
  );
}

export default MagicSection;